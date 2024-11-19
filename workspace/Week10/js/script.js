
var miles;

do{
    
miles = parseInt(prompt("Enter miles driven"));

} while(isNaN(miles) || miles<0);

var gallons;

do{
    
    gallons = parseInt(prompt("Enter gallons driven"));
    
    } while(isNaN(gallons) || gallons<0);

document.write(`<p> The miles per gallon are: </p> ${miles/gallons}`)

function $() {
    
}