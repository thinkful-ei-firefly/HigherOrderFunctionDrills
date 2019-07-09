function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    return function(location) {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        if (warningCounter === 1) {
            console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`)
        }
        else {
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`)
    }}
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const tornadoWarning = hazardWarningCreator('Tornado Warning');
const earthquakeWarning = hazardWarningCreator('Earthquake Warning');

rocksWarning('1st Ave and Interstate 5');
rocksWarning('35th Ave and Interstate 5');
rocksWarning('21st Ave and 60th St');
tornadoWarning('14th and Delaware');
tornadoWarning('Interstate 80 between mile markers 300 and 305');
earthquakeWarning('San Fransisco Area');