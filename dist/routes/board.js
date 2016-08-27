'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tiles = require('./tiles');

function tileArray(list) {
  var usedTiles = [];
  for (var tile in tiles.tiles) {
    tiles.tiles[tile].tileId = tile;
    usedTiles.push(tiles.tiles[tile]);
  }
  return usedTiles;
}

var Board = function Board() {
  var self = this;
  this.properties = [];
  this.board = function () {
    var tileList = tileArray(tiles);
    for (var row = 0; row < 11; row++) {
      var _loop = function _loop(column) {
        var checkTile = 'tile' + row.toString() + column.toString();
        var position = [row, column];
        tileList.forEach(function (square) {
          if (square.tileId === checkTile) {
            self.properties.push(Property(position, square.value, square.name));
          }
        });
      };

      for (var column = 0; column < 11; column++) {
        _loop(column);
      }
    }
  };
};

var Property = function Property(position, value, name) {
  return {
    tilePosition: position,
    tileOwner: '',
    tileName: name,
    tileValue: value,
    tileHouses: 0,
    tileHotel: false
  };
};

var newBoard = exports.newBoard = new Board();