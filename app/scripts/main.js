var LikeButton = require('models/likeButton');

var likeButton = new LikeButton();

likeButton.on('change', function(){
  if (likeButton.get('likes') === 1) {
    $('.button').text(likeButton.get('likes') + ' like');
  } else {
    $('.button').text(likeButton.get('likes') + ' likes');
  }
});

$(document).ready(function(){
  $('body').prepend(JST.application());
  $('.button').on('click', function(){
    likeButton.newLikes();
  });
});
