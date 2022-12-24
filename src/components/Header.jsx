import React from "react";

const Header = () => {
  return (
    <div className="md:flex mb-8">
      <div>
        <h2 className="font-bold md:text-5xl text-1xl">Guntoro Yudhy Kusuma</h2>
      </div>
      <div className="ml-auto mt-6 md:text-right">
        <p>
          Email :{" "}
          <a
            href="mailto:guntoro.gyk@gmail.com"
            className="hover:text-blue-500 text-blue-500"
          >
            guntoro.gyk@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Header;
