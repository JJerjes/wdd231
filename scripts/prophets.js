const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}
getProphetData(url);

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthdate = document.createElement('p');
        let place = document.createElement('p');
        let portrait = document.createElement('img');
         
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.textContent = `Date of Bith: ${prophet.birthdate}`;
        place.textContent = `Place of Birth: ${prophet.birthplace}`

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '300');
        portrait.setAttribute('height', '400');

        card.appendChild(fullName);
        card.appendChild(birthdate)
        card.appendChild(place);
        card.appendChild(portrait);

        cards.appendChild(card)
    })
}