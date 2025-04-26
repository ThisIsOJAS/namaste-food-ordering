import User from "./User";

const About = () => {
  return (
    <div>
      <h1 className="py-2 pl-8 font-bold text-2xl bg-blue-100 shadow-lg">
        About
      </h1>
      <div className="flex gap-10 m-2 ml-8">
        <User />
      </div>
    </div>
  );
};

export default About;
