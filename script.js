var cwin = 0;
var uwin = 0;
function ch(uc){
    var uc = uc.value;
    console.log(uc);
    var cc = rancc();    
    console.log(cc);
    
    if(uc=='r' && cc=='s' || uc=='p' && cc=='r' || uc=='s' && cc=='p' ){
        document.getElementById('result').innerText ='You Won';
        win()
;        
    }else if(uc==cc){
        document.getElementById('result').innerText ='Draw';
    }else{
        document.getElementById('result').innerText ='You lost';
        lose();
    }
    document.getElementById('user-choice').src="images/"+uc+".png";
    document.getElementById('comp-choice').src="images/"+cc+".png";
    document.getElementById('score').innerHTML = "USer : " +uwin + "&nbsp;&nbsp; " + "Comp : " + cwin;
}

function win(){
    uwin++;
}

function lose(){
    cwin++;
}

function rancc(){
     var choice = ['r','p','s','r','p','s'];
     var compc = choice[Math.floor(Math.random()*6)];
     return compc;
}
