import character1 from "../../img/characters/characters-01-LukeTLJ.webp";
import character2 from "../../img/characters/characters-02-C-3PO_TLJ_Card_Trader_Award_Card.webp";
import character3 from "../../img/characters/characters-03-ArtooTFA2-Fathead.webp";
import character4 from "../../img/characters/characters-04-Darth_Vader.webp";
import character5 from "../../img/characters/characters-05-Leia_Organa_TLJ.webp";
import character6 from "../../img/characters/characters-06-OwenCardTrader.webp";
import character7 from "../../img/characters/characters-07-BeruCardTrader.webp";
import character8 from "../../img/characters/characters-08-R5-D4_Sideshow.webp";
import character9 from "../../img/characters/characters-09-BiggsHS-ANH.webp";
import character10 from "../../img/characters/characters-10-ObiWanHS-SWE.webp";

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
                1: character1,
                2: character2,
                3: character3,
                4: character4,
                5: character5,
                6: character6,
                7: character7,
                8: character8,
                9: character9,
                10: character10
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