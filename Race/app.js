var runners = {
    dog: {
        "name": "dog",
        "id": "dog",
        "voice": "woof",
        "img": "dog.gif",
        "step": 50
    },
    horse: {
        "name": "horse",
        "id": "horse",
        "voice": "neigh",
        "img": "horse.gif",
        "step": 70
    },
    duck: {
        "name": "duck",
        "id": "duck",
        "voice": "quack",
        "img": "duck.gif",
        "step": 40
    },
    chick: {
        "name": "chick",
        "id": "chick",
        "voice": "cheap",
        "img": "chick.gif",
        "step": 30
    }
};
var betTitle = document.getElementById('betTitle');
var myRacers = Object["values"](runners);
var mybet;
var reset = function () {
    mybet = null;
    betTitle.textContent = 'Set your bet';
    var racersZone = document.querySelectorAll('.racers');
    var bets = document.querySelectorAll('.bet-racers');
    bets[0].innerHTML = "";
    racersZone[0].innerHTML = "";
    for (var i = 0; i < myRacers.length; i++) {
        racersZone[0].innerHTML += "\n        <div class='popup racer' style=\"background-image:url('myRacers/".concat(myRacers[i].img, "') ;\"><span class=\"popuptext\"\">").concat(myRacers[i].voice, "</span></div>");
        bets[0].innerHTML += "<div class='racerbet' style=\"background-image:url('myRacers/".concat(myRacers[i].img, "') ;\"></div>");
    }
    var racerbet = document.querySelectorAll('.racerbet');
    var _loop_1 = function (i) {
        racerbet[i].addEventListener('click', function () {
            removeActiveClasses(racerbet);
            mybet = [racerbet[i], myRacers[i].name];
            racerbet[i].classList.add("active");
        });
    };
    for (var i = 0; i < myRacers.length; i++) {
        _loop_1(i);
    }
    var removeActiveClasses = function (racers) {
        racers.forEach(function (racer) {
            racer.classList.remove("active");
        });
    };
};
var setbet = function () {
    if (mybet === null)
        alert('Bet not selected!');
    else {
        var racerbet = document.querySelectorAll('.racerbet');
        for (var i = 0; i < myRacers.length; i++)
            racerbet[i] === mybet[0] ? mybet[0].style.borderColor = 'green' : racerbet[i].style.display = 'none';
        betTitle.textContent = "Your bet is: ".concat(mybet[1]);
    }
};
var start = function () {
    if (mybet !== null) {
        var racers = document.querySelectorAll('.racer');
        var voices_1 = document.querySelectorAll('.popuptext');
        var _loop_2 = function (i) {
            racers[i].style.translate = '90vw';
            racers[i].style.transitionDuration = "".concat(20 - myRacers[i].step / 10, "s");
            racers[i].style.transitionTimingFunction = 'linear';
            if (myRacers[i].name === mybet[1]) {
                racers[i].style.transitionDelay = '1s';
                setTimeout(function () { voices_1[i].classList.toggle('show'); }, 1000);
            }
            else
                voices_1[i].classList.toggle('show');
        };
        for (var i = 0; i < racers.length; i++) {
            _loop_2(i);
        }
    }
    else
        alert('Bet not selected!');
};
reset();
