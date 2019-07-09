function reduce(input) {
    let coded = [];
    let thisArray = input.toUpperCase();
    let toCode = thisArray.split(" ");
    for (let i = 0; i < toCode.length; i++) {
        if (toCode[i].length === 3) {
            coded.push(" ");
        }
        else {
            let l = toCode[i].length - 1;
            let importantChar = toCode[i].charAt(l);
            coded.push(importantChar);
        }
    }
    let exit = coded.toString();
    for (i= 0; i < exit.length; i++) {
    exit = exit.replace(",","");}
    console.log(exit);

}

let myCode = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'
reduce(myCode);