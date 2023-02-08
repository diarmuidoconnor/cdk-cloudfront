import React from "react";
import FilterMoviesCard from "../components//filterMovieCard";

export default {
  title: "Home Page/FilterMoviesCard",
  component: FilterMoviesCard,
};

export const Basic = () => {
  return <FilterMoviesCard />;
};
Basic.storyName = "Default";