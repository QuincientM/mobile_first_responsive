//the user input word is declared for js
let input1 = document.getElementById('word')
let input2 = document.getElementById("num")
let button = document.getElementById('button')
let output = document.getElementById('code-output')

console.log("this is the button", button)

function encoder(){
    let value = input1.value;
    console.log("input is", value)
    let encodedValue = ""

    let len = value.length;
    console.log(len);

    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," "];
    

    for( let i = 0; i < len; i ++ ){
        console.log("This letter is", value[i])
        // encription algorithm
        // convert letters to numbers
        let result = alphabet.indexOf(value[i].toUpperCase())
        encodedValue += result + " ";
        console.log(encodedValue)
        
    }
    encodedValue = encodedValue.trim()
    output.innerHTML = encodedValue
    input2.value = encodedValue
}
function decoder(){
    let encodedMessage = input2.value
    console.log("number is", encodedMessage)
    let decodedValue = ""
    let encodedMessageAsArray = encodedMessage.split(" ")
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," "];

    for( let i in encodedMessageAsArray){
        let num = encodedMessageAsArray[i]
        console.log(num)
        let c = alphabet[num]
        console.log(c)
        decodedValue += c
        console.log(decodedValue)
    }
    input1.value = decodedValue
    output.innerHTML = decodedValue
}


    


