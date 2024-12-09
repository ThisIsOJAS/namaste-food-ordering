import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1 className="py-2 pl-8 font-bold text-2xl bg-blue-100 shadow-lg">
        About Me
      </h1>
      <div className="flex gap-10 m-2 ml-8">
        <User />
      </div>
    </div>
  );
};

export default About;
