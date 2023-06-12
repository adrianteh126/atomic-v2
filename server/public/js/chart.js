document.addEventListener("DOMContentLoaded", function () {
  // Generate chart data for priority
  const priorityData = {
    labels: ["High", "Medium", "Low"],
    datasets: [
      {
        label: "Percentage",
        data: [],
        backgroundColor: ["#ff7979", "#ffa048", "#78d700"],
        borderWidth: 1,
      },
    ],
  };

  // Create a chart instance for priority
  var priorityCtx = document.getElementById("priorityChart").getContext("2d");
  var priorityChart = new Chart(priorityCtx, {
    type: "pie",
    data: priorityData,
    options: {
      responsive: true,
      aspectRatio: 0.7,
      plugins: {
        title: {
          display: true,
          text: "Statistic of Priority", // Custom chart title
          fontSize: 18,
          fontColor: "#333",
        },
      },
    },
  });

  // Generate chart data for status
  const statusData = {
    labels: ["To do", "In Progress", "Done"],
    datasets: [
      {
        label: "Percentage",
        data: [],
        backgroundColor: ["#ff7979", "#ffa048", "#78d700"],
        borderWidth: 1,
      },
    ],
  };

  // Create a chart instance for status
  var statusCtx = document.getElementById("statusChart").getContext("2d");
  var statusChart = new Chart(statusCtx, {
    type: "pie",
    data: statusData,
    options: {
      responsive: true,
      aspectRatio: 0.7,
      plugins: {
        title: {
          display: true,
          text: "Statistic of Status", // Custom chart title
          fontSize: 40,
          fontColor: "#333",
        },
      },
    },
  });

  // Define the chart data for weekly tasks completed
  const weeklyChartData = {
    labels: ["This Week", "Last Week", "Last 2 Weeks", "Last 3 Weeks"],
    datasets: [
      {
        label: "Weekly Tasks Completed",
        data: [],
        backgroundColor: "#78d700",
        borderWidth: 1,
      },
    ],
  };

  // Create a chart instance for weekly tasks completed
  var weeklyCtx = document.getElementById("weeklyChart").getContext("2d");
  var weeklyChart = new Chart(weeklyCtx, {
    type: "bar",
    data: weeklyChartData,
    options: {
      responsive: true,
      aspectRatio: 0.7,
      plugins: {
        title: {
          display: true,
          text: "Weekly Tasks Completed", // Custom chart title
          fontSize: 18,
          fontColor: "#333",
        },
      },
      scales: {
        x: {
          display: true,
          grid: {
            display: false, // Hide the grid lines
          },
        },
        y: {
          display: true, // Display the y-axis labels
          beginAtZero: true, // Start the y-axis from zero
          ticks: {
            stepSize: 1, // Set the step size for the y-axis labels
          },
        },
      },
      layout: {
        padding: {
          top: 10,
          bottom: 10,
        },
      },
    },
  });

  // Fetch data from the API for status and priority
  fetch("http://localhost:3000/todos/")
    .then((response) => response.json())
    .then((data) => {
      // Process the data retrieved from the API
      const priorityCounts = {
        High: 0,
        Medium: 0,
        Low: 0,
      };

      const statusCounts = {
        "To do": 0,
        "In Progress": 0,
        DONE: 0,
      };

      data.forEach((item) => {
        priorityCounts[item.t_priority]++;
        statusCounts[item.t_status]++;
      });

      const priorityValues = [
        priorityCounts["High"],
        priorityCounts["Medium"],
        priorityCounts["Low"],
      ];

      const statusValues = [
        statusCounts["To do"],
        statusCounts["In Progress"],
        statusCounts["DONE"],
      ];

      // Update the priority chart data
      priorityChart.data.datasets[0].data = priorityValues;

      // Update the status chart data
      statusChart.data.datasets[0].data = statusValues;

      // Update the charts
      priorityChart.update();
      statusChart.update();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // Fetch data from the API for the weekly chart
  fetch("http://localhost:3000/todos/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Check the retrieved data in the console

      // Process the data retrieved from the API
      const weeklyTasksCompleted = [0, 0, 0, 0]; // Initialize the array to store the number of weekly tasks completed

      const currentDate = new Date();
      const currentWeek = getWeekNumber(currentDate);

      data.forEach((item) => {
        const createdAtDate = new Date(item.createdAt);
        const createdAtWeek = getWeekNumber(createdAtDate);

        if (item.t_status === "DONE" && currentWeek - createdAtWeek <= 3) {
          const weekIndex = currentWeek - createdAtWeek;
          weeklyTasksCompleted[weekIndex]++;
        }
      });

      console.log(weeklyTasksCompleted); // Check the array of weekly tasks completed

      // Update the weekly tasks completed chart data
      weeklyChart.data.datasets[0].data = weeklyTasksCompleted;

      // Update the chart
      weeklyChart.update();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  function getWeekNumber(date) {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const millisecondsInWeek = 604800000;
    const weekNumber = Math.ceil((date - oneJan) / millisecondsInWeek + 1);
    return weekNumber;
  }

  // Fetch data from the API for the weekly chart to update the weekly status
  fetch("http://localhost:3000/todos/")
    .then((response) => response.json())
    .then((data) => {
      // Process the data retrieved from the API
      const currentDate = new Date();
      const currentWeek = getWeekNumber(currentDate);

      let completedCount = 0;
      let ongoingCount = 0;

      data.forEach((item) => {
        const createdAtDate = new Date(item.createdAt);
        const createdAtWeek = getWeekNumber(createdAtDate);

        if (item.t_status === "DONE" && currentWeek === createdAtWeek) {
          completedCount++;
        } else if (item.t_status !== "DONE" && currentWeek === createdAtWeek) {
          ongoingCount++;
        }
      });

      // Update the HTML to display the completed and ongoing task counts
      const taskStatusElement = document.getElementById("taskStatus");
      taskStatusElement.textContent = `This Week Completed: ${completedCount} On Going: ${ongoingCount}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  //Stacked bar chart
  const data = {
    labels: ["This Week"],
    datasets: [
      {
        label: "Todo",
        data: [],
        backgroundColor: "#ff7979",
      },
      {
        label: "In Progress",
        data: [],
        backgroundColor: "#ffa048",
      },
      {
        label: "Done",
        data: [],
        backgroundColor: "#78d700",
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      indexAxis: "y",
      elements: {
        bar: {
          borderWidth: 1,
          borderSkipped: "end",
        },
      },
      responsive: true,
      aspectRatio: 5.0,
      plugins: {
        legend: {
          display: false, // Remove the legend
        },
        title: {
          display: false, // Remove the title
        },
      },
      scales: {
        x: {
          stacked: true,
          beginAtZero: true,
          ticks: {
            display: false, // Remove the x-axis labels
          },
          grid: {
            display: false, // Remove the grid lines
          },
        },
        y: {
          display: false, // Remove the y-axis labels
          stacked: true,
          beginAtZero: true,
          grid: {
            display: false,
          },
        },
      },
    },
  };

  // Fetch data from the API for the latest 7 days
  const currentDate = new Date();
  const startDate = new Date();
  startDate.setDate(currentDate.getDate() - 6); // Subtract 6 days to get the start date

  fetch("http://localhost:3000/todos/")
    .then((response) => response.json())
    .then((data) => {
      // Process the data retrieved from the API
      let todoCount = 0;
      let ongoingCount = 0;
      let doneCount = 0;

      data.forEach((item) => {
        const createdAtDate = new Date(item.createdAt);

        if (
          item.t_status === "To do" &&
          createdAtDate >= startDate &&
          createdAtDate <= currentDate
        ) {
          todoCount++;
        } else if (
          item.t_status === "In Progress" &&
          createdAtDate >= startDate &&
          createdAtDate <= currentDate
        ) {
          ongoingCount++;
        } else if (
          item.t_status === "DONE" &&
          createdAtDate >= startDate &&
          createdAtDate <= currentDate
        ) {
          doneCount++;
        }
      });

      // Update the stacked bar chart data
      config.data.datasets[0].data = [todoCount];
      config.data.datasets[1].data = [ongoingCount];
      config.data.datasets[2].data = [doneCount];

      // Create the chart
      const ctx = document.getElementById("stackedBarChart").getContext("2d");
      new Chart(ctx, config);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
