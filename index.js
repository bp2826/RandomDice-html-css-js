var d1 = Math.floor(Math.random()*6);
var d2 = Math.floor(Math.random()*6);

var imageArray = [];
imageArray.push('./images/dice1.png');
imageArray.push('./images/dice2.png');
imageArray.push('./images/dice3.png');
imageArray.push('./images/dice4.png');
imageArray.push('./images/dice5.png');
imageArray.push('./images/dice6.png');

document.querySelector(".img2").setAttribute('src', imageArray[d2]);
document.querySelector(".img1").setAttribute('src', imageArray[d1]);

if(d1>d2){
    document.querySelector('h1').innerHTML=("🚩Player 1 Wins!🚩");
}else if(d1<d2){
    document.querySelector('h1').innerHTML=("🚩Player 2 Wins!🚩");
}else {
    document.querySelector('h1').innerHTML=("🚩Draw🚩");
}
