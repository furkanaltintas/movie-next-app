import React from "react";
import { notFound } from "next/navigation";

import { getMovie } from "@/services/movie";

import MovieContainer from "@/containers/movie";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function MoviePage({ params, searchParams }) {
  await delay(1000);

  const movieDetail = await getMovie(params.id);

  if (!movieDetail) notFound(); // movieDetail yok ise 404 sayfasına gideceğiz.
  if (searchParams.error === "true") throw new Error("Error happened");

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;

// Parametre her zaman string olarak gelir bu yüzden id değerini toString() yapıyoruz.
