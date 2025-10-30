using System;
using System.Diagnostics;
using System.IO;

namespace Basestation_Software.Web.Core.Services
{
    public class LoggerService
    {
        // Logs are currently stored as a list of strings.
        // It may make sense to create a log class to support features like timestamps and logging levels.
        private List<LogEntry> logs = [];
        private List<LogEntry> logs_filtered = [];

        private event Func<Task>? LogNotifier;

        public bool autoExport = false;
        public int autoExportSize = 1000;

        // Adds a message to the log list.
        public void Log(string message, string? source = null, string? channel = null, string? level = null, string? data = null)
        {
            logs.Add(new LogEntry(message, source, channel, level, data));

            if (autoExport && logs.Count > autoExportSize)
            {
                ExportLogs(autoExportSize);
            }

            // Trigger log event
            LogNotifier?.Invoke();
        }

        public void Subscribe(Func<Task> listener)
        {
            LogNotifier += listener;
        }

        public void Unsubscribe(Func<Task> listener)
        {
            LogNotifier -= listener;
        }

        public List<LogEntry> GetLogs()
        {
            return logs;
        }

        public List<LogEntry> GetLogs_Filtered()
        {
            return logs_filtered;
        }

        public void filterLogs(string? search_message, string? search_source, string? search_timeStamp, string? search_channel, string? search_level, string? search_data)
        {
            logs_filtered.Clear();
            foreach (LogEntry log in logs)
            {
                if (((search_message == "") || (search_message == null) || (log.Message.Contains(search_message))) &&
                    ((search_source == "") || (search_source == null) || (log.Source == null) || (log.Source.Contains(search_source))) &&
                    ((search_timeStamp == "") || (search_timeStamp == null) || (log.TimeStamp.ToString().Contains(search_timeStamp))) &&
                    ((search_channel == "") || (search_channel == null) || (log.Channel == null) || (log.Channel.Contains(search_channel))) &&
                    ((search_level == "") || (search_level == null) || (log.Level == null) || (log.Level.Contains(search_level))) &&
                    ((search_data == "") || (search_data == null) || (log.Data == null) || (log.Data.Contains(search_data))))
                {
                    logs_filtered.Add(log);
                }
            }
            return;
        }

        public void ExportLogs()
        {
            string dateTime = DateTime.Now.ToString().Replace("\\", "_").Replace(":", "-").Replace("/", "_");
            Debug.WriteLine(dateTime);
            using (StreamWriter writer = new StreamWriter($"logs {dateTime}.csv"))
            {
                writer.WriteLine("Message,Source,TimeStamp,Channel,Level,Data");

                foreach (LogEntry log in logs)
                {
                    writer.WriteLine($"{EscapeCSV(log.Message)},{EscapeCSV(log.Source)},{EscapeCSV(log.TimeStamp.ToString())},{EscapeCSV(log.Channel)},{EscapeCSV(log.Level)},{EscapeCSV(log.Data)}");
                }

                logs.Clear();
            }
            LogNotifier?.Invoke();
        }

        public void ExportLogs(int totalToExport)
        {
            string dateTime = DateTime.Now.ToString().Replace("\\", "_").Replace(":", "-").Replace("/", "_");
            using (StreamWriter writer = new StreamWriter($"logs {dateTime}.csv"))
            {
                writer.WriteLine("Message,Source,TimeStamp,Channel,Level,Data");

                for (int i = 0; i < totalToExport; i++)
                {
                    writer.WriteLine($"{EscapeCSV(logs[i].Message)},{EscapeCSV(logs[i].Source)},{EscapeCSV(logs[i].TimeStamp.ToString())},{EscapeCSV(logs[i].Channel)},{EscapeCSV(logs[i].Level)},{EscapeCSV(logs[i].Data)}");
                }

                logs.RemoveRange(0, totalToExport);
            }
            LogNotifier?.Invoke();
        }

        public void ExportLogs(int? startingIndex, int? endingIndex) // FIXME: Needs to deal with null values
        {
            int finalIndex = endingIndex ?? logs.Count - 1;
            int initialIndex = startingIndex ?? 0;

            string dateTime = DateTime.Now.ToString().Replace("\\", "_").Replace(":", "-").Replace("/", "_");
            using (StreamWriter writer = new StreamWriter($"logs {dateTime}.csv"))
            {
                writer.WriteLine("Message,Source,TimeStamp,Channel,Level,Data");

                for (int i = initialIndex; i < endingIndex; i++)
                {
                    writer.WriteLine($"{EscapeCSV(logs[i].Message)},{EscapeCSV(logs[i].Source)},{EscapeCSV(logs[i].TimeStamp.ToString())},{EscapeCSV(logs[i].Channel)},{EscapeCSV(logs[i].Level)},{EscapeCSV(logs[i].Data)}");
                }

                logs.RemoveRange(initialIndex, finalIndex - initialIndex);
            }
            LogNotifier?.Invoke();
        }

        public void ClearActiveLogs()
        {
            logs.Clear();
            LogNotifier?.Invoke();
        }

        public void ClearActiveLogs(int? startingIndex, int? endingIndex)
        {
            int finalIndex = endingIndex ?? logs.Count - 1;
            int initialIndex = startingIndex ?? 0;

            logs.RemoveRange(initialIndex, finalIndex - initialIndex);
            LogNotifier?.Invoke();
        }

        private string EscapeCSV(string? value)
        {
            if (value == null)
            {
                return "";
            }

            string escapedValue = value.Replace("\"", "\"\"");
            if (escapedValue.Contains(",") || escapedValue.Contains("\"") || escapedValue.Contains("\n"))
            {
                return $"\"{escapedValue}\"";
            }
            return escapedValue;
        }

        public class LogEntry
        {
            public string Message { get; set; }
            public DateTime TimeStamp { get; set; }
            public string? Channel { get; set; } // e.g., Debug, Autonomy, Network
            public string? Source { get; set; } // i.e., the board source
            public string? Level { get; set; } // e.g., notice, warning, error, etc.
            public string? Data { get; set; }

            public LogEntry(string message, string? source = null, string? channel = null, string? level = null, string? data = null)
            {
                Message = message;
                TimeStamp = DateTime.Now;
                Channel = channel;
                Source = source;
                Level = level;
                Data = data;
            }

        }

    }

}