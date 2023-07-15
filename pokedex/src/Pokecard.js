import './Pokecard.css'



const URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

const Pokecard = (props) => {
    let imgSrc =`${URL}${props.id}.png`
    return (
        <div className="pokecard">
            <h1 className="pokecard-title">{props.name}</h1>
            <img className="pokeimg" src={imgSrc} />
            <p>Type: {props.type}<br />
            EXP: {props.base_experience}</p>
        </div>
    )
}

export default Pokecard