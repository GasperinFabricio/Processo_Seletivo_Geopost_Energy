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
  group1_goals = [0, 0, 0, 0],
  group2_goals = [0, 0, 0, 0],
  group3_goals = [0, 0, 0, 0],
  group4_goals = [0, 0, 0, 0],
  group5_goals = [0, 0, 0, 0],
  group6_goals = [0, 0, 0, 0],
  group7_goals = [0, 0, 0, 0],
  group8_goals = [0, 0, 0, 0]
]
var team_group_score = [
  group1_score = [0, 0, 0, 0],
  group2_score = [0, 0, 0, 0],
  group3_score = [0, 0, 0, 0],
  group4_score = [0, 0, 0, 0],
  group5_score = [0, 0, 0, 0],
  group6_score = [0, 0, 0, 0],
  group7_score = [0, 0, 0, 0],
  group8_score = [0, 0, 0, 0]
]
var i = 0;
getResponse().then(data => {
  for(var i = 0; i < 32; i++){
  array_team[i] = data.Result[i].Name;
}
randomize_team(array_team);
distribute_team(team_groups, array_team);
all_round(team_groups, team_group_goals, team_group_score);
//round_start(group2, group2_goals, group2_score);

} );
//Quebra de linha
function linebreak(){
  document.write("<br>");
}
//Gera um número aleatório que representa a quantidade de gols de um time dentro de uma partida.
function randomize_goal(){
  x = Math.floor(Math.random() * 5);
  return x;
}
//Divide os times aleatoriamente
function randomize_team(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}
// Distribui os times para os arrays
function distribute_team(array_group, array_goal){
  var x = 0;
    for(var i = 0; i < 8; i++){
        array_group[i].push(array_goal[x], array_goal[x+1], array_goal[x+2], array_goal[x+3]);
        x += 4;
    }
}
function all_round(array_groups, array_goals, array_score){
  for(var i = 0; i < 8; i++){
    round_start(array_groups[i], array_goals[i], array_score[i]);
  }
}
//Utiliza a função group_round e group_round2 para simular uma rodada.
function round_start(array_group, array_goal, array_score){
  y = 0;
  for(;;){
    if(y == 3){
      console.log("AAAAAAAAAAAAAA");
      group_round2(y, array_group, array_goal, array_score);
      break;
    }else if(y == 1){
      group_round(y, array_group, array_goal, array_score);
      y+=2;
    }else {
      console.log("bbbbbbbbbbbbbbbbbbbb");
      group_round(y, array_group, array_goal, array_score);
      y++
    }
    
  }
}
//Função groupd_round para as primeiras duas rodadas de um grupo
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
  array_goal[i] += temp_goal1;
  array_goal[i+1] +=temp_goal2;
  //denominar o vencedor e atribuir pontos
  if(temp_goal1 > temp_goal2){ // No caso de time do array_goal possuir mais gols, ele recebe 3 pontos
    array_score[i] += 3;
  } else if(temp_goal1 < temp_goal2){// No caso do time do array_goal possuir menos gols, o time inimigo recebe 3 pontos
    array_score[i+1] += 3;
  } else{// Se nenhum dos dois casos acima for efetuado, é um empate e ambos recebem 1 ponto.
    array_score[i] += 1;
    array_score[i + 1] += 1;
  }
  linebreak();linebreak();
  temp_goal1 = 0;
  temp_goal2 = 0;
  document.write(`${array_group[i]} VS ${array_group[i+2]}`);
  linebreak();linebreak();
  //simulação de gol
  temp_goal1 = randomize_goal();
  temp_goal2 = randomize_goal();
  document.write(`${array_group[i]} ${temp_goal1} gols & ${array_group[i+2]} ${temp_goal2} gols`);
  linebreak()
  array_goal[i] += temp_goal1;
  array_goal[i+2] += temp_goal2;
  //denominar o vencedor e atribuir pontos
  if(temp_goal1 > temp_goal2){ // No caso de time do array_goal possuir mais gols, ele recebe 3 pontos
    array_score[i] += 3;
  } else if(temp_goal1 < temp_goal2){// No caso do time do array_goal possuir menos gols, o time inimigo recebe 3 pontos
    array_score[i+2] += 3;
  } else{// Se nenhum dos dois casos acima for efetuado, é um empate e ambos recebem 1 ponto.
    array_score[i] += 1;
    array_score[i + 2] += 1;
  }
}
/*Função group_round2() para a terceira rodada de um grupo
* Esta função segue a seguinte lógica:
*                      |
* 0 vs 1 --> i vs i+1  | A lógica é quebrada quando utilizada a partir da terceira rodada
* 0 vs 2 --> i vs i+2  | de um grupo que seria definido da seguinte forma:
* 1 vs 2 --> i vs i+1 \|/
* 1 vs 3 --> i vs i+2  v
* 3 vs 2 --> i vs i-1 --> Por isso é feita a função group_round2 para satisfazer esta
* 3 vs 0 --> i vs i-3 --> rodada especial.                
*/
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
  array_goal[i] += temp_goal1;
  array_goal[i-1] +=temp_goal2;
  //denominar o vencedor e atribuir pontos
  if(temp_goal1 > temp_goal2){ // No caso de time do array_goal possuir mais gols, ele recebe 3 pontos
    array_score[i] += 3;
  } else if(temp_goal1 < temp_goal2){// No caso do time do array_goal possuir menos gols, o time inimigo recebe 3 pontos
    array_score[i-1] += 3;
  } else{// Se nenhum dos dois casos acima for efetuado, é um empate e ambos recebem 1 ponto.
    array_score[i] += 1;
    array_score[i-1] += 1;
  }
  temp_goal1 = 0;
  temp_goal2 = 0;
  linebreak();linebreak();
  document.write(`${array_group[i]} VS ${array_group[i-3]}`);
  linebreak();linebreak();
  //simulação de gol
  temp_goal1 = randomize_goal();
  temp_goal2 = randomize_goal();
  document.write(`${array_group[i]} ${temp_goal1} gols & ${array_group[i-3]} ${temp_goal2} gols`);
  linebreak()
  array_goal[i] += temp_goal1;
  array_goal[i-3] += temp_goal2;
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
