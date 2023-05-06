import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { useParams } from "react-router-dom";
import FilmDetail from "../../components/FilmDetail/FilmDetail";
import { getMovieFullDetail } from "@services/movie";
import { FilmInfo } from "@custom-types/Item-types";
import Error from "@error/Error";

const MovieInfo: FC = () => {
  const { id } = useParams();
  const { data, isError } = useQuery<FilmInfo, Error>(["movieDetail", id], () =>
    getMovieFullDetail(Number(id as string))
  );

  if (isError) return <Error />;

  return <FilmDetail {...data} />;
};

export default MovieInfo;
