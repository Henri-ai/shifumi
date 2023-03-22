let userChoice;
let computerChoice;
let countUser=0;
let nbrParts=0;
let average=0;

//JE RECUP LES BUTTONS 
buttonRock=document.getElementById('rock');
buttonPaper=document.getElementById('paper');
buttonScissors=document.getElementById('scissors');
buttonReset=document.getElementById('buttonReset');
soundEquality=document.getElementById('soundEquality');
soundWin=document.getElementById('soundWin');
soundLoose=document.getElementById('soundLoose');

//LA FONCTION RESULTAT
function result (userChoice,computerChoice){
    // egalité
    if(userChoice==1 && computerChoice==1){
        document.getElementById('messageResult').innerHTML=`Égalité ! L'ordinateur a fait Pierre aussi !`;
        document.getElementById('messageResult').style.color='grey';
        soundEquality.play();
    }else if(userChoice==2 && computerChoice==2){
        document.getElementById('messageResult').innerHTML=`Égalité ! L'ordinateur a fait Feuille aussi !`;
        document.getElementById('messageResult').style.color='grey';
        soundEquality.play();
    }else if(userChoice==3 && computerChoice==3){
        document.getElementById('messageResult').innerHTML=`Égalité ! L'ordinateur a fait Ciseaux aussi !`;
        document.getElementById('messageResult').style.color='grey';
        soundEquality.play();
    // user win-----------------------------------------------
    }else if(userChoice==1 && computerChoice==3){
        document.getElementById('messageResult').innerHTML=`Gagné ! L'ordinateur a fait Ciseaux !`;
        document.getElementById('messageResult').style.color='green';
        document.getElementById('imgWin');
        document.getElementById('countUser').innerHTML++;
        soundWin.play();
        nbrParts++;
        countUser++;
        average=(countUser) / (nbrParts)*100;
        document.getElementById('average').innerHTML=parseInt(average);
    }else if (userChoice==2 && computerChoice==1){
        document.getElementById('messageResult').innerHTML=`Gagné ! L'ordinateur a fait Pierre !`;
        document.getElementById('messageResult').style.color='green';
        document.getElementById('countUser').innerHTML++;
        soundWin.play();
        nbrParts++;
        countUser++;
        average=(countUser) / (nbrParts)*100;
        document.getElementById('average').innerHTML=parseInt(average);
    }else if (userChoice==3 && computerChoice==2){
        document.getElementById('messageResult').innerHTML=`Gagné ! L'ordinateur a fait Feuille !`;
        document.getElementById('messageResult').style.color='green';
        document.getElementById('countUser').innerHTML++;
        soundWin.play();
        nbrParts++;
        countUser++;
        average=(countUser) / (nbrParts)*100;
        document.getElementById('average').innerHTML=parseInt(average);
    // user loose-----------------------------------------------
    }else if (userChoice==1 && computerChoice==2){
        document.getElementById('messageResult').innerHTML=`Perdu ! L'ordinateur a fait Feuille !`;
        document.getElementById('messageResult').style.color='red';
        document.getElementById('countComputeur').innerHTML++;
        soundLoose.play();
        nbrParts++
        average=(countUser) / (nbrParts)*100;
        document.getElementById('average').innerHTML=parseInt(average);
    }else if (userChoice==2 && computerChoice==3){
        document.getElementById('messageResult').innerHTML=`Perdu ! L'ordinateur a fait Ciseaux !`;
        document.getElementById('messageResult').style.color='red';
        document.getElementById('countComputeur').innerHTML++;
        soundLoose.play();
        nbrParts++;
        average=(countUser) / (nbrParts)*100;
        document.getElementById('average').innerHTML=parseInt(average);

    }else if (userChoice==3 && computerChoice==1){
        document.getElementById('messageResult').innerHTML=`Perdu ! L'ordinateur a fait Pierre !`;
        document.getElementById('messageResult').style.color='red';
        document.getElementById('countComputeur').innerHTML++;
        soundLoose.play();
        nbrParts++;
        average=(countUser) / (nbrParts)*100;
        document.getElementById('average').innerHTML=parseInt(average);
    }

}


//LA FONCTION CLICK PIERRE
buttonRock.addEventListener('click',event =>{
    userChoice=1;
    computerChoice = Math.floor(Math.random() * 3)+1 ;//<-- LE +1 POUR NE PAS COMMENCER A 0
    result(userChoice,computerChoice);//<-- J'APPEL LA FONCTION RESULTAT
})
//fonction click feuille
buttonPaper.addEventListener('click',event =>{
    userChoice=2;
    computerChoice = Math.floor(Math.random() * 3)+1 ;
    result(userChoice,computerChoice);
})
// fonction click ciseaux
buttonScissors.addEventListener('click',event =>{
    userChoice=3;
    computerChoice = Math.floor(Math.random() * 3)+1 ;
    result(userChoice,computerChoice);
})
// fonction reset
buttonReset.addEventListener('click',event =>{
        location.reload();
})















