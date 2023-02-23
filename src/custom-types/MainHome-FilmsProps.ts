import { Item } from "./Item-types";

export interface HomeFilms {
  [key: string]: Item[];
}

export interface MainHomeFilmsProps {
  data: HomeFilms | undefined;
  dataDetail: any;
  isLoadingBanner: boolean;
  isLoadingSection: boolean;
}
