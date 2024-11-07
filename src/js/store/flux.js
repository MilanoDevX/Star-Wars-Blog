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
			characters: [],
			planets: [],
			vehicles: [],
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
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

			// obtaining characters
			getCharacters: async () => {
				const apiUrl = "https://www.swapi.tech/api/people"
				const resp = await fetch(apiUrl)
				const data = await resp.json()
				setStore({characters: data.results})
			},

			// obtaining planets
			getPlanets: async () => {
				const apiUrl = "https://www.swapi.tech/api/planets"
				const resp = await fetch(apiUrl)
				const data = await resp.json()
				setStore({planets: data.results})
			},

			// obtaining vehicles
			getVehicles: async () => {
				const apiUrl = "https://www.swapi.tech/api/vehicles"
				const resp = await fetch(apiUrl)
				const data = await resp.json()
				setStore({vehicles: data.results})
			},

			// adding to favorites
			addToFavorites: (item) => {
				const store = getStore();

				const searchItem = store.favorites.find( i => i.name == item.name )
				if(!searchItem){
					setStore({favorites: [ ...store.favorites, item ] })
				}
			}
		}
	};
};

export default getState;
