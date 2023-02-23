export interface Item {
  poster_path: string;
  overview: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  vote_average: number;

  // Additional props
  media_type: "movie" | "tv" | "person";

  // Movie items
  release_date?: string;
  original_title?: string;
  title?: string;
  adult?: boolean;
  video?: boolean;

  // TV Show items
  first_air_date?: string;
  original_name?: string;
  origin_country?: string[];
  name?: string;

  // Person
  profile_path?: string;
}

export interface DetailMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: any;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { iso_639_1: string; name: string; english_name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  media_type?: "movie";
}
