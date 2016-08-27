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
  this.properties = [];
  this.board = function() {
    var tileList = tileArray(tiles);
    for (let row = 0; row < 11; row++) {
      for (let column = 0; column < 11; column++) {
        const checkTile = 'tile' + row.toString() + column.toString();
        const position = [row, column];
        tileList.forEach(function(square) {
          if (square.tileId === checkTile) {
            self.properties.push(Property(position, square.value, square.name));
          }
        })
      }
    }
  }
}

const Property = (position, value, name) => ({
  tilePosition: position,
  tileOwner: '',
  tileName: name,
  tileValue: value,
  tileHouses: 0,
  tileHotel: false
});

export const newBoard = new Board();
