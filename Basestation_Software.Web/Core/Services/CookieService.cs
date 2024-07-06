using Microsoft.JSInterop;

namespace Basestation_Software.Web.Core.Services
{
    public class CookieService
    {
        // Declare member variables.
        private readonly IJSRuntime _JSRuntime;
        string expires = "";

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="jsRuntime">Implicitly passed in.</param>
        public CookieService(IJSRuntime jsRuntime)
        {
            _JSRuntime = jsRuntime;
            ExpireDays = 30;
        }

        /// <summary>
        /// Stores a cookie in the browser.
        /// </summary>
        /// <param name="key">The key to reference the cookie by later.</param>
        /// <param name="value">The calue to store in the cookie</param>
        /// <param name="days">The number of days before the cookie expires.</param>
        /// <returns></returns>
        public async Task SetValue(string key, string value, int? days = null)
        {
            var curExp = (days != null) ? (days > 0 ? DateToUTC(days.Value) : "") : expires;
            await SetCookie($"{key}={value}; expires={curExp}; path=/");
        }

        /// <summary>
        /// Gets a cookie from the browser.
        /// </summary>
        /// <param name="key">The name of the cookie.</param>
        /// <param name="def">The default value if the cookie isn't found.</param>
        /// <returns></returns>
        public async Task<string> GetValue(string key, string def = "")
        {
            var cValue = await GetCookie();
            if (string.IsNullOrEmpty(cValue)) return def;                

            var vals = cValue.Split(';');
            foreach (var val in vals)
                if(!string.IsNullOrEmpty(val) && val.IndexOf('=') > 0)
                    if(val.Substring(0, val.IndexOf('=')).Trim().Equals(key, StringComparison.OrdinalIgnoreCase))
                        return val.Substring(val.IndexOf('=') + 1);
            return def;
        }

        /// <summary>
        /// Sets a cookie.
        /// </summary>
        /// <param name="value">Cookie info.</param>
        /// <returns></returns>
        private async Task SetCookie(string value)
        {
            await _JSRuntime.InvokeVoidAsync("eval", $"document.cookie = \"{value}\"");
        }

        /// <summary>
        /// Gets a cookie.
        /// </summary>
        /// <returns>The cookie info.</returns>
        private async Task<string> GetCookie()
        {
            return await _JSRuntime.InvokeAsync<string>("eval", $"document.cookie");
        }

        public int ExpireDays
        {
            set => expires = DateToUTC(value);
        }

        private static string DateToUTC(int days) => DateTime.Now.AddDays(days).ToUniversalTime().ToString("R");
    }
}