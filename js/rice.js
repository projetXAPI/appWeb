var riceData = {
    labels : ["January","February","March","April","May","June"],
    datasets : [
        {
            fillColor : "rgba(172,194,132,0.4)",
            strokeColor : "#ACC26D",
            pointColor : "#fff",
            pointStrokeColor : "#9DB86D",
            data : [203000,15600,99000,25100,30500,24700]
        }
    ]
}

var rice = document.getElementById('rice').getContext('2d');
new Chart(rice).Line(riceData);