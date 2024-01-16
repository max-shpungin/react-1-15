import './Pokecard.css';

// TODO: add /sprites/pokemon and concat
const API_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master';

/** Component for Pokecard
 * Input Pokething obj { id, name, type, base_experience } TODO: add more description to props (string, etc.)
 * Return component JSX
 */
// TODO: have input props be keys of obj instead of obj
function Pokecard({ pokeThing }) {
  //TODO: add pokemon name for alt text of image. Remove word "image"
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-name">{pokeThing.name}</h1>
      <img src={`${API_BASE_URL}/sprites/pokemon/${pokeThing.id}.png`}
        alt="pokemon image"/>
      <h3>type: {pokeThing.type}</h3>
      <h3>EXP: {pokeThing.base_experience}</h3>
    </div>
  );
}

export default Pokecard;
