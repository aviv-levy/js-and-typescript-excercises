let runners = {
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

let betTitle = document.getElementById('betTitle') as HTMLElement;
const myRacers = Object["values"](runners);
let mybet: [HTMLElement, string] | null;

let reset = (): void => {
    mybet = null;
    betTitle.textContent = 'Set your bet';
    let racersZone = document.querySelectorAll('.racers') as NodeListOf<HTMLElement>;
    let bets = document.querySelectorAll('.bet-racers') as NodeListOf<HTMLElement>;

    bets[0].innerHTML = ``;
    racersZone[0].innerHTML = ``;

    for (let i = 0; i < myRacers.length; i++) {
        racersZone[0].innerHTML += `
        <div class='popup racer' style="background-image:url('myRacers/${myRacers[i].img}') ;"><span class="popuptext"">${myRacers[i].voice}</span></div>`;
        bets[0].innerHTML += `<div class='racerbet' style="background-image:url('myRacers/${myRacers[i].img}') ;"></div>`;
    }
    let racerbet = document.querySelectorAll('.racerbet') as NodeListOf<HTMLElement>;

    for (let i = 0; i < myRacers.length; i++) {
        racerbet[i].addEventListener('click', () => {
            removeActiveClasses(racerbet);
            mybet = [racerbet[i], myRacers[i].name];
            racerbet[i].classList.add("active");
        })
    }

    let removeActiveClasses = (racers: NodeListOf<HTMLElement>) => {
        racers.forEach((racer: HTMLElement) => {
            racer.classList.remove("active");
        })
    }
}


let setbet = (): void => {
    if (mybet === null)
        alert('Bet not selected!');
    else {
        let racerbet = document.querySelectorAll('.racerbet') as NodeListOf<HTMLElement>;
        for (let i = 0; i < myRacers.length; i++)
            racerbet[i] === mybet[0] ? mybet[0].style.borderColor = 'green' : racerbet[i].style.display = 'none'

        betTitle.textContent = `Your bet is: ${mybet[1]}`;
    }
}


let start = (): void => {
    if (mybet !== null) {
        let racers = document.querySelectorAll('.racer') as NodeListOf<HTMLElement>;
        let voices = document.querySelectorAll('.popuptext') as NodeListOf<HTMLElement>;
        for (let i = 0; i < racers.length; i++) {
            racers[i].style.translate = '90vw';
            racers[i].style.transitionDuration = `${20 - myRacers[i].step / 10}s`;
            racers[i].style.transitionTimingFunction = 'linear';
            if (myRacers[i].name === mybet[1]) {
                racers[i].style.transitionDelay = '1s';
                setTimeout(() => { voices[i].classList.toggle('show'); }, 1000)
            }
            else
                voices[i].classList.toggle('show');

        }

    }
    else
        alert('Bet not selected!');
}

reset();