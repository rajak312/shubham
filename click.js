document.addEventListener("DOMContentLoaded", function () {
  const container1 = document.getElementById("container1");
  const container2 = document.getElementById("container2");
  const dialog = document.getElementById("popupDialog");

  function openDialog() {
    dialog.style.display = "block";
  }

  function closeDialog() {
    dialog.style.display = "none";
  }

  container1.addEventListener("click", openDialog);
  container2.addEventListener("click", openDialog);

  window.addEventListener("click", function (event) {
    if (
      event.target !== dialog &&
      event.target !== container1 &&
      event.target !== container2
    ) {
      closeDialog();
    }
  });
});
