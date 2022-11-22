import { json_ar } from "./vipObj.js";

let disp = document.getElementById('root');

let myRiches = json_ar.map((rich) => disp.innerHTML += `<div class="rich-details"><div>Name: ${rich.name}</div>
                                                    <div>Worth: ${rich.worth}</div>
                                                    <div>Source: ${rich.source}</div>
                                                    <img src=${rich.image}>
                                                    </div>`

)

let riches = document.querySelectorAll('.rich-details');

riches.forEach((rich) => {
    rich.addEventListener('click', () => {
        rich.style.display = "none"
    })
})
