
let imageArray = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];

function randomImage1(imageArray)
{
    let randomNumber1 = Math.floor(Math.random()*imageArray.length);
    let randomImage1 = imageArray[randomNumber1];
    document.querySelector(".first-image img").src = randomImage1;
    return randomNumber1;
} 

function randomImage2(imageArray)
{
    let randomNumber2 = Math.floor(Math.random()*imageArray.length);
    let randomImage2 = imageArray[randomNumber2];
    document.querySelector(".second-image img").src = randomImage2;
    return randomNumber2;
} 

function checkWinner(randomNumber1,randomNumber2)
{
    
    if(randomNumber1>randomNumber2)
    {
        document.querySelector(".heading h1").innerHTML = "Player 1 Wins";
    }
    else if(randomNumber1<randomNumber2)
    {
        document.querySelector(".heading h1").innerHTML = "Player 2 Wins";
    }
    else if(randomNumber1==randomNumber2)
    {
        document.querySelector(".heading h1").innerHTML = "Draw";
    } 
    
}


document.querySelector(".footer button").addEventListener("click",function(){
    let number1 = randomImage1(imageArray);
    var audio = new Audio("sounds/dice-142528.mp3");
    audio.play();
    let number2 = randomImage2(imageArray);
    checkWinner(number1,number2);
})
