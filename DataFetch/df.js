// fetch = Functions used for making HTTP requests to fetch resourses.
//         (JSON style data,images , files)
//         Simplifies asynchronous  data fetching in javascript and 
//         used for interacting with APIs to retrived and send 
//         data asynchronously over the web.
//         fetch(url ,{optional})

        // fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        //         .then(response => response.json())
        //         .then(data => console.log(data.weight))
        //         .catch(error => console.error(error));


     async function fetchData() {
            try {
                const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                if (!response.ok) {
                    throw new Error("Could not fetch the resource");
                }
                const data = await response.json();
                
                 const sprite = data.sprites.front_default;
                 const spriteElement = document.getElementById("PokemonSprite");
                 spriteElement.src = sprite;
                 spriteElement.style.display = "block";
            } catch (error) {
                console.error(error.message);
            }
        }
        