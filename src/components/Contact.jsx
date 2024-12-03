import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-10 bg-white text-center">
      <h2 className="text-3xl font-bold">Contato</h2>
      <p className="mt-4">Entre em contato por:</p>
      <ul className="mt-4">
        <li>Email: <a href="mailto:jota.fran.souza@gmail.com" className="text-blue-600">jota.fran.souza@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-fran%C3%A7a-alves-de-souza-8700a62b3/" className="text-blue-600" target="_blank" rel="noopener noreferrer">/João Pedro França Alves de Souza</a></li>
        <li>GitHub: <a href="https://github.com/jofran2001" className="text-blue-600" target="_blank" rel="noopener noreferrer">/jofran2001</a></li>
      </ul>
    </section>
  );
};

export default Contact;
