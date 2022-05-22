

function createChart(){
    var canvas = document.querySelector("#stats").getContext("2d");
    var xValues = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    var yValues = [55, 49, 44, 24, 15]; //percentage of attendance
    var barColors = ["red", "green","rgb(56, 204, 119)","orange","brown"];

    new Chart(canvas, {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            legend: {display: false},
            title: {
                display: true,
                text: "Attendance Statistics"
            }
        }
    });
}


createChart();
