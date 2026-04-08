import React from "react";
import "./assets/style.css";
import parqueHalfeld from "./assets/parqueHalfeld.jpg";
import marianoProcopio from "./assets/marianoProcopio.jpg";
import morroImperador from "./assets/morroImperador.jpg";

export default function TurismoJF() {
  const pontos = [
    {
      nome: "Parque Halfeld",
      desc: "O coração da cidade, ideal para passeios, eventos culturais e momentos de lazer ao ar livre.",
      img: parqueHalfeld,
    },
    {
      nome: "Museu Mariano Procópio",
      desc: "Um dos museus mais importantes de Minas Gerais, com acervo histórico, artístico e um belo jardim.",
      img: marianoProcopio,
    },
    {
      nome: "Morro do Imperador",
      desc: "Um dos pontos mais altos da cidade, oferecendo uma vista panorâmica incrível de Juiz de Fora.",
      img: morroImperador,
    },
  ];

  return (
    <div className="container">
      
      <header className="header">
        <h1>Turismo em Juiz de Fora</h1>
        <p>Descubra os melhores pontos turísticos da cidade</p>
      </header>

      <section className="cards">
        {pontos.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} alt={item.nome} />

            <div className="card-content">
              <h3>{item.nome}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

    <section className="video">
  <h2>Conheça Juiz de Fora</h2>

  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/zmSca0RbyHA"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</section>

<section className="map">
  <h2>Localização</h2>

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231.6174387144641!2d-43.35994032237864!3d-21.746215409045224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989c917a68ac2b%3A0x6002ab99115a4764!2sMuseu%20Mariano%20Proc%C3%B3pio!5e0!3m2!1spt-BR!2sbr!4v1775668296462!5m2!1spt-BR!2sbr"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>

  
</section>
    </div>
  );
}