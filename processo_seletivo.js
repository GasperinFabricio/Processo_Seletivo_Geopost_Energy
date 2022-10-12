myHeaders = new Headers({
    "git-user": "GasperinFabricio",
    "response": "JSON"
  });
var myInit = { method: 'GET',
               headers: myHeaders,
             };
             var Johnson, Johnson1;
             var api_url = "https://estagio.geopostenergy.com/WorldCup/GetAllTeams";
             async function getResponse() {
               const response = await fetch(api_url, myInit);
               if (!response.ok) {
                 throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                return data;
              }
              
var array_team = [];
let team_groups = [ group1 = [], group2 = [], group3 = [], group4 = [], group5 = [], group6 = [], group7 = [], group8 = [] ]
let blacklist = [];

getResponse().then(data => {
  for(let i = 0; i < 32; i++){
  array_team[i] = data.Result[i].Name;
  randomize_team(array_team)
  }
} );

function randomize_score(){
  x = Math.floor(Math.random() * 3);
  return x;
}

function randomize_team_number(){
  x = Math.floor(Math.random() * 32);
  return x;
}

function randomize_team(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

function distribute_team(array){
  for(let i = 0; i)
}