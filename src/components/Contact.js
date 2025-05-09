const Contact = () => {
  // console.log("Contact component rendered");

  return (
    <div>
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
      <div className="pl-8 pt-4">
        <p className="text-xl font-semibold">Fill in the details</p>
        <form>
          <input
            type="text"
            className="border border-black p-2"
            placeholder="name"
          />
          <input
            type="text"
            className="border border-black p-2 m-2"
            placeholder="message"
          />
          <button
            className="border border-black p-2 m-2 bg-gray-300 shadow-md
            hover:scale-110 transition-all ease-in-out rounded-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
