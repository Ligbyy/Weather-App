const APIKey = "cb1afb3a2eb8f1a1dcc55e23da0f2634";
            //const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=orlando&units=imperial";
            const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=orlando";


            async function getWeather(){
                const response = await fetch(apiURL + `&appid=${APIKey}`);
                var data = await response.json();

                console.log(data);
            }

            getWeather();