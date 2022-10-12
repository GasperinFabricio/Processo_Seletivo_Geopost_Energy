myHeaders = new Headers({
    "git-user": "git-user",
    "response": "JSON"
  });
var myHeader = { method: 'GET',
               headers: myHeaders,
             };
var array_nome = new Array ();
var Johnson, Johnson1;
var api_url = "url";
(fetch(api_url, myHeader)
.then(response => Johnson = (response.json()))
.then(data => Johnson1 = data))
Johnson1 = JSON.stringify(Johnson1);
let selection_array = new Array();
for(let i = 0; i < 32; i++){
    array_name = Johnson1.Result[i].Name
}
