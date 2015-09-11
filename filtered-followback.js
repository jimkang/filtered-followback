var quidprofollow = require('quidprofollow');
var twitterjerkdetector = require('twitterjerkdetector');
var Twit = require('twit');
var callNextTick = require('call-next-tick');

function filteredFollowback(opts, done) {
  var twitterCreds;
  var neverUnfollow;
  var blacklist;

  if (opts) {
    twitterCreds = opts.twitterCreds;
    neverUnfollow = opts.neverUnfollow;
    blacklist = opts.blacklist;
  }

  quidprofollow(
    {
      twitterAPIKeys: twitterCreds,
      followFilter: twitterjerkdetector.createFilter({
        twit: new Twit(twitterCreds),
        blacklist: blacklist
      }),
      retainFilter: keepSpecialUsers
    },
    done
  );

  function idIsInSpecialUsers(id) {
    return neverUnfollow.indexOf(id) !== -1;
  }

  function keepSpecialUsers(userIds, keepDone) {
    var retainUsers = userIds.filter(idIsInSpecialUsers);
    callNextTick(keepDone, null, retainUsers);
  }
}

module.exports = filteredFollowback;
