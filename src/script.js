function buttonSound(){
    var buttonSounds = ['button1', 'button2', 'button3']
    const randombutton = buttonSounds[Math.floor(Math.random() * buttonSounds.length)];

    var audio = new Audio(`/sounds/${randombutton}.mp3`);
    audio.loop = false;
    audio.play();
}

function addToResultBox(value) {

    if (resultboxstring === '0') {
        resultboxstring = value;
        updateResultBox()
        return;
    }
    else if (resultboxstring.slice(-1) === '+' || resultboxstring.slice(-1) === '*' || resultboxstring.slice(-1) === '/' || resultboxstring.slice(-1) === '-' || resultboxstring.slice(-1) === '.') {
        if (value === '+' || value === '-' || value === '*' || value === '/' || value == '.') {
            resultboxstring = resultboxstring.slice(0, -1) + value;
            updateResultBox()
            return;
        }
        else {
            resultboxstring = resultboxstring.concat(value);
            updateResultBox()
        }
    }
    else if (resultboxstring.length === 14) {
        return;
    }
    else {
        resultboxstring = resultboxstring.concat(value);
        updateResultBox()
    }
}

function deleteLast(){

    if (resultboxstring.length === 1){
        resultboxstring = '0';
        updateResultBox();
        return;
    }
    resultboxstring = resultboxstring.substring(0, resultboxstring.length - 1);
    updateResultBox();
}

function clearResultBox() {

    resultboxstring = '0';
    resultbox.innerText = '0';
    updateResultBox();
}
function updateResultBox() {
    if (resultboxstring === ''){
        resultbox.innerText = '0';
    }

    resultbox.innerText = resultboxstring;
}
function getResult() {

    res = String(eval(resultboxstring));
    if (res.length > 14) {
        res = res.slice(0, 6)
    }
    resultboxstring = res;
    resultbox.innerText = res;
}

const resultbox = document.getElementById("resultbox");

// functions
const equals = document.getElementById("equals").addEventListener("click", getResult);
const clear = document.getElementById("clear").addEventListener("click", clearResultBox);
const back = document.getElementById("back").addEventListener("click", deleteLast)

var buttonNUMS = ["num0", "num1", "num2", "num3", "num4", "num5", "num6", "num7", "num8", "num9"];
var buttonOPERATIONS = [['minus', '-'], ['add', '+'], ['divide', '/'], ['times', '*'], ['point', '.']];

var resultboxstring = '0'

// add events to all numbers
for (let i = 0; i < buttonNUMS.length; i++) {
    num = document.getElementById(`${buttonNUMS[i]}`)
    num.addEventListener("click", function () { addToResultBox(`${i}`) })
}
// add events to all operators
for (let i = 0; i < buttonOPERATIONS.length; i++) {
    oper = document.getElementById(`${buttonOPERATIONS[i][0]}`)
    oper.addEventListener("click", function () { addToResultBox(`${buttonOPERATIONS[i][1]}`) })
}
