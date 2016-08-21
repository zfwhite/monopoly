var tiles = require('./tiles');

const Board = function() {
  const self = this;
  this.board = function() {
    for (let row = 0; row < 11; row++) {
      for (let column = 0; column < 11; column++) {
        const checkTile = 'tile' + row.toString() + column.toString();
        for (var tile in tiles) {
          console.log(tile);
        }
      }
    }
  }
}

const Property = (row, column) => ({
  tileOwner: '',
  tileName: '',
  tileValue: 0,
  tileHouses: 0,
  tileHotel: false
});
