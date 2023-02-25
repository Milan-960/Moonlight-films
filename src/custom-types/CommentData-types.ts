import { User } from "./User-types";

export interface CommentDataType {
  user: User;
  value: string;
  reactions: { [key: string]: string };
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  isEdited: boolean;
}
