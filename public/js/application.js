(function(){
  var currentGame;

  var finishLine = function(gamewinner) {
      var data = {winner:gamewinner};
      var url = '/games/'+currentGame.game+'/results';
      console.log(url);
      console.log(currentGame)
      $.ajax({type:'post',
              url:url,
              data:data
            });
  }

  $(document).ready(function(){
    
    if (typeof gameId !== "undefined") {
      $.get('/games/'+gameId).done(function(response) {
        currentGame = response;
        console.log('response:', response);
      });
    }

    $(document).on('keyup', function(event){
      if (event.keyCode ===  65) {
        $('#player1_strip .active').removeClass('active').next().addClass('active');
        if ($('#player1_strip td:last-child').hasClass('active')) {
          var winner = currentGame.player1.player.username;
          finishLine(winner);
          setTimeout(window.location.replace('/'), 1000);
        }
      }  else if (event.keyCode ===  76) {
        $('#player2_strip .active').removeClass('active').next().addClass('active');
        if ($('#player2_strip td:last-child').hasClass('active')) {
          var winner = currentGame.player1.player.username;
          finishLine(winner);
          setTimeout(window.location.replace('/'), 1000);
        }
      } 
    });
  });
})();
