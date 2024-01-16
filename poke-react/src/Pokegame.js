import Pokedex from './Pokedex';
import _ from "lodash";

/** Takes list of 8 pokemon and randomly assign them
 * into two hands of 4 cards each.
 *
 * Render two Pokedex components, one for each hand. */
function Pokegame( {pokeThings} ) {

  const [hand1, ...hand2]  = _.sampleSize(pokeThings, 4);

  return (
    <div className="Pokegame">
      {/* <Pokedex pokeThings={hand1} />
      <Pokedex pokeThings={hand2} /> */}
      <Pokedex pokeThings={pokeThings}/>
    </div>

  );

}

export default Pokegame;