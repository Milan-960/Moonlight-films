import { Cast } from "./Cast-types";
import { DetailTV } from "@custom-types/DetailTV-types";
import { DetailMovie } from "@custom-types/DetailMovie-types";
import { Reviews } from "./Reviews-types";
import { Video } from "./Video-types";
import { DetailSeason } from "./DetailsSeason-types";

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

export interface ConfigType {
  [key: string]: string | number;
}

export interface FilmInfo {
  detail?: DetailMovie | DetailTV | undefined;
  credits?: Cast[] | undefined;
  reviews?: Reviews[] | undefined;
  similar?: Item[] | undefined;
  videos?: Video[] | undefined;
}

export interface getWatchReturnedType {
  detail?: DetailTV | DetailMovie | undefined;
  recommendations?: Item[] | undefined;
  detailSeasons?: DetailSeason[] | undefined;
}
