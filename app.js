const express = require('express'),
      app = express(),
      board = require('./routes/board');

app.use(express.static(__dirname + '/public'));

board.newBoard.board();

app.listen(3000);
