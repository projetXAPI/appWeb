<script src="Charts.js"></script>

canvas1 = document.createElement(canvas);
canvas1.setAttribute("id","A");
canvas1.setAttribute("width","400");
canvas1.setAttribute("height","400");

canvas2 = document.createElement(canvas);
canvas2.setAttribute("id","B");
canvas2.setAttribute("width","400");
canvas2.setAttribute("height","400");

canvas3 = document.createElement(canvas);
canvas3.setAttribute("id","C");
canvas3.setAttribute("width","400");
canvas3.setAttribute("height","400");

canvas4 = document.createElement(canvas);
canvas4.setAttribute("id","D");
canvas4.setAttribute("width","400");
canvas4.setAttribute("height","400");

// Get the context of the canvas element we want to select
var ctx = document.getElementById("A").getContext("2d");
var chartA = new Chart(ctx).Bar(data);

var barData = {
    labels: ['Italy', 'UK', 'USA', 'Germany', 'France', 'Japan'],
    datasets: [
        {
            label: '2010 customers #',
            fillColor: '#382765',
            data: [2500, 1902, 1041, 610, 1245, 952]
        },
        {
            label: '2014 customers #',
            fillColor: '#7BC225',
            data: [3104, 1689, 1318, 589, 1199, 1436]
        }
    ]
};