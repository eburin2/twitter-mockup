import React from 'react';
import Tweet  from './Tweet';

const TweetsArray = [
  { name: 'Joe Tweeter', content: 'What a lovely tweet to tweet. Tweet, tweet, tweet!' },
  { name: 'Secret Name', content: 'Yo is anybody listening to this thing?' },
  { name: 'Michael Jackson', content: 'Lisa it\'s your birthday. Happy birthday, Lisa' },
  { name: 'Joe Tweeter', content: 'What a football game over thw eekend! Yeehawwa ah yeah! I really enjoyed it!' }
];

function TweetFeed(){
  return (
    <div className="tweetFeed">
      { TweetsArray.map((tweet,index) =>
        <Tweet
          name = {tweet.name}
          content = {tweet.content}
          key = {index}
        />) }
    </div>
  );
}

export default TweetFeed;
