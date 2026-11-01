function pokazWiecej() {
  const produkty = document.getElementById("ukryte");
  const przycisk = document.getElementById("przycisk");

  if (getComputedStyle(produkty).display === "none") {
    produkty.style.display = "flex";
    przycisk.textContent = "Pokaż mniej";
  } else {
    produkty.style.display = "none";
    przycisk.textContent = "Pokaż więcej";
  }
}
