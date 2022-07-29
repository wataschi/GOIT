const customCalculator = {
    buttonRes: document.getElementById("buttonRes"),
    outputBoxes: document.getElementsByClassName("outputboxes"),
    classListener: document.querySelectorAll("input"),
    clearButton: document.getElementById("clearButton"),

    outputMonthValue: null,
    outputDayValue: null,
    outputAccumulate: null,

    init: function() {
        let thet = this;
        let clearFnBind = this.clearFn.bind(customCalculator);
        this.clearButton.addEventListener("click", clearFnBind);
        for (const item of thet.classListener) {
            item.addEventListener("input", () => {
                for (let index = 0; index < thet.classListener.length; index++) {
                    if (thet.classListener[index].value == undefined) {
                        thet.classListener[index].value = 0;
                    }
                }
                this.fnOutputMonth();
            });
        }
    },
    fnOutputMonth: function(e) {
        let incomeValue =
            Number(this.classListener[0].value) + Number(this.classListener[1].value) + Number(this.classListener[2].value);
        let costs =
            Number(this.classListener[3].value) + Number(this.classListener[4].value) + Number(this.classListener[5].value);
        let outputMonthValue = incomeValue - costs;
        this.outputBoxes[0].value = outputMonthValue;
        this.fnOutpustDay(outputMonthValue);
    },
    fnOutpustDay: function(outputMonthValue) {
        this.outputDayValue = outputMonthValue / 30;
        this.outputBoxes[1].value = this.outputDayValue;
        this.fnOutputAccumulate.call(this, outputMonthValue);
    },
    fnOutputAccumulate: function(outputMonthValue) {
        let outputAccumulate = outputMonthValue * 12;
        this.outputBoxes[2].value = outputAccumulate;
    },
    clearFn: function() {
        for (let a = 0; a < this.outputBoxes.length; a++) {
            this.outputBoxes[a].value = 0;
        }
        for (let b = 0; b < this.classListener.length; b++) {
            this.classListener[b].value = null;
        }
    },
};