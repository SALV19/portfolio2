import React from "react";

const Nav = () => {
  return (
    <div className="absolute top-0 z-50 flex w-screen justify-between bg-[#2D2D2D] p-4 px-12 text-white">
      <a className="cursor-pointer font-bold">Santiago Alducin</a>
      <div className="flex w-1/3 justify-between">
        <section className="flex gap-10">
          <a className="cursor-pointer">Home</a>
          <a className="cursor-pointer">Photo</a>
        </section>
        <section className="flex items-center gap-10">
          <a className="cursor-pointer">Contact</a>
          <a className="cursor-pointer text-xl -tracking-tighter">
            &#x3D;&#x3D;&#x3D;
          </a>
        </section>
      </div>
    </div>
  );
};

export default Nav;
