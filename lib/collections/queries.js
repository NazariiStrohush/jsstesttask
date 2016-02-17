Queries = new Mongo.Collection('queries');

Meteor.methods({
  queryInsert: function(queryItem) {
    check(queryItem, {
    	query_text: String,
        latitude: Number,
        longitude: Number,
        distance: Number
    });
    var queryItem = _.extend(queryItem, {
      userId: Meteor.userId(),
      date: new Date()
    });
    Queries.insert(queryItem);
  },

  removeQuery: function(_id) {
    check(_id, String);
    if(ownsQuery)
      Queries.remove(_id);
  }
});

ownsQuery = function(userId, doc) {
  return doc && doc.userId === userId;
}