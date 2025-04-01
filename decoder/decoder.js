//the user input word is declared for js
let input1 = document.getElementById('word')
let button = document.getElementById('button')
let output = document.getElementById('codeOutput')

console.log("this is the button", button)

function encoder (){
    let value = input1.value;
    console.log("input is", value)
    let encodedValue = ""

    let len = value. length;
    console.log(len);

    
    for( let i = 0; i < 12; i ++ ){
        console.log("This letter is", value[i] )
        // encription algorithm
        // convert letters to numbers
        encodedValue += i;
    }
    output.innerHTML = encodedValue
}
