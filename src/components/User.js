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
    <div className="h-[450px] w-[350px] bg-green-400 rounded-md p-4 border border-black shadow-lg">
      <img
        className="rounded-full h-40 border-2 border-black"
        src={avatar_url}
      />
      <h2 className="p-2">Creator - {name}</h2>
      <h2 className="p-2">Location - {location}</h2>
      <p className="p-2">Bio - {bio}</p>
      <a href="https://github.com/ThisIsOJAS">
        <button className="p-2 border border-black rounded-lg hover:scale-110 transition-all ease-in-out bg-gray-300 shadow-md">
          Github
        </button>
      </a>
    </div>
  );
};

export default User;
