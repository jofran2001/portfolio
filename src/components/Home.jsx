import React from "react";

const Home = () => {
  return (
    <section id="home" className="p-10 text-center bg-gray-200">
      <div className="flex flex-col items-center">
        {/* Adicione a imagem aqui */}
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocJqp89TjLNfCPEq3I5b882wzHOBQKFBj0GWlSOQfRxjubp20b6X=s576-c-no" 
          alt="Minha Foto"
          className="w-52 h-52 rounded-full shadow-lg mb-4"
        />
        <h1 className="text-4xl font-bold">Olá, eu sou João</h1>
        <p className="mt-4 text-lg">Desenvolvedor de Software | Apaixonado por criar soluções incríveis</p>
      </div>
    </section>
  );
};

export default Home;
