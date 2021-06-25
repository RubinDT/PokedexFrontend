import React from 'react';


class PokeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "no pokemon entered",
            pokeJSON: {},
            images: {},
        }

    }


    handlePokeName(pokemonName) {
        this.setState({
            pokemonName: pokemonName,
        })
    }

    getPokeData(name) {
        let pokeURL = "empty"
        let tempObj = {}
        let imageObj = {}
        if (this.state.name !== "no pokemon entered") {
            pokeURL = "https://pokeapi.co/api/v2/pokemon/" + this.state.name
            fetch(pokeURL).then(response => response.json()).then(data => {
                console.log(data.sprites)
                this.setState({
                    pokeJSON: data,
                    images: data.sprites,
                })
            })

        }

    }

    render() {

        return (<div>
                <div>
                    <input type="text" onChange={(event) => {
                        this.handlePokeName(event.target.value)
                    }
                    }></input>
                </div>
                <div>
                    <button onClick={
                        () => {
                            //query the api
                            this.getPokeData(this.state.name)
                        }
                    }
                    >Click To Display Poke-Images!
                    </button>
                </div>
                <div>
                    <img src={this.state.images.front_default}/>
                </div>
            </div>
        )
    }
}


export default PokeInput