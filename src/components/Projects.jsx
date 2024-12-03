import React from "react";

const Projects = () => {
  const projects = [
    { name: "Sistema de Controle de Estoque", url: "https://github.com/EquipeSkyfall/API_2Semestre" },
    { name: "Projeto SmartFarming", url: "https://github.com/jofran2001/Projeto-Smart-Farming" },
    { name: "CRUD Lista de Tarefas", url: "https://github.com/jofran2001/TAREFAClaudio" },
  ];

  return (
    <section id="projects" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Projetos</h2>
      <div className="flex flex-wrap justify-center mt-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="m-4 bg-blue-50 p-4 rounded shadow-md w-60 text-center hover:bg-blue-100"
          >
            {project.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
