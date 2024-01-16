import './Pokedex.css';

import Pokecard from "./Pokecard";

/** Component for Pokedex
 * Input Pokethings array [{ id, name, type, base_experience },...]
 * Return component JSX
 */

function Pokedex({pokeThings}) {
  return (
    <div className="Pokedex">
      {pokeThings.map(p =>
        <Pokecard
          id={p.id}
          name={p.name}
          type={p.type}
          base_experience={p.base_experience}
        />)
      }
    </div>
  );
}

export default Pokedex;
