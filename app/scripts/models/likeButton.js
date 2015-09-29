var LikeButton = Backbone.Model.extend({
  defaults: {
    likes: 0,
  },
  newLikes: function(newLikes) {
      this.set('likes', this.get('likes') + 1);
  }
});

module.exports = LikeButton;
