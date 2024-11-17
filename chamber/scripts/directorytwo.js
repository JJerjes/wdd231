const namesDiv = document.querySelector('#names');
const grid = document.querySelector('#grid');
const list = document.querySelector('#list');

async function fetchNamesData() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error('Wrong network response');
        }
        const data = await response.json();

        data.members.forEach((member) => {
            const memberDiv = document.createElement('div');
            memberDiv.classList.add('member-card');

            memberDiv.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phoneNumber}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
            <figure><img src="images/${member.image}" alt="${member.name}" width="200" height="auto"></figure>
            `;
            namesDiv.appendChild(memberDiv);
        });

        namesDiv.classList.add('grid');

    } catch (error) {
        console.error('problem in operation: ', error);
    }
};

grid.addEventListener('click', () => {
    namesDiv.classList.add("grid");
    namesDiv.classList.remove("list");
});

list.addEventListener('click', showList);

function showList() {
    namesDiv.classList.add("list");
    namesDiv.classList.remove("grid");
}

fetchNamesData();
