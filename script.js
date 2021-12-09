async function fetchApi(){
  let response = await fetch('http://numbersapi.com/random/math');
  let text = await response.text();
  let codeUpdate = "";
  codeUpdate += '<p class="h-5 col" id="tulisan">" ' + text + ' "</p>';
  console.log(codeUpdate);
  document.getElementById("target").innerHTML = codeUpdate;
}

fetchApi();