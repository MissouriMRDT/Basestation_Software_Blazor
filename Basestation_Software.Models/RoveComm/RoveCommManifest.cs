namespace Basestation_Software.Models.RoveComm;

public static class RoveCommConsts
{
    public static readonly int RoveCommVersion = 3;
    public static readonly int UDPPort = 11000;
    public static readonly int TCPPort = 12000;
    public static readonly int HeaderSize = 6;
    public static readonly int MaxDataSize = 65535 / 3;
    public static readonly int UpdateRate = 100; // milliseconds
}

public enum RoveCommDataType
{
    INT8_T = 0,
    UINT8_T = 1,
    INT16_T = 2,
    UINT16_T = 3,
    INT32_T = 4,
    UINT32_T = 5,
    FLOAT = 6,
    DOUBLE = 7,
    CHAR = 8,
}

public class RoveCommBoardDesc
{
    public string IP { get; init; }
    public IReadOnlyDictionary<string, RoveCommPacketDesc> Commands { get; init; }
    public IReadOnlyDictionary<string, RoveCommPacketDesc> Telemetry { get; init; }
    public IReadOnlyDictionary<string, RoveCommPacketDesc> Errors { get; init; }

    public RoveCommBoardDesc(string ip,
                             IReadOnlyDictionary<string, RoveCommPacketDesc>? commands = null,
                             IReadOnlyDictionary<string, RoveCommPacketDesc>? telemetry = null,
                             IReadOnlyDictionary<string, RoveCommPacketDesc>? errors = null)
    {
        IP = ip;
        Commands = commands ?? new Dictionary<string, RoveCommPacketDesc>();
        Telemetry = telemetry ?? new Dictionary<string, RoveCommPacketDesc>();
        Errors = errors ?? new Dictionary<string, RoveCommPacketDesc>();
    }
}


public class RoveCommPacketDesc
{
    public int DataID { get; init; }
    public int DataCount { get; init; }
    public RoveCommDataType DataType { get; init; }

    public RoveCommPacketDesc(int dataId, int dataCount, RoveCommDataType dataType)
    {
        DataID = dataId;
        DataCount = dataCount;
        DataType = dataType;
    }
}

public static class RoveCommManifest
{
    public static class SystemPackets
    {
        public static readonly int PING = 1;
        public static readonly int PING_REPLY = 2;
        public static readonly int SUBSCRIBE = 3;
        public static readonly int UNSUBSCRIBE = 4;
        public static readonly int INVALID_VERSION = 5;
        public static readonly int NO_DATA = 6;
    }

    public static readonly IReadOnlyDictionary<string, RoveCommBoardDesc> Boards = new Dictionary<string, RoveCommBoardDesc>
    {
        ["Core"] = new RoveCommBoardDesc
        (
            ip: "192.168.2.110",
            commands: new Dictionary<string, RoveCommPacketDesc>
            {
                // [LeftSpeed, RightSpeed] (-1, 1)-> (-100%, 100%)
                ["DriveLeftRight"] = new RoveCommPacketDesc
                (
                    3000,
                    2,
                    RoveCommDataType.FLOAT
                ),
                // [LF, LM, LR, RF, RM, RR] (-1, 1)-> (-100%, 100%)
                ["DriveIndividual"] = new RoveCommPacketDesc
                (
                    3001,
                    6,
                    RoveCommDataType.FLOAT
                ),
                // [0-override off, 1-override on]
                ["WatchdogOverride"] = new RoveCommPacketDesc
                (
                    3002,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // [Tilt](degrees -180-180)
                ["LeftDriveGimbalIncrement"] = new RoveCommPacketDesc
                (
                    3003,
                    1,
                    RoveCommDataType.INT16_T
                ),
                // [Tilt](degrees -180-180)
                ["RightDriveGimbalIncrement"] = new RoveCommPacketDesc
                (
                    3004,
                    1,
                    RoveCommDataType.INT16_T
                ),
                // [Pan, Tilt](degrees -180-180)
                ["LeftMainGimbalIncrement"] = new RoveCommPacketDesc
                (
                    3005,
                    2,
                    RoveCommDataType.INT16_T
                ),
                // [Pan, Tilt](degrees -180-180)
                ["RightMainGimbalIncrement"] = new RoveCommPacketDesc
                (
                    3006,
                    2,
                    RoveCommDataType.INT16_T
                ),
                // [Tilt](degrees -180-180)
                ["BackDriveGimbalIncrement"] = new RoveCommPacketDesc
                (
                    3007,
                    1,
                    RoveCommDataType.INT16_T
                ),
                // [R, G, B] (0, 255)
                ["LEDRGB"] = new RoveCommPacketDesc
                (
                    3008,
                    3,
                    RoveCommDataType.UINT8_T
                ),
                // [Pattern] (Enum)
                ["LEDPatterns"] = new RoveCommPacketDesc
                (
                    3009,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // [Teleop, Autonomy, Reached Goal] (enum)
                ["StateDisplay"] = new RoveCommPacketDesc
                (
                    3010,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // Set Brightness (0-255)
                ["Brightness"] = new RoveCommPacketDesc
                (
                    3011,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // 0: Teleop, 1: Autonomy
                ["SetWatchdogMode"] = new RoveCommPacketDesc
                (
                    3012,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // Set the message to display on the lighting panel; null terminator ends string early
                ["LEDText"] = new RoveCommPacketDesc
                (
                    3013,
                    256,
                    RoveCommDataType.CHAR
                )
            },
            telemetry: new Dictionary<string, RoveCommPacketDesc>
            {
                // [LF, LM, LR, RF, RM, RR] (-1, 1)-> (-100%, 100%)
                ["DriveSpeeds"] = new RoveCommPacketDesc
                (
                    3100,
                    6,
                    RoveCommDataType.FLOAT
                ),
                // [Roll, Pitch, Yaw] degrees
                ["IMUData"] = new RoveCommPacketDesc
                (
                    3101,
                    3,
                    RoveCommDataType.FLOAT
                ),
                // [xAxis, yAxis, zAxis] Accel in m/s^2
                ["AccelerometerData"] = new RoveCommPacketDesc
                (
                    3102,
                    3,
                    RoveCommDataType.FLOAT
                )
            },
            errors: new Dictionary<string, RoveCommPacketDesc>
            {

            }
        ),
        ["PMS"] = new RoveCommBoardDesc
        (
            ip: "192.168.2.102",
            commands: new Dictionary<string, RoveCommPacketDesc>
            {
                // Power off all systems except network (PMS will stay on)
                ["EStop"] = new RoveCommPacketDesc
                (
                    4000,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // Power off all systems including network, cannot recover without physical reboot (PMS will stay on)
                ["Suicide"] = new RoveCommPacketDesc
                (
                    4001,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // Cycle all systems including network off and back on (PMS will stay on)
                ["Reboot"] = new RoveCommPacketDesc
                (
                    4002,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // [Motor, Core, Aux] (bitmasked) [1-Enable, 0-No change]
                ["EnableBus"] = new RoveCommPacketDesc
                (
                    4003,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // [Motor, Core, Aux] (bitmasked) [1-Disable, 0-No change]
                ["DisableBus"] = new RoveCommPacketDesc
                (
                    4004,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // [Motor, Core, Aux] (bitmasked) [1-Enable, 0-Disable]
                ["SetBus"] = new RoveCommPacketDesc
                (
                    4005,
                    1,
                    RoveCommDataType.UINT8_T
                )
            },
            telemetry: new Dictionary<string, RoveCommPacketDesc>
            {
                // Total current draw from battery
                ["PackCurrent"] = new RoveCommPacketDesc
                (
                    4100,
                    1,
                    RoveCommDataType.FLOAT
                ),
                // Pack voltage
                ["PackVoltage"] = new RoveCommPacketDesc
                (
                    4101,
                    1,
                    RoveCommDataType.FLOAT
                ),
                // C1, C2, C3, C4, C5, C6
                ["CellVoltage"] = new RoveCommPacketDesc
                (
                    4102,
                    6,
                    RoveCommDataType.FLOAT
                ),
                // Current draw by aux systems (before 12V buck)
                ["AuxCurrent"] = new RoveCommPacketDesc
                (
                    4103,
                    1,
                    RoveCommDataType.FLOAT
                ),
                // Current draw from other devices (CS1, CS2, CS3)
                ["MiscCurrent"] = new RoveCommPacketDesc
                (
                    4104,
                    3,
                    RoveCommDataType.FLOAT
                ),
                // [Motor, Core, Aux, Network] (bitmasked) [1-Enabled, 0-Disabled]
                ["BusStatus"] = new RoveCommPacketDesc
                (
                    4105,
                    1,
                    RoveCommDataType.UINT8_T
                )
            },
            errors: new Dictionary<string, RoveCommPacketDesc>
            {
                // Higher current draw than the battery can support. Rover will Reboot automatically
                ["PackOvercurrent"] = new RoveCommPacketDesc
                (
                    4200,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // (bitmasked) [1-Undervolt, 0-OK]. Rover will EStop automatically
                ["CellUndervoltage"] = new RoveCommPacketDesc
                (
                    4201,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // (bitmasked) [1-Critical, 0-OK]. Rover will Suicide automatically
                ["CellCritical"] = new RoveCommPacketDesc
                (
                    4202,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // Aux system current draw too high. Rover will disable Aux bus automatically
                ["AuxOvercurrent"] = new RoveCommPacketDesc
                (
                    4203,
                    1,
                    RoveCommDataType.UINT8_T
                )
            }
        ),
        ["Nav"] = new RoveCommBoardDesc
        (
            ip: "192.168.2.104",
            commands: new Dictionary<string, RoveCommPacketDesc>
            {

            },
            telemetry: new Dictionary<string, RoveCommPacketDesc>
            {
                // [Lat, Long, Alt] [(-90, 90), (-180, 180)(deg), (0, 1000)]
                ["GPSLatLonAlt"] = new RoveCommPacketDesc
                (
                    6100,
                    3,
                    RoveCommDataType.DOUBLE
                ),
                // [Pitch, Yaw, Roll] [(-90, 90), (0, 360), (-90, 90)] (deg)
                ["IMUData"] = new RoveCommPacketDesc
                (
                    6101,
                    3,
                    RoveCommDataType.FLOAT
                ),
                // [Heading] [ 0, 360 ]
                ["CompassData"] = new RoveCommPacketDesc
                (
                    6102,
                    1,
                    RoveCommDataType.FLOAT
                ),
                // [Number of satellites]
                ["SatelliteCountData"] = new RoveCommPacketDesc
                (
                    6103,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // [xAxis, yAxis, zAxis] Accel in m/s^2
                ["AccelerometerData"] = new RoveCommPacketDesc
                (
                    6104,
                    3,
                    RoveCommDataType.FLOAT
                ),
                // [horizontal_accur, vertical_accur, heading_accur, fix_type, is_differentia] [meters, meters, degrees, ublox_navpvt fix type (http://docs.ros.org/en/noetic/api/ublox_msgs/html/msg/NavPVT.html), boolean]
                ["AccuracyData"] = new RoveCommPacketDesc
                (
                    6105,
                    5,
                    RoveCommDataType.FLOAT
                )
            },
            errors: new Dictionary<string, RoveCommPacketDesc>
            {
                // 
                ["GPSLockError"] = new RoveCommPacketDesc
                (
                    6200,
                    1,
                    RoveCommDataType.UINT8_T
                )
            }
        ),
        ["BaseStationNav"] = new RoveCommBoardDesc
        (
            ip: "192.168.100.112"
        ),
        ["SignalStack"] = new RoveCommBoardDesc
        (
            ip: "192.168.100.101",
            commands: new Dictionary<string, RoveCommPacketDesc>
            {
                // Motor decipercent [-1000, 1000]
                ["OpenLoop"] = new RoveCommPacketDesc
                (
                    7000,
                    1,
                    RoveCommDataType.INT16_T
                ),
                // [Heading] [0, 360)
                ["SetAngleTarget"] = new RoveCommPacketDesc
                (
                    7001,
                    1,
                    RoveCommDataType.FLOAT
                ),
                // [Rover Lat, Rover Long, Basestation Lat, Basestation Long] [Lat:(-90, 90), Long:(-180, 180)] (deg)
                ["SetGPSTarget"] = new RoveCommPacketDesc
                (
                    7002,
                    4,
                    RoveCommDataType.DOUBLE
                ),
                // [0-override off, 1-override on]
                ["WatchdogOverride"] = new RoveCommPacketDesc
                (
                    7003,
                    1,
                    RoveCommDataType.UINT8_T
                )
            },
            telemetry: new Dictionary<string, RoveCommPacketDesc>
            {
                // [Heading] [0, 360)
                ["CompassAngle"] = new RoveCommPacketDesc
                (
                    7100,
                    1,
                    RoveCommDataType.FLOAT
                )
            },
            errors: new Dictionary<string, RoveCommPacketDesc>
            {
                // (1-Watchdog timeout, 0-OK)
                ["WatchdogStatus"] = new RoveCommPacketDesc
                (
                    7200,
                    1,
                    RoveCommDataType.UINT8_T
                )
            }
        ),
        ["Arm"] = new RoveCommBoardDesc
        (
            ip: "192.168.2.107",
            commands: new Dictionary<string, RoveCommPacketDesc>
            {
                // [X, Y1, Y2, Z, P, R] Motor decipercent [-1000, 1000]
                ["OpenLoop"] = new RoveCommPacketDesc
                (
                    8000,
                    6,
                    RoveCommDataType.INT16_T
                ),
                // [X, Y1, Y2, Z, P, R] (in, in, in, in, deg, deg)
                ["SetPosition"] = new RoveCommPacketDesc
                (
                    8001,
                    6,
                    RoveCommDataType.FLOAT
                ),
                // [X, Y, Z, P, R] (in, in, in, deg, deg, deg)
                ["IncrementPosition"] = new RoveCommPacketDesc
                (
                    8002,
                    5,
                    RoveCommDataType.FLOAT
                ),
                // [X, Y, Z, P, R] (in, in, in, deg, deg)
                ["SetIK"] = new RoveCommPacketDesc
                (
                    8003,
                    5,
                    RoveCommDataType.FLOAT
                ),
                // [X, Y, Z, P, R] (in, in, in, deg, deg)
                ["IncrementIK_RoverRelative"] = new RoveCommPacketDesc
                (
                    8004,
                    5,
                    RoveCommDataType.FLOAT
                ),
                // [X, Y, Z, P, R] (in, in, in, deg, deg)
                ["IncrementIK_WristRelative"] = new RoveCommPacketDesc
                (
                    8005,
                    5,
                    RoveCommDataType.FLOAT
                ),
                // [0-disable, 1-enable]
                ["Laser"] = new RoveCommPacketDesc
                (
                    8006,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // [0-retract, 1-extend]
                ["Solenoid"] = new RoveCommPacketDesc
                (
                    8007,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // Motor decipercent [-1000, 1000]
                ["Gripper"] = new RoveCommPacketDesc
                (
                    8008,
                    1,
                    RoveCommDataType.INT16_T
                ),
                // [0-override off, 1-override on]
                ["WatchdogOverride"] = new RoveCommPacketDesc
                (
                    8009,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // [X+, X-, Y1+, Y1-, Y2+, Y2-, Z+, Z-, P+, P-] (0-override off, 1-override on) (bitmasked)
                ["LimitSwitchOverride"] = new RoveCommPacketDesc
                (
                    8010,
                    1,
                    RoveCommDataType.UINT16_T
                ),
                // [X, Y1, Y2, Z, P, R1, R2] (1-calibrate, 0-no action) (bitmasked)
                ["CalibrateEncoder"] = new RoveCommPacketDesc
                (
                    8011,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // Toggle gripper and roll motors controlled by other packets; 0-Gripper1, 1-Gripper2
                ["SelectGripper"] = new RoveCommPacketDesc
                (
                    8012,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // [X+, X-, Y1+, Y1-, Y2+, Y2-, Z+, Z-, P+, P-] (0-override off, 1-override on) (bitmasked)
                ["SoftLimitOverride"] = new RoveCommPacketDesc
                (
                    8013,
                    1,
                    RoveCommDataType.UINT8_T
                )
            },
            telemetry: new Dictionary<string, RoveCommPacketDesc>
            {
                // [X, Y1, Y2, Z, Pitch, Roll1, Roll2] (in, in, in, in, deg, deg, deg)
                ["Positions"] = new RoveCommPacketDesc
                (
                    8100,
                    7,
                    RoveCommDataType.FLOAT
                ),
                // [X, Y, Z, P, R] (in, in, in, deg, deg)
                ["Coordinates"] = new RoveCommPacketDesc
                (
                    8101,
                    5,
                    RoveCommDataType.FLOAT
                ),
                // [X+, X-, Y1+, Y1-, Y2+, Y2-, Z+, Z-, Pitch+, Pitch-] (0-off, 1-on) (bitmasked)
                ["LimitSwitchTriggered"] = new RoveCommPacketDesc
                (
                    8102,
                    1,
                    RoveCommDataType.UINT16_T
                )
            },
            errors: new Dictionary<string, RoveCommPacketDesc>
            {
                // (1-Watchdog timeout, 0-OK)
                ["WatchdogStatus"] = new RoveCommPacketDesc
                (
                    8200,
                    1,
                    RoveCommDataType.UINT8_T
                )
            }
        ),
        ["ScienceActuation"] = new RoveCommBoardDesc
        (
            ip: "192.168.2.108",
            commands: new Dictionary<string, RoveCommPacketDesc>
            {
                // Motor decipercent [-1000, 1000]
                ["ScoopAxis_OpenLoop"] = new RoveCommPacketDesc
                (
                    9000,
                    1,
                    RoveCommDataType.INT16_T
                ),
                // Motor decipercent [-1000, 1000]
                ["SensorAxis_OpenLoop"] = new RoveCommPacketDesc
                (
                    9001,
                    1,
                    RoveCommDataType.INT16_T
                ),
                // Absolute position (in)
                ["ScoopAxis_SetPosition"] = new RoveCommPacketDesc
                (
                    9002,
                    1,
                    RoveCommDataType.FLOAT
                ),
                // Absolute position (in)
                ["SensorAxis_SetPosition"] = new RoveCommPacketDesc
                (
                    9003,
                    1,
                    RoveCommDataType.FLOAT
                ),
                // (in)
                ["ScoopAxis_IncrementPosition"] = new RoveCommPacketDesc
                (
                    9004,
                    1,
                    RoveCommDataType.FLOAT
                ),
                // (in)
                ["SensorAxis_IncrementPosition"] = new RoveCommPacketDesc
                (
                    9005,
                    1,
                    RoveCommDataType.FLOAT
                ),
                // [ScoopAxis+, ScoopAxis-, SensorAxis+, SensorAxis-] (0-override off, 1-override on) (bitmasked)
                ["LimitSwitchOverride"] = new RoveCommPacketDesc
                (
                    9006,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // Motor decipercent [-1000, 1000]
                ["Auger"] = new RoveCommPacketDesc
                (
                    9007,
                    1,
                    RoveCommDataType.INT16_T
                ),
                // [0-180] (degrees)
                ["Microscope"] = new RoveCommPacketDesc
                (
                    9008,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // [0-override off, 1-override on]
                ["WatchdogOverride"] = new RoveCommPacketDesc
                (
                    9010,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // [ScoopAxis, SensorAxis, Proboscis] (1-calibrate, 0-no action) (bitmasked)
                ["CalibrateEncoder"] = new RoveCommPacketDesc
                (
                    9011,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // Request the humidity of the instrument
                ["RequestHumidity"] = new RoveCommPacketDesc
                (
                    9012,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // [Pan, Tilt](degrees -180-180)
                ["AugerGimbalIncrement"] = new RoveCommPacketDesc
                (
                    9013,
                    2,
                    RoveCommDataType.INT16_T
                )
            },
            telemetry: new Dictionary<string, RoveCommPacketDesc>
            {
                // [ScoopAxis, SensorAxis] (in)
                ["Positions"] = new RoveCommPacketDesc
                (
                    9100,
                    2,
                    RoveCommDataType.FLOAT
                ),
                // [ScoopAxis+, ScoopAxis-, SensorAxis+, SensorAxis-] (0-off, 1-on) (bitmasked)
                ["LimitSwitchTriggered"] = new RoveCommPacketDesc
                (
                    9101,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // [Humidity] (relative humidity %)
                ["Humidity"] = new RoveCommPacketDesc
                (
                    9102,
                    1,
                    RoveCommDataType.FLOAT
                ),
                // (in/s)
                ["AugerSpeed"] = new RoveCommPacketDesc
                (
                    9103,
                    1,
                    RoveCommDataType.FLOAT
                )
            },
            errors: new Dictionary<string, RoveCommPacketDesc>
            {
                // (1-Watchdog timeout, 0-OK)
                ["WatchdogStatus"] = new RoveCommPacketDesc
                (
                    9200,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // (1-Stalled, 0-OK)
                ["AugerStalled"] = new RoveCommPacketDesc
                (
                    9201,
                    1,
                    RoveCommDataType.UINT8_T
                )
            }
        ),
        ["Autonomy"] = new RoveCommBoardDesc
        (
            ip: "192.168.3.100",
            commands: new Dictionary<string, RoveCommPacketDesc>
            {
                // 
                ["StartAutonomy"] = new RoveCommPacketDesc
                (
                    11000,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // 
                ["DisableAutonomy"] = new RoveCommPacketDesc
                (
                    11001,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // [Lat, Lon]
                ["AddPositionLeg"] = new RoveCommPacketDesc
                (
                    11002,
                    2,
                    RoveCommDataType.DOUBLE
                ),
                // [Lat, Lon]
                ["AddMarkerLeg"] = new RoveCommPacketDesc
                (
                    11003,
                    2,
                    RoveCommDataType.DOUBLE
                ),
                // [Lat, Lon]
                ["AddObjectLeg"] = new RoveCommPacketDesc
                (
                    11004,
                    2,
                    RoveCommDataType.DOUBLE
                ),
                // 
                ["ClearWaypoints"] = new RoveCommPacketDesc
                (
                    11005,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // A multiplier from 0.0 to 1.0 that will scale the max power effort of Autonomy
                ["SetMaxSpeed"] = new RoveCommPacketDesc
                (
                    11006,
                    1,
                    RoveCommDataType.FLOAT
                ),
                // [Enum (AUTONOMYLOG), Enum (AUTONOMYLOG), Enum (AUTONOMYLOG)] {Console, File, RoveComm}
                ["SetLoggingLevels"] = new RoveCommPacketDesc
                (
                    11007,
                    3,
                    RoveCommDataType.UINT8_T
                )
            },
            telemetry: new Dictionary<string, RoveCommPacketDesc>
            {
                // Enum (AUTONOMYSTATE)
                ["CurrentState"] = new RoveCommPacketDesc
                (
                    11100,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // 
                ["ReachedGoal"] = new RoveCommPacketDesc
                (
                    11101,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // String version of most current error log
                ["CurrentLog"] = new RoveCommPacketDesc
                (
                    11102,
                    255,
                    RoveCommDataType.CHAR
                )
            },
            errors: new Dictionary<string, RoveCommPacketDesc>
            {

            }
        ),
        ["Camera1"] = new RoveCommBoardDesc
        (
            ip: "192.168.4.100",
            commands: new Dictionary<string, RoveCommPacketDesc>
            {
                // Change which camera a feed is looking at. [0] is the feed, [1] is the camera to view.
                ["ChangeCameras"] = new RoveCommPacketDesc
                (
                    12000,
                    2,
                    RoveCommDataType.UINT8_T
                ),
                // Take a picture with the current camera. [0] is the camera to take a picture with. [1] tells the camera whether to restart the stream afterwards.
                ["TakePicture"] = new RoveCommPacketDesc
                (
                    12001,
                    2,
                    RoveCommDataType.UINT8_T
                ),
                // Stop the current camera stream. [0] is the camera to stop streaming. [1] is whether to restart the stream.
                ["ToggleStream1"] = new RoveCommPacketDesc
                (
                    12002,
                    2,
                    RoveCommDataType.UINT8_T
                )
            },
            telemetry: new Dictionary<string, RoveCommPacketDesc>
            {
                // Bitmask values for which cameras are able to stream. LSB is Camera 0, MSB is Camera 7.
                ["AvailableCameras"] = new RoveCommPacketDesc
                (
                    12100,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // Which cameras the system is currently streaming on each port
                ["StreamingCameras"] = new RoveCommPacketDesc
                (
                    12101,
                    4,
                    RoveCommDataType.UINT8_T
                ),
                // Picture has been taken.
                ["PictureTaken1"] = new RoveCommPacketDesc
                (
                    12102,
                    1,
                    RoveCommDataType.UINT8_T
                )
            },
            errors: new Dictionary<string, RoveCommPacketDesc>
            {
                // Camera has errored and stopped streaming. [0] is ID of camera as an integer (not bitmask).
                ["CameraUnavailable"] = new RoveCommPacketDesc
                (
                    12200,
                    1,
                    RoveCommDataType.UINT8_T
                )
            }
        ),
        ["Camera2"] = new RoveCommBoardDesc
        (
            ip: "192.168.4.101",
            commands: new Dictionary<string, RoveCommPacketDesc>
            {
                // Take a picture with the current camera. [0] is the camera to take a picture with. [1] tells the camera whether to restart the stream afterwards.
                ["TakePicture"] = new RoveCommPacketDesc
                (
                    13001,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // Stop the current camera stream. [0] is the camera to stop streaming. [1] is whether to restart the stream.
                ["ToggleStream2"] = new RoveCommPacketDesc
                (
                    13002,
                    2,
                    RoveCommDataType.UINT8_T
                )
            },
            telemetry: new Dictionary<string, RoveCommPacketDesc>
            {
                // Picture has been taken.
                ["PictureTaken2"] = new RoveCommPacketDesc
                (
                    13100,
                    1,
                    RoveCommDataType.UINT8_T
                )
            },
            errors: new Dictionary<string, RoveCommPacketDesc>
            {

            }
        ),
        ["IRSpectrometer"] = new RoveCommBoardDesc
        (
            ip: "192.168.3.104",
            commands: new Dictionary<string, RoveCommPacketDesc>
            {

            },
            telemetry: new Dictionary<string, RoveCommPacketDesc>
            {

            },
            errors: new Dictionary<string, RoveCommPacketDesc>
            {

            }
        ),
        ["Instruments"] = new RoveCommBoardDesc
        (
            ip: "192.168.3.105",
            commands: new Dictionary<string, RoveCommPacketDesc>
            {
                // [Green, White] [1-Enabled, 0-Disabled] (bitmasked)
                ["EnableLEDs"] = new RoveCommPacketDesc
                (
                    16000,
                    1,
                    RoveCommDataType.UINT8_T
                ),
                // Start a Raman reading, with the provided integration time (milliseconds)
                ["RequestRamanReading"] = new RoveCommPacketDesc
                (
                    16001,
                    1,
                    RoveCommDataType.UINT32_T
                ),
                // Start a Reflectance reading, with the provided integration time (milliseconds)
                ["RequestReflectanceReading"] = new RoveCommPacketDesc
                (
                    16002,
                    1,
                    RoveCommDataType.UINT32_T
                ),
                // Request the temperature of the instrument
                ["RequestTemperature"] = new RoveCommPacketDesc
                (
                    16003,
                    1,
                    RoveCommDataType.UINT8_T
                )
            },
            telemetry: new Dictionary<string, RoveCommPacketDesc>
            {
                // Raman CCD elements 1-500
                ["RamanReading_Part1"] = new RoveCommPacketDesc
                (
                    16100,
                    500,
                    RoveCommDataType.UINT16_T
                ),
                // Raman CCD elements 501-1000
                ["RamanReading_Part2"] = new RoveCommPacketDesc
                (
                    16101,
                    500,
                    RoveCommDataType.UINT16_T
                ),
                // Raman CCD elements 1001-1500
                ["RamanReading_Part3"] = new RoveCommPacketDesc
                (
                    16102,
                    500,
                    RoveCommDataType.UINT16_T
                ),
                // Raman CCD elements 1501-2000
                ["RamanReading_Part4"] = new RoveCommPacketDesc
                (
                    16103,
                    500,
                    RoveCommDataType.UINT16_T
                ),
                // Raman CCD elements 2001-2048
                ["RamanReading_Part5"] = new RoveCommPacketDesc
                (
                    16104,
                    48,
                    RoveCommDataType.UINT16_T
                ),
                // Reflectance CCD elements 1-288
                ["ReflectanceReading"] = new RoveCommPacketDesc
                (
                    16105,
                    288,
                    RoveCommDataType.UINT8_T
                ),
                // [Temperature] (degrees C)
                ["Temperature"] = new RoveCommPacketDesc
                (
                    16106,
                    1,
                    RoveCommDataType.INT8_T
                )
            },
            errors: new Dictionary<string, RoveCommPacketDesc>
            {

            }
        )
    };
}
