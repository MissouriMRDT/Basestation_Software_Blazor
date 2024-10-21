namespace Basestation_Software.Models.RoveComm;

/// <summary>
/// RoveComm Packet Format:
/// <code>
///  0               1               2               3               4               5
///  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0
///  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
///  |    Version    |            DataID             |         DataCount             |
///  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
///  |   Data Type   |                Data (Variable)                        ...     |
///  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
/// </code>
/// Note: the size of Data is DataCount * DataTypeSize(DataType)
/// </summary>
/// <typeparam name="T">One of: sbyte, byte, short, ushort, int, uint, float, double, or char.</typeparam>
public class RoveCommPacket<T>
{
    public int DataID { get; set; }
    public int DataCount { get { return Data.Count; } }
    public RoveCommDataType DataType { get; init; }
    public List<T> Data { get; set; }

    public RoveCommPacket(int dataId, List<T> data)
    {
        DataID = dataId;
        Data = data;
        DataType = RoveCommUtils.DataTypeFromType(typeof(T));
    }

    public RoveCommPacket(int dataId, int dataCount) :
        this(dataId, new List<T>(new T[dataCount]))
    { }

    public RoveCommHeader GetHeader()
    {
        return new RoveCommHeader
        {
            Version = (byte)RoveCommConsts.RoveCommVersion,
            DataID = (short)DataID,
            DataCount = (short)DataCount,
            DataType = (byte)DataType,
        };
    }
}
