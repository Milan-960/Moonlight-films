import { Item } from "@custom-types/Item-types";

export interface ItemsPage {
  page: number;
  results: Item[];
  total_results: number;
  total_pages: number;
}
