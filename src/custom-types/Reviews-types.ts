export interface Reviews {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: any;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}
