import React from "react";

const Home = () => {
  return (
    <div className="flex h-screen w-screen bg-gray-950">
      <section className="mr-5 h-full w-1/2 pt-4">
        <img src="./SantiAlducin.jpg" className="h-full w-full grayscale" />
      </section>
      <section className="flex w-1/2 flex-col items-center justify-center overflow-hidden">
        <h1 className="text-8xl font-bold leading-[10rem] text-white">
          Santiago
          <br />
          <hr className="ml-[10rem] w-full border-2" />
          Alducin
        </h1>
        <div className="w-10/12">
          <h2 className="mb-8 text-white">
            3rd Semester ITC - Tecnológico de Monterrye (QRO)
          </h2>
          <a href="/views/projects_home" className="bg-gray-100 px-5 py-3">
            Projects
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
