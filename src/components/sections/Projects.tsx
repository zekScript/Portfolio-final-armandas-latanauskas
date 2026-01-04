import React from "react";
import Card from "../Card";

const Projects = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <Card
        title={`Hello world`}
        img={`roundedsqProject.png`}
        
        link={`https://erasmus-plus-project.vercel.app/`}
      />
      <Card
        title={`Something else`}
        img={`https://miro.medium.com/1*t_G1kZwKv0p2arQCgYG7IQ.gif`}
        link={`https://erasmus-plus-project.vercel.app/`}
      />
      <Card
        title={`IKR`}
        img={`https://miro.medium.com/1*t_G1kZwKv0p2arQCgYG7IQ.gif`}
        link={`https://erasmus-plus-project.vercel.app/`}
      />
      <Card
        title={`IKR`}
        img={`https://miro.medium.com/1*t_G1kZwKv0p2arQCgYG7IQ.gif`}
        link={`https://erasmus-plus-project.vercel.app/`}
      />
      <Card
        title={`IKR`}
        img={`https://miro.medium.com/1*t_G1kZwKv0p2arQCgYG7IQ.gif`}
        link={`https://erasmus-plus-project.vercel.app/`}
      />
      <Card
        title={`IKR`}
        img={`https://miro.medium.com/1*t_G1kZwKv0p2arQCgYG7IQ.gif`}
        link={`https://erasmus-plus-project.vercel.app/`}
      />
    </div>
  );
};

export default Projects;
