document.addEventListener('DOMContentLoaded', () => {
    const currentyear = document.querySelector('#currentyear');
    const today = new Date();

    currentyear.innerHTML = `&copy;<span class='highlight'>${today.getFullYear()} <br>Jerjes Mariluz Caciano </span>`;

    const lastModifiedDate = new Date(document.lastModified);
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    const formattedDate = lastModifiedDate.toLocaleString('en-US', options);
    document.getElementById("lastModified").textContent = `Last Modification: ${formattedDate}`;
});


// Selección de elementos por sus clases

const currentTemp = document.querySelector('.current-temp');
const weatherIcon = document.querySelector('.weather-icon');
const figCaption = document.querySelector('.weather-info figcaption');
const currentHigh = document.querySelector('.current-high');
const currentLow = document.querySelector('.current-low');
const currentHumidity = document.querySelector('.current-humidity');
const currentSunrise = document.querySelector('.current-sunrise');
const currentSunset = document.querySelector('.current-sunset');

const todayTemp = document.querySelector('.today-temp');
const tomorrowTemp = document.querySelector('.tomorrow-temp');
const afterTomorrowTemp = document.querySelector('.after-tomorrow-temp');

const todayHigh = document.querySelector('.today-temp-high');
const todayLow = document.querySelector('.today-temp-low');
const tomorrowHigh = document.querySelector('.tomorrow-temp-high');
const tomorrowLow = document.querySelector('.tomorrow-temp-low');
const afterTomorrowHigh = document.querySelector('.after-tomorrow-temp-high');
const afterTomorrowLow = document.querySelector('.after-tomorrow-temp-low');

// API key y coordenadas (puedes ajustar las coordenadas según tu ubicación)
const apiKey = 'ab57c9a1c16158bb10309ce9c90ea53f';  // Reemplaza con tu propia clave de API
const lat = 24.46;  // Latitud
const lon = 54.37;  // Longitud


const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

async function getCurrentWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (!response.ok) throw new Error('Error fetching weather data');

        const data = await response.json();
        console.log('Current Weather:', data);

        currentTemp.textContent = `${data.main.temp}°C`;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        figCaption.textContent = data.weather[0].description;
        currentHigh.textContent = `${data.main.temp_max}°C`;
        currentLow.textContent = `${data.main.temp_min}°C`;
        currentHumidity.textContent = `${data.main.humidity}%`;
        currentSunrise.textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        currentSunset.textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
    }
}


async function getForecastWeather() {
    try {
        const response = await fetch(forecastUrl);
        if (!response.ok) throw new Error('Error fetching forecast data');

        const data = await response.json();
        console.log('Forecast Weather:', data);

        const today = data.list[0];  
        const tomorrow = data.list[8];  
        const afterTomorrow = data.list[16];  
        
        todayTemp.textContent = `${today.main.temp}°C`;
        tomorrowTemp.textContent = `${tomorrow.main.temp}°C`;
        afterTomorrowTemp.textContent = `${afterTomorrow.main.temp}°C`;

        todayHigh.textContent = `${today.main.temp_max}°C`;
        todayLow.textContent = `${today.main.temp_min}°C`;

        tomorrowHigh.textContent = `${tomorrow.main.temp_max}°C`;
        tomorrowLow.textContent = `${tomorrow.main.temp_min}°C`;

        afterTomorrowHigh.textContent = `${afterTomorrow.main.temp_max}°C`;
        afterTomorrowLow.textContent = `${afterTomorrow.main.temp_min}°C`;
    } catch (error) {
        console.error('Failed to fetch forecast data:', error);
    }
}

getCurrentWeather();
getForecastWeather();

// Función para cargar el archivo JSON de los miembros
async function fetchMembersData() {
    try {
        const response = await fetch('data/members.json');  // Ruta al archivo JSON
        if (!response.ok) throw new Error('Error fetching member data');
        
        const data = await response.json();
        const members = data.members;

        // Filtrar miembros con nivel "Gold" (1) o "Silver" (2)
        const featuredMembers = members.filter(member => member.memberLevel === 1 || member.memberLevel === 2);

        // Llamar a la función para mostrar las tarjetas de miembros seleccionados
        showFeaturedMembers(featuredMembers);
    } catch (error) {
        console.error('Failed to fetch member data:', error);
    }
}

// Función para mostrar las tarjetas de los miembros seleccionados
function showFeaturedMembers(members) {
    const container = document.querySelector('.members-cards-container');
    container.innerHTML = '';  // Limpiar el contenedor antes de mostrar las tarjetas

    // Asegurarse de que se muestren 3 miembros
    const numMembers = 3;

    // Seleccionar los primeros 3 miembros, aleatoriamente si es necesario
    const randomMembers = [];
    while (randomMembers.length < numMembers) {
        const randomIndex = Math.floor(Math.random() * members.length);
        if (!randomMembers.includes(members[randomIndex])) {
            randomMembers.push(members[randomIndex]);
        }
    }

    // Mostrar las tarjetas en el contenedor
    randomMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML = `
        <h3 class="company-name">${member.name}</h3>
        <p class="phone">Phone: ${member.phoneNumber}</p>
        <p class="email">Email: ${member.email}</p>
        <p class="website"><a href="${member.website}" target="_blank">Visit Website</a></p>
        <img src="images/${member.image}" alt="${member.name}" width="200" height="auto" loading="lazy">
        `;
        container.appendChild(memberCard);
    });
}

// Llamada a la función para cargar y mostrar los miembros cuando la página se cargue
document.addEventListener('DOMContentLoaded', fetchMembersData);

const formattedDate = lastModifiedDate.toLocaleString('en-US', options);
    document.getElementById("lastModified").textContent = `Last Modification: ${formattedDate}`;

    const menuButton = document.querySelector('#menu');
    const nav = document.querySelector('#nav');
    
    menuButton.addEventListener('click', () => {
        nav.classList.toggle('open');
        menuButton.classList.toggle('open');
    });
