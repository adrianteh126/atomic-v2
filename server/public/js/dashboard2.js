$(document).ready(function () {
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
    });
  });

  //Jquery 
const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    // searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector('.mode-text');

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode"
    } else {
        modeText.innerText = "Dark Mode"
    }
});

// Modify Task Information function
var currentCard;
$(document).ready(function () {
    // When the card is clicked, pop up window for adjusting the task
    $('.card').click(function () {
        currentCard = $(this);

        // Retrieve the task information
        var taskName = currentCard.find('.card-title').text();
        var taskDesc = currentCard.find('.card-subtitle').text();
        var taskProgress = currentCard.find('.progress-state .bx-pull-right').text();
        var taskDueDate = currentCard.find('.card-text').text();

        // Set the task information in the modal
        $('#modalTaskName').attr('placeholder', taskName);
        $('#modalTaskDesc').attr('placeholder', taskDesc);
        $('#modalTaskProgress').attr('placeholder', taskProgress + ' - Edit in percentage(%)');
        $('#modalTaskDueDate').attr('placeholder', taskDueDate);

        // Show the modal
        $('#taskModal').modal('toggle');
    });

    // Handle the save button in the modal
    $('#modalSaveBtn').click(function () {

        var modifiedTaskName = $('#modalTaskName').val();
        var modifiedTaskDesc = $('#modalTaskDesc').val();
        var modifiedTaskProgress = $('#modalTaskProgress').val();
        var modifiedTaskDueDate = $('#modalTaskDueDate').val();

        // Update the card with the modified task information
        currentCard.find('.card-title').text(modifiedTaskName);
        currentCard.find('.card-subtitle').text(modifiedTaskDesc);
        currentCard.find('.progress-state .bx-pull-right').text(Math.floor(modifiedTaskProgress / 10) + "/10");
        currentCard.find('.progress-bar').attr('aria-valuenow', modifiedTaskProgress);
        currentCard.find('.progress-bar').css('width', modifiedTaskProgress + '%');
        if (modifiedTaskProgress < 40) {
            currentCard.find('.progress-bar').addClass('bg-danger');
            currentCard.find('.progress-bar').removeClass('bg-warning');
            currentCard.find('.progress-bar').removeClass('bg-success');
        } else if (modifiedTaskProgress < 70) {
            currentCard.find('.progress-bar').addClass('bg-warning');
            currentCard.find('.progress-bar').removeClass('bg-success');
            currentCard.find('.progress-bar').removeClass('bg-danger');
        } else {
            currentCard.find('.progress-bar').addClass('bg-success');
            currentCard.find('.progress-bar').removeClass('bg-warning');
            currentCard.find('.progress-bar').removeClass('bg-danger');
        }

        currentCard.find('.card-text').text(modifiedTaskDueDate);

        //Clear the text on the box
        $('#modalTaskName').val('');
        $('#modalTaskDesc').val('');
        $('#modalTaskProgress').val(0);
        $('#modalTaskDueDate').val('');

        // Hide the modal
        $('#taskModal').modal('toggle');
        currentCard = null;
    });

    //Hide the modal adter clicking the close button
    $('#modalCloseBtn').click(function () {

        //Clear the text on the box
        $('#modalTaskName').val('');
        $('#modalTaskDesc').val('');
        $('#modalTaskProgress').val(0);
        $('#modalTaskDueDate').val('');

        // Hide the modal
        $('#taskModal').modal('toggle');
        currentCard = null;
    });

});