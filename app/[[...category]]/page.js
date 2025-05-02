import HomeContainer from "@/containers/home";

import Movies from "@/mocks/movies.json";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function HomePage({ params }) {
  await delay(2000);

  let selectedCategory;

  if (params.category?.length > 0) {
    selectedCategory = true;
  }
  return (
    <HomeContainer
      selectedCategory={{
        id: params?.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }}
    />
  );
}

export default HomePage;

/*

KATEGORİYE GÖRE SIRALAMA

<HomeContainer
  selectedCategory={{
    id: params.category?.[0] ?? "",
    movies: selectedCategory ? Movies.results.filter(movie => movie.genre_ids.includes(Number(params.category?.[0]) ?? 28)).slice(1, 7) : [],
  }}
/>
*/
