// Api key
const apiKey = 'e2e02177a03fb742930f74bc7e94f21d';
// Function for loading data from api
const loadData = async(cityName) => {
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        const data = await res.json();
        displayWeather(data);
    }
    catch(error) {
        console.log(error);
    }
}

// Function for calling to show weather info on ui
const displayWeather = (data) => {
    setInnerText('city', data.name);
    setInnerText('temperature', data.main.temp);
    setInnerText('condition', data.weather[0].main);
}

// Function for set weather info dynamically
const setInnerText = (id, text) => {
    const element = document.getElementById(id);
    element.innerText = `${text ? text : 'No data found'}`;
}

// Function for calling api function by passing city name dynamically
const processSearch = () => {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    searchField.value = '';
    loadData(city);
}

// Search button event handler
document.getElementById('btn-search').addEventListener('click', function(){
    processSearch();
})

// Enter key event handler
document.getElementById('search-field').addEventListener('keydown', function(event){
    const key = event.key;
    if(key === 'Enter') {
        processSearch();
    }
})