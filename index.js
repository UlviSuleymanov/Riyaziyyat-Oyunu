const num1= document.getElementById('number1')
const num2= document.getElementById('number2');
const operator= document.getElementById('operator');
const result= document.getElementById('result');
let answer= document.getElementById('answer');
let True= document.getElementById('True');
let False= document.getElementById('False');

//Random number funksiyasi.
function randomNumber(min,max){
    let number= Math.floor(Math.random()*(max-min)+min);
    return number;
}
//Oyun Baslayanda ve ya cavab dogru ve ya sehf verildikde isleyen funksiya
function newGame(){
    const operation=["+","-","*","/"];
    operator.textContent=operation[randomNumber(0,4)];
    num1.textContent=randomNumber(0,50);
    num2.textContent=randomNumber(0,50);   
    if(operator.textContent=="/"){
        while (true){
            num2.textContent=randomNumber(0,50);
            if(num1.textContent%num2.textContent==0){
                break;
            }
        }
    }    
    
}

window.onload=function(){
    newGame()
}

answer.onclick=function(){
    let ans;
    let n1;
    let n2;
    n1=Number(num1.textContent);
    n2=Number(num2.textContent);
    switch(operator.textContent){
        case "+":ans=n1+n2;break
        case "-":ans=n1-n2;break
        case "*":ans=n1*n2;break
        case "/":ans=n1/n2;break
        default:break;
    }
    if(result.value == ans){
        True.textContent=Number(True.textContent)+1;
    }else{
        False.textContent=Number(False.textContent)+1;
    }
    newGame();

}
