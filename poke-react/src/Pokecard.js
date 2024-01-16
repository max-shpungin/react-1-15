import './Pokecard.css';

const API_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

/** Component for Pokecard
 * Input Pokething obj { id, name, type, base_experience }
 * Return component JSX
 */

function Pokecard({ id, name, type, base_experience }) {

  return (
    <div className="Pokecard">
      <h1 className="Pokecard-name">{name}</h1>
      <img src={`${API_BASE_URL}${id}.png`}
        alt={`${name}`} />
      <h3>type: {type}</h3>
      <h3>EXP: {base_experience}</h3>
    </div>
  );
}

export default Pokecard;
