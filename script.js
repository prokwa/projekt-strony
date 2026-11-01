function pokazWiecej() {
  let produkty = document.getElementById("ukryte");
  let przycisk = document.getElementById("przycisk");

  if (produkty.style.display === "none") {
    produkty.style.display = "flex";
    przycisk.innerHTML = "Pokaż mniej";
  } else {
    produkty.style.display = "none";
    przycisk.innerHTML = "Pokaż więcej";
  }
}
