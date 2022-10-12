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
  group1_score = [],
  group2_score = [],
  group3_score = [],
  group4_score = [],
  group5_score = [],
  group6_score = [],
  group7_score = [],
  group8_score = []
]
var i = 0;
getResponse().then(data => {
  for(var i = 0; i < 32; i++){
  array_team[i] = data.Result[i].Name;
}
randomize_team(array_team);
distribute_team(team_groups, array_team);
round_start(0 ,group1, group1_goals, group1_score);

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

function distribute_team(array_group, array_goal){
  var x = 0;
    for(var i = 0; i < 8; i++){
        array_group[i].push(array_goal[x], array_goal[x+1], array_goal[x+2], array_goal[x+3]);
        x += 4;
    }
}

function round_start(x ,array_group, array_goal, array_score){
  y = x;
  for(;;){
    if(y == (x+3)){
      console.log("AAAAAAAAAAAAAA");
      group_round2(y, array_group, array_goal, array_score);
      break;
    }else if(y == (x+1)){
      group_round(y, array_group, array_goal, array_score);
      y+=2;
    }else {
      console.log("bbbbbbbbbbbbbbbbbbbb");
      group_round(y, array_group, array_goal, array_score);
      y++
    }
    
  }
}

function group_round(i, array_group, array_goal, array_score){
  var temp_goal1 = 0;
  var temp_goal2 = 0;
  linebreak();linebreak();
  document.write(`${array_group[i]} VS ${array_group[i+1]} ROUND NORMAL`);
  linebreak();linebreak();
  //simulação de gol
  temp_goal1 = randomize_goal();
  temp_goal2 = randomize_goal();
  //demonstração de gols na tela
  document.write(`${array_group[i]} ${temp_goal1} gols & ${array_group[i+1]} ${temp_goal2} gols`);
  linebreak()
  array_goal[i] = temp_goal1;
  array_goal[i+1] =temp_goal2;
  temp_goal1 = 0;
  temp_goal2 = 0;
  //denominar o vencedor e atribuir pontos
  if(array_goal[i] > array_goal[i+1]){ // No caso de time do array_goal possuir mais gols, ele recebe 3 pontos
    array_score[i] += 3;
  } else if(array_goal[i] < array_goal[i+1]){// No caso do time do array_goal possuir menos gols, o time inimigo recebe 3 pontos
    array_score[i+1] += 3;
  } else{// Se nenhum dos dois casos acima for efetuado, é um empate e ambos recebem 1 ponto.
    array_score[i] += 1;
    array_score[i + 1] += 1;
  }
    linebreak();linebreak();
    document.write(`${array_group[i]} VS ${array_group[i+2]}`);
    linebreak();linebreak();
    //simulação de gol
    temp_goal1 = randomize_goal();
    temp_goal2 = randomize_goal();
    document.write(`${array_group[i]} ${temp_goal1} gols & ${array_group[i+2]} ${temp_goal2} gols`);
    linebreak()
    array_goal[i] = temp_goal1;
    array_goal[i+2] = temp_goal2;
  //denominar o vencedor e atribuir pontos
  if(array_goal[i] > array_goal[i+2]){ // No caso de time do array_goal possuir mais gols, ele recebe 3 pontos
    array_score[i] += 3;
  } else if(array_goal[i] < array_goal[i+2]){// No caso do time do array_goal possuir menos gols, o time inimigo recebe 3 pontos
    array_score[i+2] += 3;
  } else{// Se nenhum dos dois casos acima for efetuado, é um empate e ambos recebem 1 ponto.
    array_score[i] += 1;
    array_score[i + 2] += 1;
  }
}

function group_round2(i, array_group, array_goal, array_score){
  var temp_goal1 = 0;
  var temp_goal2 = 0;
  linebreak();linebreak();
  document.write(`${array_group[i]} VS ${array_group[i-1]} ROUND ESPECIAL`);
  linebreak();linebreak();
  //simulação de gol
  temp_goal1 = randomize_goal();
  temp_goal2 = randomize_goal();
  //demonstração de gols na tela
  document.write(`${array_group[i]} ${temp_goal1} gols & ${array_group[i-1]} ${temp_goal2} gols`);
  linebreak()
  array_goal[i] = temp_goal1;
  array_goal[i-1] =temp_goal2;
  temp_goal1 = 0;
  temp_goal2 = 0;
  //denominar o vencedor e atribuir pontos
  if(array_goal[i] > array_goal[i-1]){ // No caso de time do array_goal possuir mais gols, ele recebe 3 pontos
    array_score[i] += 3;
  } else if(array_goal[i] < array_goal[i-1]){// No caso do time do array_goal possuir menos gols, o time inimigo recebe 3 pontos
    array_score[i-1] += 3;
  } else{// Se nenhum dos dois casos acima for efetuado, é um empate e ambos recebem 1 ponto.
    array_score[i] += 1;
    array_score[i-1] += 1;
  }
    linebreak();linebreak();
    document.write(`${array_group[i]} VS ${array_group[i-3]}`);
    linebreak();linebreak();
    //simulação de gol
    temp_goal1 = randomize_goal();
    temp_goal2 = randomize_goal();
    document.write(`${array_group[i]} ${temp_goal1} gols & ${array_group[i-3]} ${temp_goal2} gols`);
    linebreak()
    array_goal[i] = temp_goal1;
    array_goal[i-3] = temp_goal2;
  //denominar o vencedor e atribuir pontos
  if(array_goal[i] > array_goal[i-3]){ // No caso de time do array_goal possuir mais gols, ele recebe 3 pontos
    array_score[i] += 3;
  } else if(array_goal[i] < array_goal[i-3]){// No caso do time do array_goal possuir menos gols, o time inimigo recebe 3 pontos
    array_score[i-3] += 3;
  } else{// Se nenhum dos dois casos acima for efetuado, é um empate e ambos recebem 1 ponto.
    array_score[i] += 1;
    array_score[i-3] += 1;
  }
}