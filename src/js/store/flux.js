import starship2 from "../../img/starships/starship-02-CR90-Corvette.webp";
import starship3 from "../../img/starships/starship-03-Star-Destroyer.webp";
import starship5 from "../../img/starships/starship-05-SentinelClassLandingCraft.webp";
import starship9 from "../../img/starships/starship-09-DeathStar1.webp";
import starship11 from "../../img/starships/starship-11-Ywing.webp";


const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            films: [],
            characters: [],
            planets: [],
            starships: [],
            vehicles: [],
            favorites: [],
            characterImages: {
                1: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
                2: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
                3: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
                4: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
                5: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
                6: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
                7: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
                8: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
                9: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
                10: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg"
            },
            starshipImages: {
                1: "",
                2: starship2,
                3: starship3,
                4: "",
                5: starship5,
                6: "",
                7: "",
                8: "",
                9: starship9,
                10: "",
                11: starship11,
            },

        },
        actions: {
            // Use getActions to call a function within a function
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                /**
                    fetch().then().then(data => setStore({ "foo": data.bar }))
                */
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({ demo: demo });
            },

            // obtaining films
            getFilms: async () => {
                const apiUrl = "https://www.swapi.tech/api/films/";
                try {
                    const resp = await fetch(apiUrl);
                    const data = await resp.json();
                    setStore({ films: data.result });
                } catch (error) {
                    console.error("Error fetching films:", error);
                }
            },

            // obtaining characters
            getCharacters: async () => {
                const apiUrl = "https://www.swapi.tech/api/people?page=1&limit=50";
                try {
                    const resp = await fetch(apiUrl);
                    const data = await resp.json();
                    setStore({ characters: data.results });
                } catch (error) {
                    console.error("Error fetching characters:", error);
                }
            },

            // obtaining planets
            getPlanets: async () => {
                const apiUrl = "https://www.swapi.tech/api/planets?page=1&limit=19";
                try {
                    const resp = await fetch(apiUrl);
                    const data = await resp.json();
                    setStore({ planets: data.results });
                } catch (error) {
                    console.error("Error fetching planets:", error);
                }
            },

            // obtaining starships
            getStarships: async () => {
                const apiUrl = "https://www.swapi.tech/api/starships?page=1&limit=24";
                try {
                    const resp = await fetch(apiUrl);
                    const data = await resp.json();
                    setStore({ starships: data.results });
                } catch (error) {
                    console.error("Error fetching starships:", error);
                }
            },

            // obtaining vehicles
            getVehicles: async () => {
                const apiUrl = "https://www.swapi.tech/api/vehicles?page=1&limit=20";
                try {
                    const resp = await fetch(apiUrl);
                    const data = await resp.json();
                    setStore({ vehicles: data.results });
                } catch (error) {
                    console.error("Error fetching vehicles:", error);
                }
            },

            // adding to favorites
            addToFavorites: (item) => {
                const store = getStore();

                const searchItem = store.favorites.find(fav => fav.name == item.name);
                if (!searchItem) {
                    setStore({ favorites: [...store.favorites, item] });
                }
            },

            // deleting favorites
            removeFavorite: (item) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter(fav => fav.name !== item);
                setStore({ favorites: updatedFavorites });
            }
        }
    };
};

export default getState;