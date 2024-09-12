using System.Net;

namespace Basestation_Software.Web.Core.Services
{
	public class CounterService
	{
		private int _count;
		private event Func<Task>? CountNotifier;

		public CounterService()
		{
			_count = 0;
		}

		public void CountUp()
		{
			_count++;

			// Only invoke if count notifier is not null
			CountNotifier?.Invoke();
		}

		public int GetCount()
		{
			return _count;
		}

		public void SubscribeToCount(Func<Task> listener)
		{
			CountNotifier += listener;
		}

		public void UnscribeToCount(Func<Task> listener)
		{
			CountNotifier -= listener;
		}
	}
}
