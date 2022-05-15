using System.Web.Http;

using Project_1.Models;

using System.Web.Http.Cors;
using System.Threading.Tasks;

namespace Project_1.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class movieController : ApiController
    {
        private static MovieBL bl = new MovieBL();
        // GET: api/movie
        public async Task<string> Get(string search)
        {
            return await bl.GetAllMovies(search);
        }

        // GET: api/movie/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/movie
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/movie/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/movie/5
        public void Delete(int id)
        {
        }
    }
}
