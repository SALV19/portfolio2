import React from "react";
import Project_card from "~/app/_components/Project_card";
import { projects } from "~/app/constant/constants";

const Projects_home = () => {
  return (
    <div className="mt-16 flex w-screen flex-col items-center justify-center overflow-x-hidden text-white">
      <h1 className="text-8xl font-bold text-white underline">Portfolio</h1>
      <section className="mx-auto mt-10 grid w-10/12 grid-cols-2 gap-5">
        {projects.map(
          (
            p: { name: string; description: string; img: string },
            idx: number,
          ) => (
            <Project_card project={p} key={idx} />
          ),
        )}
      </section>
    </div>
  );
};

export default Projects_home;
