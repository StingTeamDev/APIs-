const JSap = async function get() {
  document
    .getElementsByTagName("head")[0]
    .insertAdjacentHTML(
      "beforeend",
      '<link rel="stylesheet" href="https://cdn.statically.io/gh/StingTeamDev/APIs-/main/Table.css" />'
    );
  const response = await fetch(
      "https://api.anubis-dev.com/TableMatchAuto/index.php?o=5"
    ),
    data = await response.json();

  document.querySelector(".AutoTableSting").innerHTML = data.yesterday;
};

JSap();
