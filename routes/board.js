const tiles = require('./tiles');


function tileArray(list) {
  var usedTiles = [];
  for (var tile in tiles.tiles) {
    tiles.tiles[tile].tileId = tile;
    usedTiles.push(tiles.tiles[tile]);
  }
  return usedTiles;
}

const Board = function() {
  const self = this;
  this.board = function() {
    var tileList = tileArray(tiles);
    console.log(tileList);
    for (let row = 0; row < 11; row++) {
      for (let column = 0; column < 11; column++) {
        const checkTile = 'tile' + row.toString() + column.toString();
        if (tileList.indexOf(checkTile) > -1) {
          console.log(checkTile);
        }
      }
    }
    // console.log(tileArray(tiles));
  }
}

const Property = (row, column) => ({
  tileOwner: '',
  tileName: '',
  tileValue: 0,
  tileHouses: 0,
  tileHotel: false
});

export const newBoard = new Board();
