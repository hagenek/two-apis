const https = require("https");

function parseEid(url) {
    return url.replace(/\/$/, '')
      .split('/')
      .slice(-1)[0];
  }
  
  function parsePerson(data) {
    return {
      name: data.name,
      eid: parseEid(data.url)
    };
  }
  
  function parseDetails(data) {
    return {
      name: data.name,
      gender: data.gender
    };
  }
  
  function pageNumber(p) {
    if (p) {
      return p.split('=')[1];
    }
    return -1;
  }

const parsedResultObject = {
    count: 0,
    next: 1,
    results: []
}

const base = 'https://swapi.dev/api/';

const fetchCharacters = async (path)  => {
    const data = await get(path);
    let resArray = data.results
    const results = await resArray.map(async (character) => {
        return parsePerson(character)
    })
    results.map((person) => {
        console.log(persron)
    })
}

fetchCharacters(base)

const fetchHomeworld = (characterData, cb) => {
    get(characterData.planet , () => {
        
    })
}

function get(path) {
  https.get(path, res => {
    let data = '';

    res.on('data', chunk => {
      data += chunk;
    });

    res.on('end', () => {
        const prom = new Promise();
      return JSON.parse(data);
    });
  });
}