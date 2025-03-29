let age = document.getElementById('age')
let button = document.getElementById('button')
let codeOutput = document.getElementById("code-output")
function ageChecker(){
    let solution = ''
    let x = age.value
    let xNum = Number(x)
    //console.log(typeof xNum)

    if(xNum < 13){
        solution = 'You are to young'
        console.log('You are to young!')
    }
    else if(xNum > 18){
        solution = 'You are to old'
        console.log('Then you are too old')
    }
    else{
        solution = 'You are the right age'
        console.log('You are the right age')
    }

    codeOutput.innerHTML = solution

}


/*

this is a function definiton
function name (perams) {
    the action the function does
}
 this is how we do a function call
 we use the function name followed by ()
 name ()
*/


