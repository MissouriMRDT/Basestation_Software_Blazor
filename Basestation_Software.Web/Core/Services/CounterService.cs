namespace Basestation_Software.Web.Core.Services
{
	public class CounterService
	{
		private int count;
		private event Func<Task>? CountNotifier;
		public CounterService() 
		{
			count = 0;
		}
		public void CountUp() 
		{
			count++;
		}
		public int GetCount()
		{
			return count;
		}

		public void Subscribe(Func<Task> listener)
		{
			CountNotifier += listener;
		}

		public void Unsubscribe(Func<Task> listener)
		{
			CountNotifier -= listener;
		}

		
	}
}
