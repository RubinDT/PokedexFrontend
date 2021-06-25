import React from "react";

class PokeFrontEnd extends React.Component{
constructor(props) {
    super(props);
    this.state = {
        pokemonId:"",
        pokemonName:"",
        imageUrl:"",
        pokemonOrder:0
    }
}

handlePokemonNameInput(name){
    this.setState({
        pokemonName:name,
    })
}



lookupPokemonData(name){
    fetch("http://localhost:8080/getdata/"+this.state.pokemonName,
        {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        }).then(response=>{
            console.log(response)
        return response.json()
    }).then(data=>{
        console.log('Success:',data)
        this.setState({
            imageUrl:data.sprites.front_default
        })
    })

}



    render(){
        return(
            <div>
                <div>
                    <input type="text" onChange={(event) => {
                        this.handlePokemonNameInput(event.target.value)
                    }
                    }></input>
                </div>
                <div>
                    <button onClick={
                        () => {
                            //query the backend
                            this.lookupPokemonData(this.state.pokemonName)
                        }
                    }
                    >Click To Submit Pokemon Name
                    </button>
                </div>
                <div>
                    <div>That Pokemon Looks Like This:</div>
                    <img src = {
                        this.state.pokemonName && this.state.imageUrl}/>

                </div>
            </div>

        )
    }

}

export default PokeFrontEnd