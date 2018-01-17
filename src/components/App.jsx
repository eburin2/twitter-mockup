import React from 'react';
import Nav from './Nav';
import Name from './Name';
import Bio from './Bio';
import TweetFeed from './TweetFeed';

function App(){
  return (
    <div className="container">
      <Nav/>
      <div className="mainContainer">
        <div className="infoPanel">
          <Name/>
          <Bio/>
        </div>
        <TweetFeed/>
      </div>
    </div>
  );
}

export default App;
