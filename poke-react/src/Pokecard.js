import './Pokecard.css';

const API_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master';

/** Component for Pokecard
 * Input Pokething obj { id, name, type, base_experience }
 * Return component JSX
 */

function Pokecard({ pokeThing }) {
  return (<div className="Pokecard">
    <h1 class="Pokecard-Name">{pokeThing.name}</h1>
    <img src={`${API_BASE_URL}/sprites/pokemon/${pokeThing.id}.png`}
    alt="pokemon image"/>
    <h3>type: {pokeThing.type}</h3>
    <h3>EXP: {pokeThing.base_experience}</h3>
  </div>)
}

export default Pokecard;
