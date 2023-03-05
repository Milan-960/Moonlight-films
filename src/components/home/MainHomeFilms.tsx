import { FC } from "react";
import { HomeFilms } from "@custom-types/MainHome-FilmsProps";
import { MainHomeFilmsProps } from "@custom-types/MainHome-FilmsProps";

import Skeleton from "@common/Skeleton";

import BannerSlider from "../Slider/BannerSlider";
import SectionSlider from "../Slider/SectionSlider";
import { SEO } from "@seo/Seo";

const MainHomeFilms: FC<MainHomeFilmsProps> = ({
  data,
  dataDetail,
  isLoadingBanner,
  isLoadingSection,
}) => {
  return (
    <>
      <BannerSlider
        films={data?.Trending}
        dataDetail={dataDetail}
        isLoadingBanner={isLoadingBanner}
      />

      <SEO
        title="Profile | Moonlight"
        description="Profile | Moonlight films"
        name="Profile"
        type="article"
        img="/logo.png"
      />

      <ul className="flex flex-col gap-10 mt-12">
        {isLoadingSection ? (
          <>
            {new Array(2).fill("").map((_, index) => (
              <li key={index}>
                <Skeleton className="mb-3 max-w-[10%] h-8 rounded-md" />
                <SectionSlider films={undefined} />
              </li>
            ))}
          </>
        ) : (
          Object.entries(data as HomeFilms)
            .filter((section) => section[0] !== "Trending")
            .map((section, index) => (
              <li key={index}>
                <h2 className="text-xl text-white font-medium tracking-wider mb-3 text-left">
                  {section[0]}
                </h2>

                <SectionSlider films={section[1]} />
              </li>
            ))
        )}
      </ul>
    </>
  );
};

export default MainHomeFilms;
