const buttonRes = document.getElementById('buttonRes');
const outputBoxes = document.getElementsByClassName('outputboxes');
const classListener = document.querySelectorAll('input');



let outputMonthValue = 0;
let outputDayValue = 0;
let outputAccumulate = 0;

const fnOutputMonth = () => {
    const incomeValue = Number(classListener[0].value) + Number(classListener[1].value) + Number(classListener[2].value);
    const costs = Number(classListener[3].value) + Number(classListener[4].value) + Number(classListener[5].value);
    outputMonthValue = incomeValue - costs;
    outputBoxes[0].value = outputMonthValue;
    fnOutputDay(outputMonthValue)
}

function fnOutputDay(OutputMonthValue) {
    const OutputDayValue = OutputMonthValue / 30
    outputBoxes[1].value = OutputDayValue;
    fnOutputAccumulate(OutputMonthValue)

}

function fnOutputAccumulate(OutputDayValue) {
    const OutputAccumulate = OutputDayValue * 12
    outputBoxes[2].value = OutputAccumulate;
}

for (const item of classListener) {
    item.addEventListener('input', () => {
        for (let index = 0; index < classListener.length; index++) {
            if (classListener[index].value == undefined) {
                classListener[index].value = 0;
            }
        }
        fnOutputMonth()
    })
}