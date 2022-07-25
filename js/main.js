const buttonRes = document.getElementById('buttonRes');
const outputBoxes = document.getElementsByClassName('outputboxes');
const classListener = document.querySelectorAll('input');
const clearButton = document.getElementById('clearButton')


let outputMonthValue;
let outputDayValue;
let outputAccumulate;


const fnOutputMonth = () => {
    let incomeValue = Number(classListener[0].value) + Number(classListener[1].value) + Number(classListener[2].value);
    let costs = Number(classListener[3].value) + Number(classListener[4].value) + Number(classListener[5].value);
    outputMonthValue = incomeValue - costs;
    outputBoxes[0].value = outputMonthValue;
    fnOutputDay(outputMonthValue)
}

function fnOutputDay(outputMonthValue) {
    outputDayValue = outputMonthValue / 30
    outputBoxes[1].value = outputDayValue;
    fnOutputAccumulate(outputMonthValue)
}

function fnOutputAccumulate(outputDayValue) {
    outputAccumulate = outputDayValue * 12
    outputBoxes[2].value = outputAccumulate;
}

for (const item of classListener) {
    item.addEventListener('input', () => {
        for (let index = 0; index < classListener.length; index++) {
            if (classListener[index].value == undefined) {
                classListener[index].value = 0;
            }
        }
        fnOutputMonth();
    })
}
const clearFn = () => {
    for (let a = 0; a < outputBoxes.length; a++) {
        outputBoxes[a].value = 0
    }
    for (let b = 0; b < classListener.length; b++) {
        classListener[b].value = undefined

    }
}

clearButton.addEventListener('click', clearFn)