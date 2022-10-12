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
var team_groups = [
    group1 = [],
    group2 = [],
    group3 = [],
    group4 = [],
    group5 = [],
    group6 = [],
    group7 = [],
    group8 = []
  ] 
var team_group_goals = [
  group1_goals = [],
  group2_goals = [],
  group3_goals = [],
  group4_goals = [],
  group5_goals = [],
  group6_goals = [],
  group7_goals = [],
  group8_goals = []
]
var team_group_score = [
  group1_score = 0,
  group2_score = 0,
  group3_score = 0,
  group4_score = 0,
  group5_score = 0,
  group6_score = 0,
  group7_score = 0,
  group8_score = 0
]
var i = 0;
getResponse().then(data => {
  for(var i = 0; i < 32; i++){
  array_team[i] = data.Result[i].Name;
}
randomize_team(array_team);
distribute_team(team_groups, array_team);
for(var i = 0; i < 8; i++){
  round_start(i ,group1, team_group_goals, team_group_score);
}
} );
function linebreak(){
  document.write("<br>");
}
function randomize_goal(){
  x = Math.floor(Math.random() * 5);
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

function distribute_team(array1, array2){
  var x = 0;
    for(var i = 0; i < 8; i++){
        array1[i].push(array2[x], array2[x+1], array2[x+2], array2[x+3]);
        x += 4;
    }
}

function round_start(x ,array1, array2, array3){
  y = x;
  for(var y = 0; y < (x+4); y++){
    if(y == (x+3)){
      console.log("AAAAAAAAAAAAAA");
      group_round2(y, array1, array2, array3);
    }else {
      console.log("bbbbbbbbbbbbbbbbbbbb");
      group_round(y, array1, array2, array3);
    }
  }
}

function group_round(i, array1, array2, array3){
  document.write(`${array1[i]} VS ${array1[i+1]}`);
  linebreak()
  //simulação de gol
  array2[i] = randomize_goal()
  array2[i+1] = randomize_goal()
  //demonstração de gols na tela
  document.write(`${array1[i]} ${array2[i]} gols & ${array1[i+1]} ${array2[i+1]} gols`);
  linebreak()
  //denominar o vencedor e atribuir pontos
  if(array2[i] > array2[i+1]){ // No caso de time do Array2 possuir mais gols, ele recebe 3 pontos
    array3[i] += 3;
  } else if(array2[i] < array2[i+1]){// No caso do time do Array2 possuir menos gols, o time inimigo recebe 3 pontos
    array3[i+1] += 3;
  } else{// Se nenhum dos dois casos acima for efetuado, é um empate e ambos recebem 1 ponto.
    array3[i] += 1;
    array3[i + 1] += 1;
  }
    document.write(`${array1[i]} VS ${array1[i+2]}`);
    linebreak()
    //simulação de gol
    array2[i] = randomize_goal()
    array2[i+2] = randomize_goal()
    document.write(`${array1[i]} ${array2[i]} gols & ${array1[i+2]} ${array2[i+2]} gols`);
    linebreak()
  //denominar o vencedor e atribuir pontos
  if(array2[i] > array2[i+2]){ // No caso de time do Array2 possuir mais gols, ele recebe 3 pontos
    array3[i] += 3;
  } else if(array2[i] < array2[i+2]){// No caso do time do Array2 possuir menos gols, o time inimigo recebe 3 pontos
    array3[i+2] += 3;
  } else{// Se nenhum dos dois casos acima for efetuado, é um empate e ambos recebem 1 ponto.
    array3[i] += 1;
    array3[i + 2] += 1;
  }
}

function group_round2(i, array1, array2, array3){
  document.write(`${array1[i]} VS ${array1[i-1]}`);
  
  linebreak()
  //simulação de gol
  array2[i] = randomize_goal()
  array2[i-1] = randomize_goal()
  //demonstração de gols na tela
  document.write(`${array1[i]} scored ${array2[i]} goals & ${array1[i-1]} scored ${array2[i-1]} goals`);
  linebreak()
  //denominar o vencedor e atribuir pontos
  if(array2[i] > array2[i-1]){ // No caso de time do Array2 possuir mais gols, ele recebe 3 pontos
    array3[i] += 3;
  } else if(array2[i] < array2[i-1]){// No caso do time do Array2 possuir menos gols, o time inimigo recebe 3 pontos
    array3[i-1] += 3;
  } else{// Se nenhum dos dois casos acima for efetuado, é um empate e ambos recebem 1 ponto.
    array3[i] += 1;
    array3[i - 1] += 1;
  }
    document.write(`${array1[i]} VS ${array1[i-3]}`);
    linebreak()
    //simulação de gol
    array2[i] = randomize_goal()
    array2[i-3] = randomize_goal()
    document.write(`${array1[i]} scored ${array2[i]} goals & ${array1[i+2]} scored ${array2[i+2]} goals`);
    linebreak()
  //denominar o vencedor e atribuir pontos
  if(array2[i] > array2[i-3]){ // No caso de time do Array2 possuir mais gols, ele recebe 3 pontos
    array3[i] += 3;
  } else if(array2[i] < array2[i-3]){// No caso do time do Array2 possuir menos gols, o time inimigo recebe 3 pontos
    array3[i-3] += 3;
  } else{// Se nenhum dos dois casos acima for efetuado, é um empate e ambos recebem 1 ponto.
    array3[i] += 1;
    array3[i - 3] += 1;
  }
}