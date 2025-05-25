
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
            planetImages: {
                1: "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png",
                2: "https://static.wikia.nocookie.net/starwars/images/4/4a/Alderaan.jpg",
                3: "https://static.wikia.nocookie.net/starwars/images/d/d4/Yavin-4-SWCT.png",
                4: "https://static.wikia.nocookie.net/starwars/images/1/1d/Hoth_SWCT.png",
                5: "https://static.wikia.nocookie.net/starwars/images/7/7d/Dagobah-CGSWG.png",
                6: "https://static.wikia.nocookie.net/starwars/images/1/11/Bespin-SWCT.png",
                7: "https://static.wikia.nocookie.net/starwars/images/1/1d/Endor_BF2.png",
                8: "https://static.wikia.nocookie.net/starwars/images/f/f0/Naboo_planet.png",
                9: "https://static.wikia.nocookie.net/starwars/images/8/84/CoruscantGlobeE1.png",
                10: "https://static.wikia.nocookie.net/starwars/images/5/52/Kamino-DB.png",
                11: "https://custom.swcombine.com/static/8/2323-large-1688480371.png",
                12: "https://static.wikia.nocookie.net/starwars/images/c/ce/UtapauRotS.png",
                13: "https://static.wikia.nocookie.net/starwars/images/6/61/Mustafar-TROSGG.png",
                14: "https://static.wikia.nocookie.net/esstarwars/images/d/d0/Kashyyyk_FFGRebellion.png",
                15: "https://static.wikia.nocookie.net/esstarwars/images/2/22/PolisMassaNEGAS.jpg",
                16: "https://static.wikia.nocookie.net/esstarwars/images/7/76/Mygeeto_TEA.jpg",
                17: "https://static.wikia.nocookie.net/esstarwars/images/a/a2/Felucia_SWCT.png",
                18: "https://static.wikia.nocookie.net/esstarwars/images/c/c7/Cato_Neimoidia_CotG.png",
                19: "https://static.wikia.nocookie.net/ptstarwars/images/7/75/Saleucami.jpg"
            },
            starshipImages: {
                2: "https://m.gadzetomania.pl/cc-3f5e9be6cec2aa45edf491d723c12,750,470,0,0.jpg",
                3: "https://i.pinimg.com/originals/f4/d9/7a/f4d97afd77c37ead846e8e8c9dc58bd3.jpg",
                5: "https://cdna.artstation.com/p/marketplace/presentation_assets/001/723/266/large/file.jpg",
                9: "https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg",
                10: "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/04/16/5ad4e8c370e68e282f66ed87_falcon.png",
                11: "https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg",
                12: "http://d6holocron.com/wiki/images/5/53/Xwingstarfighter.jpg",
                13: "https://cdnb.artstation.com/p/assets/images/images/028/086/799/4k/donny-versiga-sw-tie-advanced-01.jpg",
                15: "https://swrpggm.com/wp-content/uploads/2020/12/SSDFE.png",
                17: "http://pm1.aminoapps.com/6282/329621e82c6c85fbed51bb6ee117eca945d00d5a_00.jpg",
                21: "https://images.cults3d.com/1ncaqRgqlqPzYne6jkqI8IpCB8g=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/31765151/illustration-file/563ead8f-a321-4dde-bff6-8379d8997532/Slave_I.jpg",
                22: "https://lumiere-a.akamaihd.net/v1/images/veh_ia_1752_040381b2.jpeg",
                23: "https://i.namu.wiki/i/nJmdE4kIoL_kTvxApdA1uNG3dqt6ulmH2-GWeiG43_3L_8flzCmvpAmi1kALRShJ7zmwDZMjGp3Wd5DhLfDfmCO7blo0Ci-B2ROpLGo773qyXWlab667_SqNUx32NUH1t7vRoWZTbNYh-0G3O_mOs9r196Y0ONG8R8SxD-xTmEU.webp",
                27: "https://rpggamer.org/uploaded_images/Profundity_SWA.png",
                28: "https://lumiere-a.akamaihd.net/v1/images/screen_shot_2015-05-26_at_5_16a39e17.png",
                29: "https://lumiere-a.akamaihd.net/v1/images/databank_bwingfighter_01_169_460cc528.jpeg",
                31: "https://lumiere-a.akamaihd.net/v1/images/databank_republicattackcruiser_01_169_812f153d.jpeg",
                32: "https://i.pinimg.com/736x/9c/7a/02/9c7a02d817523f9d8461f03f61415efa--star-wars-tribute.jpg",
                39: "https://lumiere-a.akamaihd.net/v1/images/databank_naboon1starfighter_01_169_26691adf.jpeg",
                40: "https://lumiere-a.akamaihd.net/v1/images/databank_nabooroyalstarship_01_169_e61f677e.jpeg",
                41: "https://cdnb.artstation.com/p/assets/images/images/062/787/171/large/quentin-vautrin-sith-destructor-maul.jpg",
                43: "https://m.media-amazon.com/images/M/MV5BYjU4ZGNkNjMtYTBlZi00NDJhLTk2OGQtYjI5NGE2YWQxYjgyXkEyXkFqcGc@._V1_.jpg",
                47: "https://lumiere-a.akamaihd.net/v1/images/aa-9-coruscant-freighter_a856053d.jpeg",
                48: "https://lumiere-a.akamaihd.net/v1/images/delta-7-starfighter_fe9a59bc.jpeg"
            },
            vehicleImages: {
                4: "https://static.wikia.nocookie.net/starwars/images/f/ff/Sandcrawler.png",
                6: "https://www.starwars-holonet.com/holonet/dictionnaire/photos/ship_t16.jpg",
                7: "https://www.starwars-holonet.com/holonet/dictionnaire/photos/ship_x34.jpg",
                8: "https://cdnb.artstation.com/p/assets/images/images/002/479/549/large/bruno-parillo-screenshot089.jpg",
                14: "https://www.manualidadestrasgu.com/WebRoot/StoreES2/Shops/ec1273/6473/AD39/C1E6/1D72/806F/52DF/D016/BCDF/revell_03604_caja.jpg",
                16: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSfF-gh1Vub6uuX2vFuHnz6u0jZ3HCxi0riw&s",
                18: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1PlyXjdUF3fUuWFNyNBrHJL2nqCEm9EgNSA&s",
                19: "https://lumiere-a.akamaihd.net/v1/images/e6d_ia_5724_a150e6d4.jpeg?region=124%2C0%2C1424%2C802",
                20: "https://i.pinimg.com/736x/62/e0/0d/62e00d1f888409ac4582f93389444042.jpg",
                24: "https://static.wikia.nocookie.net/starwars/images/d/d4/Sailbarge-chron2.jpg",
                25: "https://lumiere-a.akamaihd.net/v1/images/skiff_9d81647a.jpeg",
                26: "https://lumiere-a.akamaihd.net/v1/images/tie-interceptor-2_b2250e79.jpeg",
                30: "https://lumiere-a.akamaihd.net/v1/images/74zbikehistory-2-retina_6fff502e.jpeg?region=0%2C0%2C1200%2C514",
                33: "https://lumiere-a.akamaihd.net/v1/images/databank_vulturedroid_01_169_6ef9fd50.jpeg?region=0%2C0%2C1560%2C878",
                34: "https://lumiere-a.akamaihd.net/v1/images/databank_mtt_01_169_efb8a98a.jpeg?region=0%2C0%2C1560%2C878",
                35: "https://lumiere-a.akamaihd.net/v1/images/databank_aatbattletank_01_169_9de46aea.jpeg",
                36: "https://lumiere-a.akamaihd.net/v1/images/databank_stap_01_169_75029522.jpeg",
                37: "https://i.imgur.com/lSkuQbN.jpeg",
                38: "https://lumiere-a.akamaihd.net/v1/images/databank_gunganbongosubmarine_01_169_fc9286be.jpeg",
                42: "https://www.kametoys.cl/wp-content/uploads/2019/01/star-wars-darth-maul-with-sith-speeder-sixth-scale-figure-hot-toys-feature-903737.jpg"
            }

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
            },

            //generate random color for border of cards
            randomColor: () => {
                const colorBase = "0123456789ABCDEF";
                let newColor = "#";
                for (let i = 0; i < 6; i++) {
                    newColor += colorBase[Math.floor(Math.random() * colorBase.length)];
                }
                return newColor;
            }
        }
    };
};

export default getState;