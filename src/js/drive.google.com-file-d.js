document.body.style.border = "10px dashed yellow";

var id = window.location.toString().match("file/d/([^/]+)")[1];
console.log("id: " + id);
let url = "https://drive.google.com/uc?id=" + id + "&export=download";
window.location = url;