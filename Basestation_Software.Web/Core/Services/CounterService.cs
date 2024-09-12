namespace Basestation_Software.Web.Core.Services
{
	public class CounterService
	{
		// Injected services
		private readonly HttpClient _httpClient;

		private int _count = 0;

		private event Func<Task>? CountNotifier;

		// Constructor
		public CounterService(HttpClient httpClient)
		{
			_httpClient = httpClient;
		}

		public void CountUp()
		{
			_count++;
			// Question Mark operator is equivalent to null-checking
			CountNotifier?.Invoke();
		}

		public void Subscribe(Func<Task> listener)
		{
			CountNotifier += listener;
		}

		public void Unsubscribe(Func<Task> listener)
		{
			CountNotifier -= listener;
		}

		public int GetCount()
		{
			return _count;
		}
	}
}
