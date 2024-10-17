namespace Basestation_Software.Web.Core.Services
{
	public class LoggerService
	{
		// Logs are currently stored as a list of strings.
		// It may make sense to create a log class to support features like timestamps and logging levels.
		private List<string> _logs = [];

		private event Func<Task>? LogNotifier;

		// Adds a message to the log list.
		public void Log(string message)
		{
			_logs.Add(message);

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

		public List<string> GetLogs()
		{
			return _logs;
		}

	}
}