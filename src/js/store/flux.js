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
            filmImages: {
                1: "https://mentepost.com/wp-content/uploads/2017/04/04episodioStarwars.jpg",
                2: "https://mentepost.com/wp-content/uploads/2017/04/05episodioStarwars.jpg",
                3: "https://mentepost.com/wp-content/uploads/2017/04/06episodioStarwars.jpg",
                4: "https://mentepost.com/wp-content/uploads/2017/04/01episodioStarwars.jpg",
                5: "https://mentepost.com/wp-content/uploads/2017/04/02episodioStarwars.jpg",
                6: "https://mentepost.com/wp-content/uploads/2017/04/03episodioStarwars.jpg"
            },
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
                10: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
                11: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
                12: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
                13: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
                14: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
                15: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
                16: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
                17: "",
                18: "https://static.wikia.nocookie.net/starwars/images/5/51/Wedge_Antilles.jpg",
                19: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
                20: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
                21: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
                22: "https://vignette.wikia.nocookie.net/starwars/images/7/79/Boba_Fett_HS_Fathead.png",
                23: "https://vignette.wikia.nocookie.net/starwars/images/f/f2/IG-88.png",
                24: "https://vignette.wikia.nocookie.net/starwars/images/1/1d/Bossk.png",
                25: "https://vignette.wikia.nocookie.net/starwars/images/8/8f/Lando_ROTJ.png",
                26: "https://static.wikia.nocookie.net/starwars/images/7/72/Lobot-SWE.png",
                27: "https://vignette.wikia.nocookie.net/starwars/images/2/29/Admiral_Ackbar_RH.png",
                28: "https://static.wikia.nocookie.net/starwars/images/c/c8/MonMothma-RotJAVA.png",
                29: "https://vignette.wikia.nocookie.net/starwars/images/d/de/Arvel-crynyd.jpg",
                30: "https://vignette.wikia.nocookie.net/starwars/images/4/4f/Wicket_RotJ.png",
                31: "https://vignette.wikia.nocookie.net/starwars/images/1/14/Old_nien_nunb_-_profile.png",
                32: "https://vignette.wikia.nocookie.net/starwars/images/f/f6/Qui-Gon_Jinn_Headshot_TPM.jpg",
                33: "https://vignette.wikia.nocookie.net/starwars/images/f/fd/Nute_Gunray_SWE.png",
                34: "https://vignette.wikia.nocookie.net/starwars/images/5/51/ValorumPortrait-SWE.png",
                35: "https://vignette.wikia.nocookie.net/starwars/images/b/b2/Padmegreenscrshot.jpg",
                36: "https://vignette.wikia.nocookie.net/starwars/images/d/d2/Jar_Jar_aotc.jpg",
                37: "https://static.wikia.nocookie.net/starwars/images/a/a5/CaptainTarpals-BaseSeries5.png",
                38: "https://static.wikia.nocookie.net/starwars/images/6/63/BossNass-SWCT.png",
                39: "https://vignette.wikia.nocookie.net/starwars/images/4/4c/RicOlieHS-SWE.png",
                40: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/WattoHS.jpg",
                41: "https://vignette.wikia.nocookie.net/starwars/images/1/14/Sebulba_Headshot_Closeup.png",
                42: "https://vignette.wikia.nocookie.net/starwars/images/7/72/PanakaHS-TPM.png",
                43: "https://static.wikia.nocookie.net/starwars/images/6/6c/ShmiSkywalkerLars-Databank.jpg",
                44: "https://vignette.wikia.nocookie.net/starwars/images/5/50/Darth_Maul_profile.png",
                45: "https://vignette.wikia.nocookie.net/starwars/images/3/33/BibFortunaHS-ROTJ.png",
                46: "https://vignette.wikia.nocookie.net/starwars/images/f/f9/Aayla.jpg",
                47: "https://static.wikia.nocookie.net/starwars/images/a/a5/RattsHS-SWE.png",
                48: "https://vignette.wikia.nocookie.net/starwars/images/7/73/Dud_Bolt_Podracer_Cockpit.png",
                49: "https://static.wikia.nocookie.net/starwars/images/a/a4/GasganoHS-SWE.png",
                50: "https://static.wikia.nocookie.net/starwars/images/7/77/BenQuadinaros-CGSWG.png",
                51: "https://static.wikia.nocookie.net/starwars/images/2/27/MaceWindu_-WoSW.png",
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