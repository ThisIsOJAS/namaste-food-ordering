import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const User = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("https://api.github.com/users/ThisIsOJAS");
    const json = await data.json();
    setUserInfo(json);
  };

  if (userInfo == null) {
    return <Shimmer />;
  }

  const { avatar_url, name, location, bio } = userInfo;

  return (
    <div className="user-card">
      <img className="profile-pic" src={avatar_url} />
      <h2>Creator - {name}</h2>
      <h2>Location - {location}</h2>
      <p>Bio - {bio}</p>
      <a href="https://github.com/ThisIsOJAS">Github</a>
    </div>
  );
};

export default User;
