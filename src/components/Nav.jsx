import React from 'react';

function Nav(){
  return (
    <div className="navHolder">
      <ul className="nav">
        <li>Home</li>
        <li>Notifications</li>
        <li>Messages</li>
      </ul>
      <div className="tweetSearchHolder">
        <input type="text" value="search"></input>
        <button className="twitter">Tweet</button>
      </div>
    </div>
  );
}
export default Nav;
