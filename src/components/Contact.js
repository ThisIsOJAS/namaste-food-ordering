const Contact = () => {
  return (
    <div>
      <h1 className="py-2 pl-8 font-bold text-2xl bg-blue-100 shadow-lg">
        Contact
      </h1>
      <a
        className="px-1 ml-8 mt-2 border border-black rounded-lg hover:scale-110 transition-all ease-in-out bg-gray-300 shadow-md inline-block"
        href="mailto:ojaskushagra98@gmail.com"
      >
        Send me an email
      </a>
      <a
        className="px-1 ml-8 mt-2 border border-black rounded-lg hover:scale-110 transition-all ease-in-out bg-gray-300 shadow-md inline-block"
        href="https://github.com/ThisIsOJAS"
      >
        Github
      </a>
    </div>
  );
};

export default Contact;
