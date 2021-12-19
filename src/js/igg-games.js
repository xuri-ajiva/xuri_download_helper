document.body.style.border = "10px dashed yellow";

for (const b of document.querySelectorAll("b[class='uk-heading-bullet']")) {
  if (!b.textContent.includes("Link ")) continue;
  if (b.textContent.includes("TORRENT")) continue;

  let bg = "#00162b";
  let working = "#1fd14f";
  let develop = "#d1ab1f";
  let notworking = "#d1521f";
  let bad = "#ba0000";
  if (b.textContent.includes("MegaUp")) bg = working;
  else if (b.textContent.includes("GoFile")) bg = working;
  else if (b.textContent.includes("AnonFiles")) bg = working;
  else if (b.textContent.includes("Google Drive")) bg = working;
  else if (b.textContent.includes("Clicknupload")) bg = develop;
  else if (b.textContent.includes("Mega.nz")) bg = notworking;
  else if (b.textContent.includes("Mega.co.nz")) bg = notworking;
  else if (b.textContent.includes("Rapidgator")) bg = notworking;
  else if (b.textContent.includes("1Fichier")) bg = bad;

  console.log("Adding Button for: " + b.textContent);
  let btn = document.createElement("a");
  btn.style =
    "text-align: center; margin: 10px; padding: 16px 42px; box-shadow: 0px 0px 12px -2px rgba(0,0,0,0.5); line-height: 1.25; background: " +
    bg +
    "; text-decoration: none; color: white; font-size: 16px; letter-spacing: .08em; text-transform: uppercase; position: relative; transition: background-color .6s ease; overflow: hidden; display: block;";

  btn.addEventListener("click", function () {
    var urls = [];
    var show = [];
    for (const c of btn.parentElement.querySelectorAll("a")) {
      if (c.href != "") {
        urls.push(c.href);
        show.push(c.innerHTML);
      }
    }
    if (window.confirm("Open For: \n" + show))
      for (const url of urls) {
        let wnd = window.open(url, url + "" + Math.random(), "popup");
        let i = setInterval(() => {
          wnd.scrollTo({ left: Math.random() * 20, top: Math.random() * 20 });
          wnd.focus();
        }, 990);
        setTimeout(() => {
          wnd.close();
          clearInterval(i);
        }, 40000);
      }
  });
  btn.text = "Download All from " + b.textContent.substring(5).trimEnd(":");
  b.parentElement.insertBefore(btn, b.nextSibling);
}
