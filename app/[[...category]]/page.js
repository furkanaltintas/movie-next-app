import HomeContainer from "@/containers/home";

import {
  getSingleCategory,
  getCategories,
  getTopRatedMovies,
  getPopularMovies,
} from "@/services/movie";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function HomePage({ params }) {
  await delay(1000);

  let selectedCategory;

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([
    getTopRatedMovies(),
    getPopularMovies(),
    getCategories(),
  ]);
  // Bu yöntem performans olarak daha hızlı

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }
  return (
    <HomeContainer
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      categories={categories}
      selectedCategory={{
        id: params?.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
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
