namespace Basestation_Software.Web.Core.Services
{
	public class CounterService
	{
		private int _count;

		private event Func<Task>? CountNotifier;

		// Constructor
		public CounterService()
		{
			_count = 0;
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
