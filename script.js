var score=0;
const timerInfo=document.getElementById('timerinfo');
const resultInfo=document.getElementById('resultinfo');
const currentScore=document.getElementById('currentscore');
const selectedNumber=document.getElementById('selectednumber');
const radios =document.getElementsByClassName('radioinput');


for(radio in radios) {
    radios[radio].onclick = function() {
        selectedNumber.innerHTML=`Selected Number-${this.value}`;
    }
}




function Timer(seconds){
	for (let start=seconds;start>=1;start--){
			setTimeout(function(){timerInfo.innerHTML=`The Dice will shuffle in  ${seconds-start} seconds`;},start*1000);
	}
}



function check(){
	let randomnumber=Math.floor(Math.random() * 6) + 1;
	dice.roll(randomnumber);
	let Guess =document.querySelector('input[name="guess"]:checked');
	rolledDice=randomnumber.toString();
	if (Guess ===null){
		resultInfo.innerHTML="please choose any number!!";
		resultInfo.style.backgroundColor="yellow";
	}
	else{
	if (Guess.value===rolledDice){
		score++;
		resultInfo.innerHTML="Your Guess was Right!!";
		resultInfo.style.backgroundColor="green";
	}
	else{
		resultInfo.innerHTML="Your Guess was Wrong!!";
		resultInfo.style.backgroundColor="red";
	}
	Guess.checked=false;
	}
	currentscore.innerHTML=`Current Score-${score}`;
	selectedNumber.innerHTML=`Selected Number-~`;
}



function startgame(){
	document.getElementById('gamestartinfo').innerHTML="";
	setInterval(Timer,6000,6);
	setInterval(check,6000);
}

const dice={
	faces:document.getElementsByClassName("faces"),
	roll:function(num){
		for (i=0;i<6;i++){
			this.faces[i].style.display="none";
		}
		this.faces[num-1].style.display="flex";
	}
};


setTimeout(startgame,5000);
setTimeout(Timer,5000,6);

