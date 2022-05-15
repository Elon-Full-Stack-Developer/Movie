using System.Net.Http;
using System.Threading.Tasks;


namespace Project_1.Models
{
    public class MovieBL
    {
        private string apikey = "Myapikey";
        private string url = "https://www.omdbapi.com";

        private async Task<string> Get(string s)
        {
            var httpClient = new HttpClient();
            var response = await httpClient.GetAsync(s);
            var result = await response.Content.ReadAsStringAsync();
            return result;
        }

        public async Task<string> GetAllMovies(string search)
        {
            var data = $"{url}/?apikey={apikey}&s={search}&type=movie";
            return await Get(data);
        }


        public async Task<string> GetFullDataMovie(string name)
        {
            var data = $"{url}/?t={name}&apikey={apikey}";
            return await Get(data);
        }
    }

}