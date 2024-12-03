import React from "react";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

const Tecnologies = () => {
  const techs = [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
  ];

  return (
    <section id="technologies" className="p-10 bg-white">
      <h2 className="text-3xl font-bold text-center">Tecnologias</h2>
      <ul className="flex flex-wrap justify-center mt-6">
        {techs.map((tech, index) => (
          <li
            key={index}
            className="m-4 bg-blue-50 p-6 rounded shadow-md flex flex-col items-center"
          >
            <div className="text-5xl mb-4">{tech.icon}</div>
            <span className="text-lg font-medium">{tech.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tecnologies;
