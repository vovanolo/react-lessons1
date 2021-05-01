import React from "react";
import "./FriendList.css";

export default function FriendList({ friends }) {
  return (
    <ul className="friendList">
      {friends.map((friend) => (
        <li className="item">
          <span
            className={friend.isOnline ? "statusOnline" : "statusOffline"}
          ></span>
          <img className="avatar" src={friend.avatar} alt="" width="48" />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
