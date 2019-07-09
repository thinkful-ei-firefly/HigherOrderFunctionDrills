function onlyPosMove(movements) {
    let x = movements.filter(movement => ((movement[1] >= 0) && movement[0] >= 0) );
    console.log(x);
}

function totalSteps(movements) {
    let total = 0;
    const x = movements.map(x => total += Math.abs(x[0]) + Math.abs(x[1]));
    console.log(x[movements.length - 1]);
}

function totalStepEach(movements) {
    let lTotal = 0;
    let fTotal = 0;
    movements.forEach(function(element) {
        lTotal += element[1];
        fTotal += element[0];
    }
    )
    console.log(`The total steps forward are ${fTotal}`);
    console.log(`The total steps left are ${lTotal}`);
}

let turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

onlyPosMove(turtleSteps);
totalSteps(turtleSteps);
totalStepEach(turtleSteps);