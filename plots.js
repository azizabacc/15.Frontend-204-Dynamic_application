
//Plot function 
export const plot = (dataX,dataY,div,color) =>{
    var trace = {
        x: dataX,
        y: dataY,
        mode: 'line',
  marker: {
      color: color,
      line: {
          width: 2.5
      }
  }
};
    var layout = { 
        title: 'Responsive to window\'s size!',
        font: {size: 18}
      };
var data = [ trace ];
var config = {responsive: true}
   Plotly.newPlot(div, data,layout,config,{scrollZoom: true},{editable: true});
}

