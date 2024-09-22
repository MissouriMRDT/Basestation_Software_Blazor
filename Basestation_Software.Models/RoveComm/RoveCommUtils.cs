using System.Buffers.Binary;
using System.Runtime.InteropServices;

namespace Basestation_Software.Models.RoveComm;

/// <summary>
/// A simple helper struct representing the metadata about a packet as read from the network.
/// </summary>
public struct RoveCommHeader
{
    public byte Version;
    public short DataID;
    public short DataCount;
    public byte DataType;
}

public class RoveCommException : Exception
{
    public RoveCommException(string message) : base(message) { }
    public RoveCommException(string message, Exception inner) : base(message, inner) { }
}

/// <summary>
/// Helper functions used by RoveComm internally.
/// </summary>
public static class RoveCommUtils
{
    /// <summary>
    /// Convert an integer to a RoveCommDataType safely.
    /// </summary>
    /// <param name="type">The integer to convert.</param>
    /// <returns>The associated RoveCommDataType.</returns>
    /// <exception cref="RoveCommException">
    /// Thrown if the integer does not match a RoveCommDataType.
    /// </exception>
    public static RoveCommDataType ParseDataType(int type)
    {
        if (Enum.IsDefined(typeof(RoveCommDataType), type))
        {
            return (RoveCommDataType)type;
        }
        else
        {
            throw new RoveCommException("Failed to convert int to RoveCommDataType.");
        }
    }

    /// <summary>
    /// Get the size of a RoveCommDataType.
    /// </summary>
    /// <param name="type">The RoveCommDataType to get the size of.</param>
    /// <returns>The size in bytes of the RoveCommDataType.</returns>
    /// <exception cref="RoveCommException">
    /// Thrown if the RoveCommDataType is unknown.
    /// </exception>
    public static int DataTypeSize(RoveCommDataType type)
    {
        return type switch
        {
            RoveCommDataType.INT8_T => 1,
            RoveCommDataType.UINT8_T => 1,
            RoveCommDataType.INT16_T => 2,
            RoveCommDataType.UINT16_T => 2,
            RoveCommDataType.INT32_T => 4,
            RoveCommDataType.UINT32_T => 4,
            RoveCommDataType.FLOAT => 4,
            RoveCommDataType.DOUBLE => 8,
            RoveCommDataType.CHAR => 1,
            _ => throw new RoveCommException("Failed to find size of unknown RoveCommDataType."), // unreachable
        };
    }

    /// <summary>
    /// Convert a System.Type to a RoveCommDataType.
    /// </summary>
    /// <param name="type">The System.Type to convert.</param>
    /// <returns>The associated RoveCommDataType.</returns>
    /// <exception cref="RoveCommException">
    /// Thrown if the System.Type did not match a RoveCommDataType.
    /// </exception>
    public static RoveCommDataType DataTypeFromType(Type type)
    {
        TypeCode code = Type.GetTypeCode(type);
        return code switch
        {
            TypeCode.SByte => RoveCommDataType.INT8_T,
            TypeCode.Byte => RoveCommDataType.UINT8_T,
            TypeCode.Int16 => RoveCommDataType.INT16_T,
            TypeCode.UInt16 => RoveCommDataType.UINT16_T,
            TypeCode.Int32 => RoveCommDataType.INT32_T,
            TypeCode.UInt32 => RoveCommDataType.UINT32_T,
            TypeCode.Single => RoveCommDataType.FLOAT,
            TypeCode.Double => RoveCommDataType.DOUBLE,
            TypeCode.Char => RoveCommDataType.CHAR,
            _ => throw new RoveCommException("Failed to create RoveCommDataType from unknown System.Type."),
        };
    }

    /// <summary>
    /// Query a board's info form the Manifest by its name.
    /// </summary>
    /// <param name="boardName">The name of the board.</param>
    /// <param name="boardDesc">The RoveCommBoardDesc to fill in with informaiton, if the board is found.</param>
    /// <returns>True if the board was found in the Manifest.</returns>
    public static bool FindBoardByName(string boardName, out RoveCommBoardDesc? boardDesc)
    {
        return RoveCommManifest.Boards.TryGetValue(boardName, out boardDesc);
    }

    /// <summary>
    /// Query board and packet info from the Manifest by their names.
    /// </summary>
    /// <param name="boardName">The name of the board.</param>
    /// <param name="dataIdString">The name of the packet.</param>
    /// <param name="boardDesc">The RoveCommBoardDesc to fill in with information, if the board is found.</param>
    /// <param name="packetDesc">The RoveCommPacketDesc to fill in with information, if the packet is found.</param>
    /// <returns>True only if both the board and the packet were found in the manifest.</returns>
    public static bool FindByBoardAndDataID(string boardName, string dataIdString, out RoveCommBoardDesc? boardDesc, out RoveCommPacketDesc? packetDesc)
    {
        packetDesc = null;
        return RoveCommManifest.Boards.TryGetValue(boardName, out boardDesc)
            && (
                   boardDesc.Commands.TryGetValue(dataIdString, out packetDesc)
                || boardDesc.Telemetry.TryGetValue(dataIdString, out packetDesc)
                || boardDesc.Errors.TryGetValue(dataIdString, out packetDesc)
            );
    }


    /// <summary>
    /// Read a RoveCommPacket header from the given byte buffer.
    /// </summary>
    /// <param name="data">The byte buffer to read; assumed to be in Big Endian.</param>
    /// <returns>The parsed RoveCommHeader.</returns>
    /// <exception cref="RoveCommException">
    /// Thrown if a RoveCommHeader could not be read from the given buffer.
    /// </exception>
    public static RoveCommHeader ParseHeader(ReadOnlySpan<byte> data)
    {
        if (data.Length < RoveCommConsts.HeaderSize)
        {
            throw new RoveCommException("Failed to parse RoveCommHeader: not enough bytes.");
        }
        else
        {
            if (data[0] != RoveCommConsts.RoveCommVersion)
            {
                throw new RoveCommException("Failed to parse RoveCommHeader: invalid version.");
            }

            return new RoveCommHeader
            {
                Version = data[0],
                DataID = BinaryPrimitives.ReadInt16BigEndian(data.Slice(1, 2)),
                DataCount = BinaryPrimitives.ReadInt16BigEndian(data.Slice(3, 2)),
                DataType = data[5]
            };
        }
    }
    /// <summary>
    /// Pack a RoveCommHeader into the given byte buffer.
    /// </summary>
    /// <param name="dest">The byte buffer in which to pack the header.</param>
    /// <param name="header">The RoveCommHeader to pack.</param>
    /// <exception cref="RoveCommException">
    /// Thrown if the given buffer is too small to hold the header.
    /// </exception>
    public static void PackHeader(Span<byte> dest, RoveCommHeader header)
    {
        if (dest.Length < RoveCommConsts.HeaderSize)
        {
            throw new RoveCommException("Failed to pack RoveCommHeader: the given buffer is too small for the header.");
        }

        dest[0] = (byte)RoveCommConsts.RoveCommVersion;
        BinaryPrimitives.WriteInt16BigEndian(dest.Slice(1, 2), header.DataID);
        BinaryPrimitives.WriteInt16BigEndian(dest.Slice(3, 2), header.DataCount);
        dest[5] = header.DataType;
    }


    /// <summary>
    /// Read a RoveCommPacket from the given byte buffer.
    /// </summary>
    /// <param name="data">The byte buffer to read; assumed to be in Big Endian.</param>
    /// <returns>The parsed RoveCommPacket.</returns>
    /// <exception cref="RoveCommException">
    /// Thrown if a RoveCommPacket could not be read from the given buffer.
    /// </exception>
    public static RoveCommPacket<T> ParsePacket<T>(ReadOnlySpan<byte> data)
    {
        // Parse header to get metadata -- will error if there isn't enough data to parse the header.
        RoveCommHeader header = ParseHeader(data);
        if (data[0] != RoveCommConsts.RoveCommVersion)
        {
            throw new RoveCommException("Failed to parse RoveCommHeader: invalid version.");
        }
        // Make sure packet data size is not over the maximum size.
        int dataSize = DataTypeSize(ParseDataType(header.DataType)) * header.DataCount;
        if (dataSize > RoveCommConsts.MaxDataSize)
        {
            throw new RoveCommException("Failed to parse RoveCommPacket: max packet size exceeded.");
        }
        // Packet create new packet to write to.
        RoveCommPacket<T> packet = new RoveCommPacket<T>(header.DataID, header.DataCount);

        // Create a slice to the data portion of the packet.
        var dataBuf = data.Slice(RoveCommConsts.HeaderSize);
        // We might have received a packet that isn't as long as it claims to be.
        if (dataBuf.Length != dataSize)
        {
            throw new RoveCommException("Failed to parse RoveCommPacket: not enough data from network to fill packet.");
        }
        // Read data from the packet from the data buffer. Remember: network byte order is Big Endian!
        switch (packet.Data)
        {
            // SEXY PATTERN MATCHING
            case List<sbyte> packetData:
                {
                    var casted = MemoryMarshal.Cast<byte, sbyte>(dataBuf);
                    for (int i = 0; i < header.DataCount; i++) packetData.Add(casted[i]);
                    break;
                }
            case List<byte> packetData:
                {
                    // No cast necessary -- already bytes.
                    for (int i = 0; i < header.DataCount; i++) packetData.Add(dataBuf[i]);
                    break;
                }
            case List<short> packetData:
                {
                    for (int i = 0; i < header.DataCount; i++)
                    {
                        packetData.Add(BinaryPrimitives.ReadInt16BigEndian(dataBuf.Slice(i * 2, 2)));
                    }

                    break;
                }
            case List<ushort> packetData:
                {
                    for (int i = 0; i < header.DataCount; i++)
                    {
                        packetData.Add(BinaryPrimitives.ReadUInt16BigEndian(dataBuf.Slice(i * 2, 2)));
                    }

                    break;
                }
            case List<int> packetData:
                {
                    for (int i = 0; i < header.DataCount; i++)
                    {
                        packetData.Add(BinaryPrimitives.ReadInt32BigEndian(dataBuf.Slice(i * 4, 4)));
                    }

                    break;
                }
            case List<uint> packetData:
                {
                    for (int i = 0; i < header.DataCount; i++)
                    {
                        packetData.Add(BinaryPrimitives.ReadUInt32BigEndian(dataBuf.Slice(i * 4, 4)));
                    }

                    break;
                }
            case List<float> packetData:
                {
                    for (int i = 0; i < header.DataCount; i++)
                    {
                        packetData.Add(BinaryPrimitives.ReadUInt32BigEndian(dataBuf.Slice(i * 4, 4)));
                    }

                    break;
                }
            case List<double> packetData:
                {
                    for (int i = 0; i < header.DataCount; i++)
                    {
                        packetData.Add(BinaryPrimitives.ReadDoubleBigEndian(dataBuf.Slice(i * 8, 8)));
                    }

                    break;
                }
            case List<char> packetData:
                {
                    for (int i = 0; i < header.DataCount; i++)
                    {
                        // Careful: C# stores chars in UTF-16, so they are 2 bytes wide.
                        // This can cause encoding errors if converting byte[] directly to string.
                        packetData.Add((char)dataBuf[i]);
                    }

                    break;
                }
            default:
                {
                    throw new RoveCommException("Failed to parse RoveCommPacket: invalid data type.");
                }
        }

        return packet;
    }
    /// <summary>
    /// Pack a RoveCommPacket into a byte array.
    /// </summary>
    /// <param name="packet">The packet to pack.</param>
    /// <returns>A byte array packed in Big Endian.</returns>
    /// <exception cref="RoveCommException">
    /// Thrown if the given packet is too large.
    /// </exception>
    public static byte[] PackPacket<T>(RoveCommPacket<T> packet)
    {
        int dataSize = packet.DataCount * DataTypeSize(packet.DataType);
        if (dataSize > RoveCommConsts.MaxDataSize)
        {
            throw new RoveCommException("Failed to pack RoveCommPacket: payload exceeds max data size.");
        }
        byte[] dataBuf = new byte[RoveCommConsts.HeaderSize + dataSize];
        PackPacket(dataBuf, packet);
        return dataBuf;
    }
    public static void PackPacket<T>(Span<byte> dest, RoveCommPacket<T> packet)
    {
        // Make sure the packet and destination buffer are within size constraints.
        int packetSize = RoveCommConsts.HeaderSize + packet.DataCount * DataTypeSize(packet.DataType);
        if (dest.Length < packetSize)
        {
            throw new RoveCommException("Failed to pack RoveCommPacket: the given buffer is too small to hold the packet.");
        }
        if (packetSize > RoveCommConsts.HeaderSize + RoveCommConsts.MaxDataSize)
        {
            throw new RoveCommException("Failed to pack RoveCommPacket: payload exceeds max data size.");
        }
        // Pack header in network byte order.
        PackHeader(dest, packet.GetHeader());
        // Create a slice to the data portion of the data buffer.
        var dataBuf = dest.Slice(RoveCommConsts.HeaderSize);
        // Pack data in network byte order.
        switch (packet.Data)
        {
            case List<sbyte> packetData:
                {
                    var casted = MemoryMarshal.Cast<byte, sbyte>(dataBuf);
                    for (int i = 0; i < packet.DataCount; i++)
                    {
                        casted[i] = packetData[i];
                    }

                    break;
                }
            case List<byte> packetData:
                {
                    for (int i = 0; i < packet.DataCount; i++)
                    {
                        dataBuf[0] = packetData[0];
                    }

                    break;
                }
            case List<short> packetData:
                {
                    for (int i = 0; i < packet.DataCount; i++)
                    {
                        BinaryPrimitives.WriteInt16BigEndian(dataBuf.Slice(i * 2, 2), packetData[i]);
                    }

                    break;
                }
            case List<ushort> packetData:
                {
                    for (int i = 0; i < packet.DataCount; i++)
                    {
                        BinaryPrimitives.WriteUInt16BigEndian(dataBuf.Slice(i * 2, 2), packetData[i]);
                    }

                    break;
                }
            case List<int> packetData:
                {
                    for (int i = 0; i < packet.DataCount; i++)
                    {
                        BinaryPrimitives.WriteInt32BigEndian(dataBuf.Slice(i * 4, 4), packetData[i]);
                    }

                    break;
                }
            case List<uint> packetData:
                {
                    for (int i = 0; i < packet.DataCount; i++)
                    {
                        BinaryPrimitives.WriteUInt32BigEndian(dataBuf.Slice(i * 4, 4), packetData[i]);
                    }

                    break;
                }
            case List<float> packetData:
                {
                    for (int i = 0; i < packet.DataCount; i++)
                    {
                        BinaryPrimitives.WriteSingleBigEndian(dataBuf.Slice(i * 4, 4), packetData[i]);
                    }

                    break;
                }
            case List<double> packetData:
                {
                    for (int i = 0; i < packet.DataCount; i++)
                    {
                        BinaryPrimitives.WriteDoubleBigEndian(dataBuf.Slice(i * 8, 8), packetData[i]);
                    }

                    break;
                }
            case List<char> packetData:
                {
                    for (int i = 0; i < packet.DataCount; i++)
                    {
                        dataBuf[i] = (byte)packetData[i];
                    }

                    break;
                }
            default:
                {
                    throw new RoveCommException("Failed to pack RoveCommPacket: invalid data type.");
                }
        }
    }
}

