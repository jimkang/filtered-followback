var quidprofollow = require('quidprofollow');
var twitterjerkdetector = require('twitterjerkdetector');
var Twit = require('twit');
var callNextTick = require('call-next-tick');

function filteredFollowback(opts, done) {
  var twitterCreds;
  var neverUnfollow;

  if (opts) {
    twitterCreds = opts.twitterCreds;
    neverUnfollow = opts.neverUnfollow;    
  }

  quidprofollow(
    {
      twitterAPIKeys: twitterCreds,
      followFilter: twitterjerkdetector.createFilter({
        twit: new Twit(twitterCreds)
      }),
      retainFilter: keepSpecialUsers
    },
    done
  );

  function idIsInSpecialUsers(id) {
    return neverUnfollow.indexOf(id) !== -1;
  }

  function keepSpecialUsers(userIds, done) {
    var retainUsers = userIds.filter(idIsInSpecialUsers);
    callNextTick(done, null, retainUsers);
  }
}

module.exports = filteredFollowback;
