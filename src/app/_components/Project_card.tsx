import React, { FC } from "react";

interface Props {
  project: { name: string; description: string; img: string };
}

const Project_card: FC<Props> = ({ project }) => {
  return (
    <div className="hover: mb-[11rem] flex h-64 w-10/12 flex-col items-center">
      <img
        src={
          project.img.includes(".uk") || project.img.includes("http")
            ? project.img
            : `../${project.img}`
        }
        className="h-[20rem] w-full object-fill"
      />
      <h1 className="text-5xl">{project.name}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default Project_card;
