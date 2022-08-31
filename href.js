const JSap = async function get() {
  document
    .getElementsByTagName("head")[0]
    .insertAdjacentHTML(
      "beforeend",
      '<link rel="stylesheet" href="https://cdn.statically.io/gh/StingTeamDev/APIs-/main/TB-Match.css" />'
    );

  const response = await fetch(
      "https://api.anubis-dev.com/TableMatchAuto/index.php?o=5"
    ),
    data = await response.json();
  document.querySelector(".AutoTableSting").innerHTML = data.yesterday;


  const href = document.querySelectorAll(".match-container a");

  
  for (let i = 0; i < href.length; i++) {
    href[0].setAttribute("href" , `${Arry[0]}`);
    href[1].setAttribute("href" , `${Arry[1]}`);
    href[2].setAttribute("href" , `${Arry[2]}`);
    href[3].setAttribute("href" , `${Arry[3]}`);
    href[4].setAttribute("href" , `${Arry[4]}`);
    href[5].setAttribute("href" , `${Arry[5]}`);
    href[6].setAttribute("href" , `${Arry[6]}`);
    href[7].setAttribute("href" , `${Arry[7]}`);
    href[8].setAttribute("href" , `${Arry[8]}`);
    href[9].setAttribute("href" , `${Arry[9]}`);
  }


  console.group(
    "%cTable Match Auto Blogger",
    "font-weight:bold;color:red;font-family:Tahoma;font-size:18px;"
  );
  console.log("Version       : => : V 1.0.1");
  console.log("Design by     : => : Mahmoud Abu Maher");
  console.log("Programming   : => : Sting Web Dev");
  console.log("Facebook Page : => : fb.com/stingweb.eg");
  console.groupEnd();
};

JSap();
