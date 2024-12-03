import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <ul className="flex justify-around">
        <li><a href="#Home">Início</a></li>
        <li><a href="#tecnologies">Tecnologias</a></li>
        <li><a href="#Projects">Projetos</a></li>
        <li><a href="#Pontact">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
