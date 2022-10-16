myHeaders = new Headers({
    "git-user": "GasperinFabricio",
    "response": "JSON"
  });
var myInit = { method: 'GET',
               headers: myHeaders,
             };
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
  ] ;
var temp_array;
var team_group_goals = [
  group1_goals = [0, 0, 0, 0],
  group2_goals = [0, 0, 0, 0],
  group3_goals = [0, 0, 0, 0],
  group4_goals = [0, 0, 0, 0],
  group5_goals = [0, 0, 0, 0],
  group6_goals = [0, 0, 0, 0],
  group7_goals = [0, 0, 0, 0],
  group8_goals = [0, 0, 0, 0]
];
var team_group_score = [
  group1_score = [0, 0, 0, 0],
  group2_score = [0, 0, 0, 0],
  group3_score = [0, 0, 0, 0],
  group4_score = [0, 0, 0, 0],
  group5_score = [0, 0, 0, 0],
  group6_score = [0, 0, 0, 0],
  group7_score = [0, 0, 0, 0],
  group8_score = [0, 0, 0, 0]
];
var group_winners = [
  group_winnerA = [],
  group_winnerB = [],
  group_winnerC = [],
  group_winnerD = [],
  group_winnerE = [],
  group_winnerF = [],
  group_winnerG = [],
  group_winnerH = []
];
var team_groups_oitava = [
  oitava_1A2B = [],
  oitava_1B2A = [],
  oitava_1C2D = [],
  oitava_1D2C = [],
  oitava_1E2F = [],
  oitava_1F2E = [],
  oitava_1G2H = [],
  oitava_1H2G = []

];
var oitavas_score = [
  oitavas_scoreAB = [0,0],
  oitavas_scoreCD = [0,0],
  oitavas_scoreEF = [0,0],
  oitavas_scoreGH = [0,0],
  oitavas_scoreBA = [0,0],
  oitavas_scoreDC = [0,0],
  oitavas_scoreFE = [0,0],
  oitavas_scoreHG = [0,0]
];
var oitavas_goals = [
  oitavas_goalsAB = [0,0],
  oitavas_goalsCD = [0,0],
  oitavas_goalsEF = [0,0],
  oitavas_goalsGH = [0,0],
  oitavas_goalsBA = [0,0],
  oitavas_goalsDC = [0,0],
  oitavas_goalsFE = [0,0],
  oitavas_goalsHG = [0,0]
];
var quartas_winners = [
  quartas_winnerABCD = [],
  quartas_winnerEFGH = [],
  quartas_winnerBADC = [],
  quartas_winnerFEHG = []
];
var quartas_score = [
  quartas_score1 = [0,0],
  quartas_score2 = [0,0]
];
var quartas_goals = [
  quartas_goals1 = [0,0],
  quartas_goals2 = [0,0]
];
var semifinal_array = [];
var last_score = [0,0];
var last_goal = [0,0];
var mvp_winner = [];
var i = 0;
getResponse().then(data => {
  for(var i = 0; i < 32; i++){
  array_team[i] = data.Result[i].Name;
}
randomize_team(array_team);
distribute_team(team_groups, array_team);
all_round(team_groups, team_group_goals, team_group_score);
select_all_winners(team_groups, team_group_score, team_group_goals, group_winners);
distribute_oitava(group_winners, team_groups_oitava);
all_quarta_match(oitavas_score, oitavas_goals);
quarta_winners(team_groups_oitava, oitavas_score, oitavas_goals);
quartas_battle_all(quartas_score, quartas_goals);
semifinal(semifinal_array, quartas_winners, quartas_score, quartas_goals, temp_array);
last_match(last_score,last_goal);
last_winner(last_score,last_goal,semifinal_array, mvp_winner)
distribute_html();
} );
//Quebra de linha
function linebreak(){
  document.write("<br>");
}
//Gera um número aleatório que representa a quantidade de gols de um time dentro de uma partida.
function randomize_goal(){
  x = Math.floor(Math.random() * 10);
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
function distribute_team(array_group, array_team){
  var x = 0;
    for(var i = 0; i < 8; i++){
        array_group[i].push(array_team[x], array_team[x+1], array_team[x+2], array_team[x+3]);
        x += 4;
    }
}
//Parâmetros no plural por pegar o vetor que possui todos os vetores de seu tipo.
function all_round(array_groups, array_goals, array_score){
  for(var i = 0; i < 8; i++){
    round_start(array_groups[i], array_goals[i], array_score[i]);
  }
}
//Utiliza a função group_round e group_round2 para simular uma rodada.
function round_start(array_group, array_goal, array_score){
  y = 0;
  do{
    if(y == 3){
      group_round2(y, array_group, array_goal, array_score);
      y++;
    }else if(y == 1){
      group_round(y, array_group, array_goal, array_score);
      y+=2;
    }else {
      group_round(y, array_group, array_goal, array_score);
      y++
    }
    
  }while(y <= 3);
}
//Função groupd_round para as primeiras duas rodadas de um grupo
function group_round(i, array_group, array_goal, array_score){
  var temp_goal1 = 0;
  var temp_goal2 = 0;
  //linebreak();linebreak();
  //document.write(`${array_group[i]} VS ${array_group[i+1]} ROUND NORMAL`);
  //linebreak();linebreak();
  //simulação de gol
  temp_goal1 = randomize_goal();
  temp_goal2 = randomize_goal();
  //demonstração de gols na tela
  //document.write(`${array_group[i]} ${temp_goal1} gols & ${array_group[i+1]} ${temp_goal2} gols`);
  //linebreak()
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
  //linebreak();linebreak();
  temp_goal1 = 0;
  temp_goal2 = 0;
  //document.write(`${array_group[i]} VS ${array_group[i+2]}`);
  //linebreak();linebreak();
  //simulação de gol
  temp_goal1 = randomize_goal();
  temp_goal2 = randomize_goal();
  //document.write(`${array_group[i]} ${temp_goal1} gols & ${array_group[i+2]} ${temp_goal2} gols`);
  //linebreak()
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
 // linebreak();linebreak();
 // document.write(`${array_group[i]} VS ${array_group[i-1]} ROUND ESPECIAL`);
  //linebreak();linebreak();
  //simulação de gol
  temp_goal1 = randomize_goal();
  temp_goal2 = randomize_goal();
  //demonstração de gols na tela
 // document.write(`${array_group[i]} ${temp_goal1} gols & ${array_group[i-1]} ${temp_goal2} gols`);
  //linebreak()
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
  //linebreak();linebreak();
 // document.write(`${array_group[i]} VS ${array_group[i-3]}`);
  //linebreak();linebreak();
  //simulação de gol
  temp_goal1 = randomize_goal();
  temp_goal2 = randomize_goal();
 // document.write(`${array_group[i]} ${temp_goal1} gols & ${array_group[i-3]} ${temp_goal2} gols`);
  //linebreak()
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
//Escolhe um número entre 0 e 4, sinalizando o índice do vetor
function generate_random_winner(){
  return Math.floor(Math.round(Math.random() * 3));
}
function generate_random_quarta_winners(){
  return Math.floor(Math.random() * 1)
}
//Função para receber os vetores de grupo, pontuação e gol para denominar os vencedores.
function select_winner(array_group, array_score, array_goal, victorious_array){
  var winner = 0, goal_winner = 0, goal_winner_name;
  var second_winner = 0, second_goal_winner = 0, second_goal_winner_name;
  var winner_location, goal_winner_location;
  var second_winner_location, second_goal_winner_location;
  var random_winner1, random_winner2;
  var same, same_goal;
  if(array_score[0] == array_score[1] && array_score[1] == array_score[2] && array_score[2] == array_score[3]){
    same = true;
    for(var i = 0; i < 4; i++){
      if(array_goal[i] > goal_winner){
        goal_winner_location = i;
        goal_winner = array_goal[i]
        goal_winner_name = array_group[i]
      }
      if(array_goal[i] > second_goal_winner)
        if(i != goal_winner_location){
          second_goal_winner_location = i;
          second_goal_winner = array_goal[i];
          second_goal_winner_name = array_group[i]
        }
    }
    if(array_goal[0] == array_goal[1] && array_goal[1] == array_goal[2] && array_goal[2] == array_goal[3]){
      same_goal = true;
      same = false;
      random_winner1 = generate_random_winner();
      random_winner2 = generate_random_winner();
      do{
        random_winner2 = generate_random_winner();
      }while(random_winner2 == random_winner1);
      
    }
  } else {

    for(var i = 0; i < 4; i++){
      if(array_score[i] > winner){
        winner = array_score[i];
        winner_location = i;
      }
    }
    for(var i = 0; i < 4; i++){
      if(array_score[i] > second_winner){
        if(i != winner_location){
          second_winner = array_score[i];
          second_winner_location = i;
        }
      }
    }
  }
  if(same){
    victorious_array[0] = array_group[goal_winner_location];
    victorious_array[1] = array_group[second_goal_winner_location];
  }else if(same_goal){
    victorious_array[0] = array_group[random_winner1];
    victorious_array[1] = array_group[random_winner2];
  } else {
    victorious_array[0] = array_group[winner_location];
    victorious_array[1] = array_group[second_winner_location];
  }
}
function select_all_winners(array_group_father, array_score_father, array_goal_father, victorious_array_father){
  for(var i = 0; i < 8; i++){
    select_winner(array_group_father[i], array_score_father[i], array_goal_father[i], victorious_array_father[i])
  }
}
function distribute_oitava(victorious_array, array_group_oitava){
  for(var i = 0; i < 4; i++){
    array_group_oitava[i][0] = victorious_array[i][0];
    array_group_oitava[i+4][0] = victorious_array[i][1];
    array_group_oitava[i][1] = victorious_array[i+1][1];
    array_group_oitava[i+4][1] = victorious_array[i+1][0];
  }
}
function quarta_match(array_score_oitava, array_score_goals){
  var goal_temp1, goal_temp2;
  goal_temp1 = randomize_goal()
  goal_temp2 = randomize_goal()
  array_score_goals[0] += goal_temp1;
  array_score_goals[1] += goal_temp2;
  if(goal_temp1 > goal_temp2){
    array_score_oitava[0] += 3;
  } else if(goal_temp2 > goal_temp1){
    array_score_oitava[1] += 3;
  }else{
    array_score_oitava[0] +=1;
    array_score_oitava[1] +=1;
  }
}

function all_quarta_match(array_score_oitava_all, array_score_goal_all){
  for(var i = 0; i < 8; i++){
    quarta_match(array_score_oitava_all[i], array_score_goal_all[i])
  }
}
function quarta_winner(winner_quartas, array_oitava, array_score_oitava, array_score_goals){
  var i = 0;
  if(array_score_oitava[i] > array_score_oitava[i+1]){
    winner_quartas[0] = array_oitava[i];
  } else if (array_score_oitava[i] < array_score_oitava[i+1]){
    winner_quartas[0] = array_oitava[i+1];
  } else{
    if(array_score_goals[i] > array_score_goals[i+1]){
      winner_quartas[0] = array_oitava[i];
    } else if (array_score_goals[i] > array_score_goals[i+1]){
      winner_quartas[0] = array_oitava[i+1];
    } else {
      winner_quartas[0] = array_oitava[generate_random_quarta_winners()];
    }
  }

}
function quarta_winners(array_oitava, array_score_oitava, array_score_goals){
  var j = 0;
  for(var i = 0; i < 8; i++){
    if(i != 0 & i % 2 == 0){
      j++;
    }
    quarta_winner(quartas_winners[j], array_oitava[i], array_score_oitava[i], array_score_goals[i]);

  }
}
function quartas_battle(array_score_quartas, array_score_goals_quartas){
  var i = 0;
  var goal_temp1 = randomize_goal();
  var goal_temp2 = randomize_goal();
  array_score_goals_quartas[i] = goal_temp1;
  array_score_goals_quartas[i+1] = goal_temp2;
  if(goal_temp1 > goal_temp2){
    array_score_quartas[i] = 3;
    array_score_quartas[i+1] = 0;
  } else if(goal_temp1 < goal_temp2){
    array_score_quartas[i+1] = 3;
    array_score_quartas[i] = 0;
  } else {
    array_score_quartas[i] = 1;
    array_score_quartas[i+1] = 1;
  }
}
function quartas_battle_all(array_score_quartas, array_score_goals_quartas){
  for(var i = 0; i < 2; i++){
    quartas_battle(array_score_quartas[i], array_score_goals_quartas[i])
  }
}
function select_semifinal(semifinals_array ,array_quartas, array_score_quartas, array_score_goals_quartas, temp_array){
  var x;
  if(array_score_quartas[0] > array_score_quartas[1]){
    semifinals_array.push(array_quartas[0])
  } else if (array_score_quartas[0] < array_score_quartas[1]){
    semifinals_array.push(array_quartas[1])
  } else {
    if(array_score_goals_quartas[0] > array_score_goals_quartas[1]){
      semifinals_array.push(array_quartas[0])
    } else if(array_score_goals_quartas[0] < array_score_goals_quartas[1]){
      semifinals_array.push(array_quartas[1])
    } else {
      do{
        x  = generate_random_quarta_winners()
      }while(x == temp_array)
      temp_array = x;
      semifinals_array.push(array_quartas[x]);
    }
  }
}
function select_semifinal2(semifinals_array ,array_quartas, array_score_quartas, array_score_goals_quartas, temp_array){
  var x;
  if(array_score_quartas[0] > array_score_quartas[1]){
    semifinals_array.push(array_quartas[2])
  } else if (array_score_quartas[0] < array_score_quartas[1]){
    semifinals_array.push(array_quartas[3])
  } else {
    if(array_score_goals_quartas[0] > array_score_goals_quartas[1]){
      semifinals_array.push(array_quartas[2])
    } else if(array_score_goals_quartas[0] < array_score_goals_quartas[1]){
      semifinals_array.push(array_quartas[3])
    } else {
      do{
        x  = generate_random_quarta_winners()
      }while(x == temp_array)
      temp_array = x;
      semifinals_array.push(array_quartas[x]);
    }
  }
}
function semifinal(semifinals_array, array_quartas, array_score_quartas, array_score_goals_quartas, temp_array){
  for(var i = 0; i < 2; i++){
    if(i == 1){
      select_semifinal2(semifinals_array, array_quartas, array_score_quartas[i], array_score_goals_quartas[i], temp_array)
    } else {
      select_semifinal(semifinals_array, array_quartas, array_score_quartas[i], array_score_goals_quartas[i], temp_array);
    
    }
  }
}
function last_match(last_score, last_goal){
  var temp_goal1 = randomize_goal();
  var temp_goal2 = randomize_goal();
  last_goal[0] = temp_goal1;
  last_goal[1] = temp_goal2;
  if(temp_goal1 > temp_goal2){
    last_score[0] = 3;
  } else if (temp_goal1 < temp_goal2){
    last_score[1] = 3;
  } else {
    last_score[0] = 1;
    last_score[1] = 1;
  }
}
function last_winner(last_score, last_goal, semifinal_array, mvp_winner){
  if(last_score[0] > last_score[1]){
    mvp_winner.push(semifinal_array[0]);
  } else if(last_score[0] < last_score[1]){
    mvp_winner.push(semifinal_array[1]);
  } else {
    if(last_goal[0] > last_score[1]){
      mvp_winner.push(semifinal_array[0]);
    } else if(last_goal[0] < last_goal[1]){
      mvp_winner.push(semifinal_array[1]);
    } else {
      var y = Math.round(Math.random());
      mvp_winner.push(semifinal_array[y]);
    }
  }
}
function distribute_html(){
  document.querySelector("#vencedor").innerHTML = mvp_winner[0];

  document.querySelector("#semifinalE").innerHTML = semifinal_array[0];
  document.querySelector("#semifinalD").innerHTML = semifinal_array[1];

  document.querySelector("#quartasABCD").innerHTML = quartas_winnerBADC[0];
  document.querySelector("#quartasEFGH").innerHTML = quartas_winnerEFGH[0];
  document.querySelector("#quartasBADC").innerHTML = quartas_winnerABCD[0];
  document.querySelector("#quartasFEHG").innerHTML = quartas_winnerFEHG[0];
  
  document.querySelector("#oitavas1A2B").innerHTML = `${oitava_1A2B[0]}<br/ >${oitava_1A2B[1]}`;
  document.querySelector("#oitavas1C2D").innerHTML = `${oitava_1C2D[0]}<br/ >${oitava_1C2D[1]}`;
  document.querySelector("#oitavas1E2F").innerHTML = `${oitava_1B2A[0]}<br/ >${oitava_1B2A[1]}`;
  document.querySelector("#oitavas1G2H").innerHTML = `${oitava_1G2H[0]}<br/ >${oitava_1G2H[1]}`;
  document.querySelector("#oitavas1B2A").innerHTML = `${oitava_1E2F[0]}<br/ >${oitava_1E2F[1]}`;
  document.querySelector("#oitavas1D2C").innerHTML = `${oitava_1D2C[0]}<br/ >${oitava_1D2C[1]}`;
  document.querySelector("#oitavas1F2E").innerHTML = `${oitava_1F2E[0]}<br/ >${oitava_1F2E[1]}`;
  document.querySelector("#oitavas1H2G").innerHTML = `${oitava_1H2G[0]}<br/ >${oitava_1H2G[1]}`;
  
  
  document.querySelector("#groupA").innerHTML = `${group1[0]}<br/ >${group1[1]}<br/ >${group1[2]}<br/ >${group1[3]}`
  document.querySelector("#groupB").innerHTML = `${group2[0]}<br/ >${group2[1]}<br/ >${group2[2]}<br/ >${group2[3]}`
  document.querySelector("#groupC").innerHTML = `${group3[0]}<br/ >${group3[1]}<br/ >${group3[2]}<br/ >${group3[3]}`
  document.querySelector("#groupD").innerHTML = `${group4[0]}<br/ >${group4[1]}<br/ >${group4[2]}<br/ >${group4[3]}`
  document.querySelector("#groupE").innerHTML = `${group5[0]}<br/ >${group5[1]}<br/ >${group5[2]}<br/ >${group5[3]}`
  document.querySelector("#groupF").innerHTML = `${group6[0]}<br/ >${group6[1]}<br/ >${group6[2]}<br/ >${group6[3]}`
  document.querySelector("#groupG").innerHTML = `${group7[0]}<br/ >${group7[1]}<br/ >${group7[2]}<br/ >${group7[3]}`
  document.querySelector("#groupH").innerHTML = `${group8[0]}<br/ >${group8[1]}<br/ >${group8[2]}<br/ >${group8[3]}`
}