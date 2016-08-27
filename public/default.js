window.addEventListener('load', function(event) {
  const initialBoard = new XMLHttpRequest();
  initialBoard.open('GET', '/start');
  initialBoard.send();

  initialBoard.addEventListener('load', function(board) {
    var boardTiles = JSON.parse(board.currentTarget.response);
    console.log(boardTiles);
    for (let row = 0; row < 11; row++) {
      for (let column = 0; column < 11; column++) {
        var tileId = 'tile' + row.toString() + column.toString();
        var theTile = document.createElement('div');
        theTile.setAttribute('id', tileId);
        theTile.setAttribute('class', 'board');
        // for (tile in boardTiles) {
        //   if (square.tilePosition === checkTile) {
        //       var name = document.createElement('h2');
        //       name.textContent = square.tileName;
        //       theTile.appendChild(name);
        //     }
        // }
        boardTiles.forEach(function(square) {
          var checkTile = 'tile' + square.tilePosition.join('');
          if (tileId === checkTile) {
            var name = document.createElement('h4');
            name.textContent = square.tileName + square.tileValue;
            theTile.appendChild(name);
          }
        });
        document.getElementById('board').appendChild(theTile);
      }
    }
  })
})
