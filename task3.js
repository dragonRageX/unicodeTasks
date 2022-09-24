// let countryName = document.querySelector(".country-name");
// let cases = document.querySelector(".cases");
// let deaths = document.querySelector(".deaths");

let countryNameData = document.querySelector(".country-name-data");
let casesData = document.querySelector(".cases-data");
let deathsData = document.querySelector(".deaths-data");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '40e36029camsh5a43d6340de1d23p188b54jsn95a2c638f237',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};

// TO GET DATA FROM THE RESOURCE - GET REQUEST
fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const nameOfFirstCountry = data.countries_stat[0].country_name;
        console.log(nameOfFirstCountry);
        const totalCases = data.world_total.total_cases;
        console.log(totalCases);
        // const sortedData = data.countries_stat.sortBy("cases");
        // for(let i = 0; i < data.countries_stat.length; i++)
        // {
        //   data.countries_stat[i].cases = parseFloat(data.countries_stat[i].cases.replace(/,/g, ''));
        // }
        // console.log(data.countries_stat);
        // const sortedData = data.countries_stat.sort((a, b) => (a.cases).localeCompare(b.cases));
        // const sortedData = data.countries_stat.sortBy("cases");
        // console.log(sortedData);
        let tableData;
        data.countries_stat.map(object => {
          tableData += `<tr>
          <td class = "country-name-data">${object.country_name}</td>
          <td class = "cases-data">${object.cases}</td>
          <td class = "deaths-data">${object.deaths}</td>
       </tr>`;
        })
        let tableBody = document.querySelector(".table-body");
        tableBody.innerHTML = tableData

        const button = document.querySelector(".button");
        const display = document.querySelector(".name");
        function randomFactsGenerator()
        {
          let randomNumber = Math.random() * data.countries_stat.length;
          let randomInteger = Math.floor(randomNumber);
          let countryName = data.countries_stat[randomInteger].country_name;
          let cases = data.countries_stat[randomInteger].cases;
          let deaths = data.countries_stat[randomInteger].deaths;
          display.innerHTML = "Country: " + countryName + "; Cases: " + cases + "; Deaths: " + deaths;
        }
        button.addEventListener("click", randomFactsGenerator);
        
    })
    .catch(err => console.error(err));
    
