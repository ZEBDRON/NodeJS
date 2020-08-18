var rect = require('./rect');

function solve(l,b){
    console.log("Solving Peri & Area");
    if(l<=0 || b<=0){
        console.log("Not Solving Peri & Area");
    }
    else{
        console.log("Solving Peri "+ rect.perimeter(l,b));
        console.log("Solving  Area" + rect.area(l,b));
    }
}

solve(2,3);
solve(0,2);