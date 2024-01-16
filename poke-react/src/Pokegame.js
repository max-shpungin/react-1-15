import Pokedex from './Pokedex';
import _ from "lodash";

/** Takes list of 8 pokemon and randomly assign them
 * into two hands of 4 cards each.
 *
 * Render two Pokedex components, one for each hand. */
function Pokegame({pokeThings}) {

  const hand1  = _.sampleSize(pokeThings, 4);
  const hand2 = pokeThings.filter(p => !hand1.includes(p));

  return (
    <div className="Pokegame">
      <h1><b>Hand 1:</b></h1>
      <Pokedex pokeThings={hand1} />
      <h1><b>Hand 2:</b></h1>
      <Pokedex pokeThings={hand2} />
    </div>
  );

}

export default Pokegame;