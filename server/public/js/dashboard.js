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

// Modify Task Information function
var currentCard;
$(document).ready(function () {
    // Hard Code : For Switching the different id button on the modal
    // Initially hide the add button in the modal
    $('#modalAddBtn').hide();
    $('#modalDltBtn').hide();
    // Toggle between save and add button depends on which item clicked
    $('#toDoListAddBtn,#inProgressAddBtn,#doneAddBtn').click(function () {
        $('#modalAddBtn').show();
        $('#modalDltBtn').hide();
        $('#modalSaveBtn').hide();
    });

    $('.card').click(function () {
        $('#modalSaveBtn').show();
        $('#modalDltBtn').show();
        $('#modalAddBtn').hide();
    });

    // When the card is clicked, pop up window for adjusting the task
    $('.card').click(function () {
        currentCard = $(this);

        // Retrieve the task information
        var taskName = currentCard.find('.card-title').text();
        var taskDesc = currentCard.find('.card-subtitle').text();
        var taskProgress = currentCard.find('.progress-state .bx-pull-right').text();
        var taskDueDate = currentCard.find('.card-text').text();
        var taskPriority = currentCard.find('.card-test,.priority');

        console.log(taskPriority);
        console.log(currentCard.find('.card-priority').text());

        // Set the task information in the modal
        $(".modal-title").text("Modify Task Information");
        $('#modalSaveBtn').text('Save changes');
        $('#modalTaskName').attr('placeholder', taskName);
        $('#modalTaskDesc').attr('placeholder', taskDesc);
        $('#modalTaskProgress').attr('placeholder', taskProgress + ' - Edit in percentage(%)');
        $('#modalTaskDueDate').attr('placeholder', taskDueDate);
        $('#modalTaskPriority').val(taskPriority);

        // Show the modal
        $('#taskModal').modal('toggle');
    });

    // Handle the save button in the modal
    $('#modalSaveBtn').click(function () {
        var modifiedTaskName = $('#modalTaskName').val();
        var modifiedTaskDesc = $('#modalTaskDesc').val();
        var modifiedTaskProgress = $('#modalTaskProgress').val();
        var modifiedTaskDueDate = $('#modalTaskDueDate').val();
        var modifiedTaskPriority = $('#modalTaskPriority').val();

        // Update the card with the modified task information
        currentCard.find('.card-title').text(modifiedTaskName);
        currentCard.find('.card-subtitle').text(modifiedTaskDesc);
        currentCard.find('.progress-state .bx-pull-right').text(Math.floor(modifiedTaskProgress / 10) + "/10");
        currentCard.find('.progress-bar').attr('aria-valuenow', modifiedTaskProgress);
        currentCard.find('.progress-bar').css('width', modifiedTaskProgress + '%');
        currentCard.find('.progress-bar').css('width', modifiedTaskProgress + '%');
        currentCard.find('.card-priority span').text(modifiedTaskPriority);

        // Determine the updated progress bar color
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

        // Determine the updated priority color
        if (modifiedTaskPriority === 'Low Priority') {
            currentCard.find('.card-priority span').css('color', '#78d700');
        } else if (modifiedTaskPriority === 'Medium Priority') {
            currentCard.find('.card-priority span').css('color', '#ffa048');
        } else {
            currentCard.find('.card-priority span').css('color', '#ff7979');

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
        $('#modalTaskPriority').val('');

        // Hide the modal
        $('#taskModal').modal('toggle');
        currentCard = null;
    });
});

//Add task function
//hard code part, might change later
$(document).ready(function () {
    //Add a new card under the current section
    $('#toDoListAddBtn').click(function () {
        // Set the task information in the modal
        $(".modal-title").text("Add New Task");
        $('#modalAddBtn').text('Add Task');
        $('#modalTaskName').attr('placeholder', 'Enter Task Name');
        $('#modalTaskDesc').attr('placeholder', 'Enter Task Description');
        $('#modalTaskDueDate').attr('placeholder', 'Enter Task Due Date');

        // Show the modal
        $('#taskModal').modal('toggle');

        // Save the modified value
        $('#modalAddBtn').click(function () {
            console.log('added');
            var modifiedTaskName = $('#modalTaskName').val();
            var modifiedTaskDesc = $('#modalTaskDesc').val();
            var modifiedTaskProgress = $('#modalTaskProgress').val();
            var modifiedTaskDueDate = $('#modalTaskDueDate').val();
            var modifiedTaskPriority = $('#modalTaskPriority').val();

            // Create new instance(Card) under the section
            $('#to-do-list-col').append('<div class="card my-4 mx-5 col"><div class="card-body"><span><a href="#"><i class="bx bx-edit bx-pull-right icon text-secondary"></i></a></span><h5 class="card-title fw-bold">' + modifiedTaskName + '</h5><h5 class="card-title text-secondary">' + modifiedTaskDesc + '</h5><div class="progress-state my-2"><i class="bx bx-list-ul icon"></i><span class="text-secondary">Progress</span><span class="bx-pull-right float-end fw-bold">' + modifiedTaskProgress / 10 + '/10' + '</span></div><div class="progress" style="height: 3px"><div class="progress-bar bg-warning" role="progressbar" style="width: ' + modifiedTaskProgress + '%" aria-valuenow="' + modifiedTaskProgress + '" aria-valuemin="0" aria-valuemax="100"></div></div><div class="d-flex gap-1"><div class=""><p class="card-text mt-1"><span class="badge bg-body-secondary circle mr-2" style="color: #ffa048">' + modifiedTaskDueDate + '</span></p></div><div class=""><p class="card-priority mt-1"><span class="badge bg-body-secondary circle mr-2" style="color: #ffa048">' + modifiedTaskPriority + '</span></p></div></div></div></div>');

            //Clear the text on the box
            $('#modalTaskName').val('');
            $('#modalTaskDesc').val('');
            $('#modalTaskProgress').val(0);
            $('#modalTaskDueDate').val('');

            // Hide the modal
            $('#taskModal').modal('toggle');

        });


    });

    $('#inProgressAddBtn').click(function () {
        // Set the task information in the modal
        $(".modal-title").text("Add New Task");
        $('#modalAddBtn').text('Add Task');
        $('#modalTaskName').attr('placeholder', 'Enter Task Name');
        $('#modalTaskDesc').attr('placeholder', 'Enter Task Description');
        $('#modalTaskDueDate').attr('placeholder', 'Enter Task Due Date');

        // Show the modal
        $('#taskModal').modal('toggle');

        // Save the modified value
        $('#modalAddBtn').click(function () {
            console.log('added');
            var modifiedTaskName = $('#modalTaskName').val();
            var modifiedTaskDesc = $('#modalTaskDesc').val();
            var modifiedTaskProgress = $('#modalTaskProgress').val();
            var modifiedTaskDueDate = $('#modalTaskDueDate').val();
            var modifiedTaskPriority = $('#modalTaskPriority').val();

            // Create new instance(Card) under the section
            $('#in-progress-col').append('<div class="card my-4 mx-5 col"><div class="card-body"><span><a href="#"><i class="bx bx-edit bx-pull-right icon text-secondary"></i></a></span><h5 class="card-title fw-bold">' + modifiedTaskName + '</h5><h5 class="card-title text-secondary">' + modifiedTaskDesc + '</h5><div class="progress-state my-2"><i class="bx bx-list-ul icon"></i><span class="text-secondary">Progress</span><span class="bx-pull-right float-end fw-bold">' + modifiedTaskProgress / 10 + '/10' + '</span></div><div class="progress" style="height: 3px"><div class="progress-bar bg-warning" role="progressbar" style="width: ' + modifiedTaskProgress + '%" aria-valuenow="' + modifiedTaskProgress + '" aria-valuemin="0" aria-valuemax="100"></div></div><div class="d-flex gap-1"><div class=""><p class="card-text mt-1"><span class="badge bg-body-secondary circle mr-2" style="color: #ffa048">' + modifiedTaskDueDate + '</span></p></div><div class=""><p class="card-priority mt-1"><span class="badge bg-body-secondary circle mr-2" style="color: #ffa048">' + modifiedTaskPriority + '</span></p></div></div></div></div>');

            //Clear the text on the box
            $('#modalTaskName').val('');
            $('#modalTaskDesc').val('');
            $('#modalTaskProgress').val(0);
            $('#modalTaskDueDate').val('');

            // Hide the modal
            $('#taskModal').modal('toggle');

        });


    });

    $('#doneAddBtn').click(function () {
        // Set the task information in the modal
        $(".modal-title").text("Add New Task");
        $('#modalAddBtn').text('Add Task');
        $('#modalTaskName').attr('placeholder', 'Enter Task Name');
        $('#modalTaskDesc').attr('placeholder', 'Enter Task Description');
        $('#modalTaskDueDate').attr('placeholder', 'Enter Task Due Date');

        // Show the modal
        $('#taskModal').modal('toggle');

        // Save the modified value
        $('#modalAddBtn').click(function () {
            console.log('added');
            var modifiedTaskName = $('#modalTaskName').val();
            var modifiedTaskDesc = $('#modalTaskDesc').val();
            var modifiedTaskProgress = $('#modalTaskProgress').val();
            var modifiedTaskDueDate = $('#modalTaskDueDate').val();
            var modifiedTaskPriority = $('#modalTaskPriority').val();

            // Create new instance(Card) under the section
            $('#done-col').append('<div class="card my-4 mx-5 col"><div class="card-body"><span><a href="#"><i class="bx bx-edit bx-pull-right icon text-secondary"></i></a></span><h5 class="card-title fw-bold">' + modifiedTaskName + '</h5><h5 class="card-title text-secondary">' + modifiedTaskDesc + '</h5><div class="progress-state my-2"><i class="bx bx-list-ul icon"></i><span class="text-secondary">Progress</span><span class="bx-pull-right float-end fw-bold">' + modifiedTaskProgress / 10 + '/10' + '</span></div><div class="progress" style="height: 3px"><div class="progress-bar bg-warning" role="progressbar" style="width: ' + modifiedTaskProgress + '%" aria-valuenow="' + modifiedTaskProgress + '" aria-valuemin="0" aria-valuemax="100"></div></div><div class="d-flex gap-1"><div class=""><p class="card-text mt-1"><span class="badge bg-body-secondary circle mr-2" style="color: #ffa048">' + modifiedTaskDueDate + '</span></p></div><div class=""><p class="card-priority mt-1"><span class="badge bg-body-secondary circle mr-2" style="color: #ffa048">' + modifiedTaskPriority + '</span></p></div></div></div></div>');

            //Clear the text on the box
            $('#modalTaskName').val('');
            $('#modalTaskDesc').val('');
            $('#modalTaskProgress').val(0);
            $('#modalTaskDueDate').val('');

            // Hide the modal
            $('#taskModal').modal('toggle');

        });


    });

});

// Reminder pop up
$(document).ready(function () {
    $("#reminderButton").click(function () {
        $("#reminderModal").modal("show");
    });
});

//Hide the remindermodal after clicking the close button
$("#closeReminderModal").click(function () {
    // Hide the modal
    $("#reminderModal").modal("toggle");
});
