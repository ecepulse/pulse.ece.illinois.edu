var pulsePoints = [[0,250], 
                   [50,250], 
                   [50,200], 
                   [60,190], 
                   [60,300], 
                   [70,310], 
                   [70,160], 
                   [80,150], 
                   [80,280], 
                   [90,270], 
                   [90,210], 
                   [100,220], 
                   [100,250], 
                   [500,250]];

function drawPolyline(points)
{
    var temp = [];
    var polylineHeight = $(window).height();
    var polylineWidth = $(window).width();
    var polyline = $('.polyline');
    var pulse = $('.pulse');
    var baselineHeight = 500;
    var baselineWidth = 500;

    polyline.height(polylineHeight);
    polyline.width(polylineWidth);

    var newPoints = "";
    var maxHeight = 0;

    for (var i = 0; i < points.length; i++)
    {
        var newPulseWidth = (points[i][0]/baselineWidth) * polylineWidth;
        var newPulseHeight = (points[i][1]/baselineHeight) * polylineHeight;
        
        if (polyline.height() - newPulseHeight > maxHeight) {
            maxHeight = polyline.height() - newPulseHeight;
        }
        
        temp.push([newPulseWidth, newPulseHeight]);
        
    }
    
    var heightDiff = polyline.height() - maxHeight;
    
    for (var i = 0; i < temp.length; i++) {
        newPoints += String(temp[i][0]) + "," + String(temp[i][1] - heightDiff) + " ";
    }
    
    polyline.height(maxHeight/2);
    
    pulse.attr('points', newPoints);
}

drawPolyline(pulsePoints);

$(window).on('resize', function() {
    drawPolyline(pulsePoints);
});