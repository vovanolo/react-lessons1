import React from "react";
import Menu from "./Menu";
import Profile from "./Profile";
import user from "./user.json";
import Statistics from "./Statistics";
import statisticsData from "./data.json";
import Counter from "./Counter";

export default function App() {
  return (
    <>
      <Menu home="home" contacts="contacts" aboutUs="about us">
        <div>safsafas</div>
      </Menu>
      <div>Hello ya golovna componenta</div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statisticsData} />
      <Counter
        title="this safasfasfs counter asfasfas"
        description="sfsfasfsafasfas"
      />
    </>
  );
}
