const Contact = () => {
  return (
    <div className="m-3">
      <h1 className="font-bold text-xl m-2 p-2">Contact Us</h1>
      <div className="m-2 p-2">
        <input
          className="border border-black mr-2 p-1"
          placeholder="Name"
        ></input>
        <input
          className="border border-black mr-2 p-1"
          placeholder="EMail Id"
        ></input>
        <button className="border border-gray-400 bg-gray-200 rounded-xl p-1">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
