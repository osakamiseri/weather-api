
//     APPID: 4b5774e9f3d2a07b84f0f2f88e486224q
// q: London
// "?q=London&appid=b5774e9f3d2a07b84f0f2f88e486224"
const weathrurl = 'https://api.openweathermap.org/data/2.5/weather?APPID=4b5774e9f3d2a07b84f0f2f88e486224&q=London';

fetch(weathrurl)
    .then((aaa) => {
        return aaa.json();
    })
    .then(json => {
        const text1 = document.getElementById("text1");
        text1.innerHTML = json.weather[0].description
        console.log(text1.innerHTML);
    })
