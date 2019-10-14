d3.csv("p3.graphFXD.csv").then(function(data) {
    
    data.forEach(function(d) {
        d.ScreenX = +d.ScreenX; //You need to use this 
        d.ScreenY = +d.ScreenY;
        d.Duration = +d.Duration;
        d.Time = +d.Time;
    });


   
                
    
    var bar2 = barInfo.append("rect")
                 .attr("x", "0")
                 .attr("y", "405")
                 .attr('width', '640')
                 .attr('height', '615')
                 .attr('fill', 'rgba(0,0,0,0)')
                 .attr('stroke', 'red')
                 .attr('stroke-width', '5')
    
    var bar2 = barInfo.append("rect")
                 .attr("x", "640")
                 .attr("y", "405")
                 .attr('width', '640')
                 .attr('height', '615')
                 .attr('fill', 'rgba(0,0,0,0)')
                 .attr('stroke', 'green')
                 .attr('stroke-width', '5')

    var bar3 = barInfo.append("rect")   
                 .attr("x", "0")
                 .attr("y", "5")
                 .attr('width', '1280')
                 .attr('height', '395')
                 .attr('fill', 'rgba(0,0,0,0)')
                 .attr('stroke', 'blue')
                 .attr('stroke-width', '5')
        
    ///////////////////////////////////////////////////////////////////////////
                 var width = 1280;
                 var height = 1024;
             
             
             var data = [0, 150, 200, 250, 1280];
             var data1 = [0, 150, 200, 250, 1024];
             
             // Append SVG 
             var svg = d3.select("body").select("svg")
                         
             
             // Create scale
             var scale = d3.scaleLinear()
                           .domain([d3.min(data), d3.max(data)])
                           .range([0, width - 0]);
             
             var scale1 = d3.scaleLinear()
                            .domain([d3.min(data1), d3.max(data1)])
                            .range([height/2, 0]);
                           
             
             // Add scales to axis
             var x_axis = d3.axisBottom()
                            .scale(scale);
             
             var y_axis = d3.axisRight()
                             .scale(scale);
             //Append group and insert axis
             svg.append("g")
                .call(x_axis)
                .style("font-size", "20px")
               
             svg.append("g")
                .style("font-size", "20px")
                .attr("transform", "translate(10,10")
                .call(y_axis);

/////////////////////////////////////////////////////////////////////////
var barInfo = d3.select("svg") //To add the quads 
var bar1 = barInfo.append("rect") //Creates first rectangle 

var fixPoints = d3.select("svg")
    .selectAll("g")
        .data(data)
        .enter()  //Will do a check if group variables are not created 
        .append("g") //Will add them to a group once they are used with enter 
            .attr("class", "bar1Data") ///Have a funciton here that places them into the boxes?????

fixPoints.append("circle")
    .attr("cx", function(d) { return d.ScreenX;})
    .attr("cy", function(d) { return d.ScreenY;})
    .attr("r", function(d){
        if(d.Duration < 100) {
            return 5;
        }
        else if(d.Duration < 300 && d.Duration > 100){
            return 5;
        }
        else if(d.Duration < 500 && d.Duration > 300){
            return 5;
        }
        else if(d.Duration < 700 && d.Duration > 500)
        {
            return 5;
        }
        else if(d.Duration < 1000 && d.Duration > 700)
        {
            return 5;
        }
        else if(d.Duration < 2000 && d.Duration > 1000)
        {
            return 5;
        }
        else {
            return 5;
        }
    });
fixPoints.attr("fill", function(d){
            if(d.Duration < 100) {
                return "yellow";
            }
            else if(d.Duration < 300 && d.Duration > 100){
                return "yellow";
            }
            else if(d.Duration < 500 && d.Duration > 300){
                return "yellow";
            }
            else if(d.Duration < 700 && d.Duration > 500)
            {
                return "yellow";
            }
            else if(d.Duration < 1000 && d.Duration > 700)
            {
                return "yellow";
            }
            else
            {
                return "yellow";
            }
            
        });

         
});

