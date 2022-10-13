"use strict";
function checkWinner() {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
  } else {
    console.log(`koalas win (${avgKoalas} vs. ${avgDolhins})`);
  }
}
