import './Pokecard.css';

// TODO: add /sprites/pokemon and concat
const API_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master';

/** Component for Pokecard
 * Input Pokething obj { id, name, type, base_experience } TODO: add more description to props (string, etc.)
 * Return component JSX
 */

//function Pokecard({ id, name, type, base_experience }) {
function Pokecard({ pokeThing }) {

  return (
    <div className="Pokecard">
      <h1 className="Pokecard-name">{pokeThing.name}</h1>
      <img src={`${API_BASE_URL}/sprites/pokemon/${pokeThing.id}.png`}
        alt={`${pokeThing.name}`} />
      <h3>type: {pokeThing.type}</h3>
      <h3>EXP: {pokeThing.base_experience}</h3>
    </div>
  );
}

export default Pokecard;
