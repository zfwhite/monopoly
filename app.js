const express = require('express'),
      app = express(),
      board = require('./routes/board');

app.use(express.static(__dirname + '/public'));

// board.newBoard.board()
// console.log(board.newBoard.properties);

app.get('/start', function(req, res) {
  board.newBoard.board();
  res.send(board.newBoard.properties);
});

app.listen(3000);
