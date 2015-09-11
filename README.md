filtered-followback
==================

Given Twitter credentials, make follower and followee lists match by following and unfollowing (via [quidprofollow](https://github.com/jimkang/quidprofollow)), while taking care to not follow probable spam accounts (via [twitterjerkdetector](https://github.com/jimkang/twitterjerkdetector)).

Installation
------------

    npm install filtered-followback

Usage
-----

    var filteredFollowback = require('filtered-followback');
    filteredFollowback(
      {
        twitterCreds: {
          consumer_key: 'asdfkljqwerjasdfalpsdfjas',
          consumer_secret: 'asdfasdjfbkjqwhbefubvskjhfbgasdjfhgaksjdhfgaksdxvc',
          access_token: '9999999999-zxcvkljhpoiuqwerkjhmnb,mnzxcvasdklfhwer',
          access_token_secret: 'opoijkljsadfbzxcnvkmokwertlknfgmoskdfgossodrh'
        },
        neverUnfollow: [
          '2205976656'
        ],
        blacklist: [
          13670453,
          15745678
        ]
      },
      reportResults
    );

    function reportResults(error, followed, unfollowed, filteredOut) {
      if (error) {
        console.log(error);
      }
      console.log('Followed:', followed);
      console.log('Unfollowed:', unfollowed);
      console.log('Filtered out:', filteredOut);
    }

Tests
-----

For now, fill credentials in a `config.js` file that looks like this:

    {
      twitter: {
        consumer_key: 'asdfkljqwerjasdfalpsdfjas',
        consumer_secret: 'asdfasdjfbkjqwhbefubvskjhfbgasdjfhgaksjdhfgaksdxvc',
        access_token: '9999999999-zxcvkljhpoiuqwerkjhmnb,mnzxcvasdklfhwer',
        access_token_secret: 'opoijkljsadfbzxcnvkmokwertlknfgmoskdfgossodrh'
      }      
    }

Then, run `node tools/scratch.js`. Warning: This will actual make changes to that Twitter account.

License
-------

The MIT License (MIT)

Copyright (c) 2015 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
