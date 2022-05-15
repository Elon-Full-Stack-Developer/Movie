using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using Project_1.Models;

using System.Web.Http.Cors;
using System.Threading.Tasks;

namespace Project_1.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class fullmoviedataController : ApiController
    {
        private static MovieBL bl = new MovieBL();
        // GET: api/fullmoviedata
        public async Task<string> Get(string name)
        {
            return await bl.GetFullDataMovie(name);
        }

        // GET: api/fullmoviedata/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/fullmoviedata
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/fullmoviedata/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/fullmoviedata/5
        public void Delete(int id)
        {
        }
    }
}
