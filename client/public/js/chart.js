document.addEventListener('DOMContentLoaded', function () {
    // Generate chart data
    const toDoData = {
        labels: ['To Do', 'In Progress', 'Done'],
        datasets: [
            {
                label: 'Percentage',
                data: [69.1, 23.4, 7.5],
                backgroundColor: ['#ff7979', '#ffa048', '#78d700'],
                borderWidth: 1,
            },
        ],
    };

    // Create a chart instance
    var ctx = document.getElementById('toDoChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'pie',
        data: toDoData,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Statistic of Current Tasks', // Custom chart title
                    fontSize: 18,
                    fontColor: '#333',
                },
            },
        },
    });
});
