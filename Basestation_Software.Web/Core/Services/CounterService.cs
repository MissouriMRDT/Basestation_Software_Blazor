namespace Basestation_Software.Web.Core.Services
{
	public class CounterService
	{
		// Injected services
		private readonly HttpClient _HttpClient;

		private int count = 0;

		public delegate Task CountListener();
		private event CountListener? _countNotifier;

		// Constructor
		public CounterService(HttpClient httpClient)
		{
			_HttpClient = httpClient;
		}

		public void CountUp()
		{
			count++;
			if (_countNotifier is not null)
			{
				_countNotifier.Invoke();
			}
		}

		public void Subscribe(CountListener listener)
		{
			_countNotifier += listener;
		}

		public int GetCount()
		{
			return count;
		}
	}
}
