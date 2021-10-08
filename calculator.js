function calculator(){
    let num1=Number(prompt("Enter your number 1:"));
    let num2=Number(prompt("Enter your number 2:"));
    document.getElementById("results") .innerHTML=`
    <p> ${num1} + ${num2} = ${num1+num2}</p>
    <p> ${num1} - ${num2} = ${num1-num2}</p>
    <p> ${num1} x ${num2} = ${num1*num2}</p>
    <p> ${num1} / ${num2} = ${num1/num2}</p>
    `

}