// Navbar toggle
const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    // searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector('.mode-text');

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

// Light mode & dark mode switch
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode"
    } else {
        modeText.innerText = "Dark Mode"
    }
});

$(document).ready(function () {
  // Reminder pop up
  $("#btnSavechanges").click(function () {
    $("#myModal1").modal("show");
  });

  //Hide the remindermodal after clicking the close button
  $("#btConfirmsave").click(function () {
    // Hide the modal
    $("#myModal1").modal("toggle");
  });

  //Hide the remindermodal after clicking the close button
  $("#btnCloseSave").click(function () {
    // Hide the modal
    $("#myModal1").modal("toggle");
  });
});

// Reminder pop up
$(document).ready(function () {
  $("#btnDeleteaccount").click(function () {
    $("#myModal2").modal("show");
  });
});

//Hide the remindermodal after clicking the close button
$("#btnDCancel").click(function () {
  // Hide the modal
  $("#myModal2").modal("toggle");
});

//Hide the remindermodal after clicking the close button
$("#btnDConfirmDelete").click(function () {
  // Hide the modal
  $("#myModal2").modal("toggle");
});
