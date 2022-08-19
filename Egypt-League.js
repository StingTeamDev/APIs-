  /* Egypt-League */
  const EgyptS = await fetch(
    "https://s1.vicious-cdn.football/ift_apis/standing/2021-2022-egyptian-premier-league.json"
  );
  const EgyptST = await EgyptS.json();
  document.querySelector(".Egypt-League").innerHTML = EgyptST;
