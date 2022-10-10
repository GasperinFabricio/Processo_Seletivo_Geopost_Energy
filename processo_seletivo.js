myHeaders = new Headers({
    "git-user": "GasperinFabricio",
    "response": "JSON"
  });
  
var myInit = { method: 'GET',
               headers: myHeaders,
             };

fetch("https://estagio.geopostenergy.com/WorldCup/GetAllTeams", myInit)
.then(response => response.json())
.then(data => console.log(data));