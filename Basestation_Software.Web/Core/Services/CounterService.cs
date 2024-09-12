namespace Basestation_Software.Web.Core.Services
{
	public class CounterService
	{
		// Injected services
		private readonly HttpClient _HttpClient;

		private int count = 0;

		private event Func<Task>? CountNotifier;

		// Constructor
		public CounterService(HttpClient httpClient)
		{
			_HttpClient = httpClient;
		}

		public void CountUp()
		{
			count++;
			if (CountNotifier is not null)
			{
				CountNotifier.Invoke();
			}
		}

		public void Subscribe(Func<Task> listener)
		{
			CountNotifier += listener;
		}

		public int GetCount()
		{
			return count;
		}
	}
}
