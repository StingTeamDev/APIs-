const JSapiScoure = async function get() {const EgyptS=await fetch("https://s1.vicious-cdn.football/ift_apis/standing/2021-2022-egyptian-premier-league.json"),EgyptST=await EgyptS.json();document.querySelector(".Egypt-League").innerHTML=EgyptST;const Egypt=await fetch("https://s1.vicious-cdn.football/ift_apis/scorers/2021-2022-egyptian-premier-league-scorers.json"),EgyptScoure=await Egypt.json();document.querySelector(".Egypt-League-Scoure").innerHTML=EgyptScoure};JSapiScoure();
  
  function openCity(d,e){var a,c,b;for(a=0,c=document.getElementsByClassName("tabcontent");a<c.length;a++)c[a].style.display="none";for(a=0,b=document.getElementsByClassName("tablinks");a<b.length;a++)b[a].className=b[a].className.replace(" active","");document.getElementById(e).style.display="block",d.currentTarget.className+=" active"}document.getElementById("defaultOpen").click()
  
  
