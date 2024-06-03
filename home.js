document.addEventListener("keydown", function (zEvent) {
  if (zEvent.shiftKey && zEvent.key === "H") {
    this.location.href = "/";
    console.log("Home");
  }
});
