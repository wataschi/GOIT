function Calculator(inputId, outputId, clearButtonId) {
    this.classListener = document.querySelectorAll(inputId);
    this.outputBoxes = document.getElementsByClassName(outputId);
    this.clearButton = document.getElementById(clearButtonId);

    this.outputMonthValue = null;
    this.outputDayValue = null;
    this.outputAccumulate = null;
    const thet = this;

    this.init = function() {
        const clearFnBind = thet.clearFn.bind(Calculator);
        for (const item of thet.classListener) {
            item.addEventListener("input", () => {
                for (let index = 0; index < thet.classListener.length; index++) {
                    if (thet.classListener[index].value == undefined) {
                        thet.classListener[index].value = 0;
                    }
                }
                this.fnOutputMonth();
            });
            this.clearButton.addEventListener("click", clearFnBind);
        }
    };
    this.fnOutputMonth = function(e) {
        let incomeValue =
            Number(this.classListener[0].value) + Number(this.classListener[1].value) + Number(this.classListener[2].value);
        let costs =
            Number(this.classListener[3].value) + Number(this.classListener[4].value) + Number(this.classListener[5].value);
        let outputMonthValue = incomeValue - costs;
        this.outputBoxes[0].value = outputMonthValue;
        this.fnOutpustDay(outputMonthValue);
    };

    this.fnOutpustDay = function(outputMonthValue) {
        this.outputDayValue = outputMonthValue / 30;
        this.outputBoxes[1].value = this.outputDayValue;
        this.fnOutputAccumulate(outputMonthValue);
    };

    this.fnOutputAccumulate = function(outputMonthValue) {
        let outputAccumulate = outputMonthValue * 12;
        this.outputBoxes[2].value = outputAccumulate;
    };

    this.clearFn = function() {
        for (let a = 0; a < thet.outputBoxes.length; a++) {
            thet.outputBoxes[a].value = 0;
        }
        for (let b = 0; b < thet.classListener.length; b++) {
            thet.classListener[b].value = null;
        }
    };
};
var calculatorFactory = {
    createNewCalculator: function() {
        const newCalculator = new Calculator(inputId, outputId, clearButtonId);
        return newCalculator;
    }
}