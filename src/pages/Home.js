import React from "react";
import Carrousel from "../components/Carrousel";
import Header from "../components/Header";
import Search from "../components/Search";
import "../assets/styles/Home.css";

function Home() {
  const lista = [
    {
      id: 2,
      slug: "tvshow-2",
      title: "In the Dark",
      type: "Scripted",
      language: "English",
      year: 2009,
      contentRating: "16+",
      duration: 164,
      cover: "http://dummyimage.com/800x600.png/99118E/ffffff",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4",
    },
    {
      id: 3,
      slug: "tvshow-3",
      title: "Instinct",
      type: "Adventure",
      language: "English",
      year: 2002,
      contentRating: "16+",
      duration: 137,
      cover: "http://dummyimage.com/800x600.png/302140/ffffff",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4",
    },
    {
      id: 4,
      slug: "tvshow-4",
      title: "Grand Hotel",
      type: "Comedy",
      language: "English",
      year: 2014,
      contentRating: "16+",
      duration: 163,
      cover: "http://dummyimage.com/800x600.png/5472FF/ffffff",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4",
    },
    {
      id: 5,
      slug: "tvshow-5",
      title: "Stargate Atlantis",
      type: "Scripted",
      language: "English",
      year: 2014,
      contentRating: "16+",
      duration: 194,
      cover: "http://dummyimage.com/800x600.png/B36F20/ffffff",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4",
    },
    {
      id: 6,
      slug: "tvshow-6",
      title: "Final Space",
      type: "Scripted",
      language: "English",
      year: 2017,
      contentRating: "16+",
      duration: 124,
      cover: "http://dummyimage.com/800x600.png/CCC539/ffffff",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4",
    },
    {
      id: 7,
      slug: "tvshow-7",
      title: "The InBetween",
      type: "Drama",
      language: "English",
      year: 2011,
      contentRating: "16+",
      duration: 179,
      cover: "http://dummyimage.com/800x600.png/FF7A90/ffffff",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4",
    },
  ];

  return (
    <div>
      <Header />
      <Search titulo="¿Qué quieres ver hoy?" />
      <Carrousel lista={lista} titulo="Mi lista" />
      <Carrousel lista={lista.reverse()} titulo="Favoritos" />
    </div>
  );
}

export default Home;
