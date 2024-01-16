import './Pokedex.css';

import Pokecard from "./Pokecard";

/** Component for Pokedex
 * Input Pokethings array [{ id, name, type, base_experience },...]
 * Return component JSX
 */

function Pokedex({ pokeThings }) {

  return (
    <div className="Pokedex">
      {pokeThings.map(p => <Pokecard pokeThing={p} />)}
    </div>
  );
}

export default Pokedex;
