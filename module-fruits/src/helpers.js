"use strict";

/** chooses random item from array of items */
function choice(items){
  return (items[Math.floor(Math.random()*items.length)]);
}

/** removes the first matching item from items,
 * if item exists, and returns it.
 * Otherwise returns undefined. */

function remove(items, item){
  const itemIndex = items.indexOf(item);

  return items.splice(itemIndex,1);
}

export { choice, remove }