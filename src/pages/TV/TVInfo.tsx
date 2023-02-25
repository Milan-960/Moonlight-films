import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import FilmDetail from "../../components/FilmDetail/FilmDetail";
import { getTVFullDetail } from "../../services/tv";

import { FilmInfo } from "@custom-types/Item-types";
import Error from "@error/Error";

const TVInfo: FC = () => {
  const { id } = useParams();

  const { data, isError, error } = useQuery<FilmInfo, Error>(
    ["tvDetail", id],
    () => getTVFullDetail(Number(id as string))
  );

  // if (isError) return <div>ERROR: {error.message}</div>;
  if (isError) return <Error />;
  // if (isLoading) return <div>Loading...</div>;

  return <FilmDetail {...data} />;
};

export default TVInfo;
