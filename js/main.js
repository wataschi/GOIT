
inputOneId = 'inputOne'
inputTwoId = 'inputTwo'
buttonResId = 'buttonRes'
outputResId = 'outputRes'
inputOne= document.getElementById(inputOneId)
inputTwo= document.getElementById(inputTwoId)
buttonRes= document.getElementById(buttonResId)
outputRes= document.getElementById(outputResId)

const inputValue = (e) =>{
    inputOneValue = inputOne.value;
    inputTwoValue =inputTwo.value;
}

const sFn = (e) =>{
    inputValue();
    outputRes.value =(Number(inputOneValue)+Number(inputTwoValue))
}
const nFn = (e) =>{
    inputValue();
    outputRes.value =(Number(inputOneValue)-Number(inputTwoValue))
}
const mFn = (e) =>{
    inputValue();
    outputRes.value =(Number(inputOneValue)*Number(inputTwoValue))
}
const dFn = (e) =>{
    inputValue();
    if ( Number(inputTwoValue)===0 || inputOneValue === undefined ){
        outputRes.value= 'Bad input!'
    }
    else{ outputRes.value =(Number(inputOneValue)/Number(inputTwoValue))}
}



buttonS.addEventListener("click", sFn);
buttonN.addEventListener("click", nFn);
buttonM.addEventListener("click", mFn);
buttonD.addEventListener("click", dFn);