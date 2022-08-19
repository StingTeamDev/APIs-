  /* Egypt-League-Scoure */
  const Egypt = await fetch(
    "https://s1.vicious-cdn.football/ift_apis/scorers/2021-2022-egyptian-premier-league-scorers.json"
  );
  const EgyptScoure = await Egypt.json();
  document.querySelector(".Egypt-League-Scoure").innerHTML = EgyptScoure;
