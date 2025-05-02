import React from "react";
import { notFound } from "next/navigation";

import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movies.json";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function MoviePage({ params, searchParams }) {
  await delay(2000);

  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );

  if (!movieDetail) notFound(); // movieDetail yok ise 404 sayfasına gideceğiz.
  if (searchParams.error === "true") throw new Error("Error happened");

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;

// Parametre her zaman string olarak gelir bu yüzden id değerini toString() yapıyoruz.
