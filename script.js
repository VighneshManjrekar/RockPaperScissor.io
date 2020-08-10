var uwin = 0;
    var cwin = 0;
    var r = document.getElementById('r').addEventListener('click', function () {
        newmove('r');
    });
    var p = document.getElementById('p').addEventListener('click', function () {
        newmove('p');
    });
    var s = document.getElementById('s').addEventListener('click', function () {
        newmove('s');
    });
    function newmove(uc) {
        console.log(uc);
    }

    function getcc() {
        const ch = ['r', 'p', 's'];
        var rancc = ch[Math.floor(Math.random() * 3)];
        return rancc;


    }
    function newmove(uc) {
        var cc = getcc();
        switch (uc + cc) {
            case 'rs':
            case 'pr':
            case 'sp':
                document.getElementById('result').innerHTML = 'User Wins';
                uwin++;
                break;
            case 'rp':
            case 'sr':
            case 'ps':
                document.getElementById('result').innerHTML = 'User Lose';
                cwin++;
                break;
            case 'rr':
            case 'pp':
            case 'ss':
                document.getElementById('result').innerHTML = 'User Draw';
                break;
        }
        console.log(cc);
        console.log(uc);
        document.getElementById('score').innerHTML = "User : " + uwin +"&nbsp;&nbsp;"+ " Comp : " + cwin;

        document.getElementById("user-image").src = "images/" + uc + ".png";
        document.getElementById("comp-image").src = "images/" + cc + ".png";
    }   