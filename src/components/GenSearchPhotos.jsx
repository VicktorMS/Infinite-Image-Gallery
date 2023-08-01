import React from "react";
import ImageCard from "./ImageCard";
import { useRef, useCallback } from "react";
import { useInfiniteQuery } from "react-query";
import { getSearchPhotosPage } from "../service/api";
import { useSearchParams } from "react-router-dom";


const GenSearchPhotos = ({request}) => {

  const [searchParams, setSearchParams] = useSearchParams()

    
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
    data,
  } = useInfiniteQuery(
    "/search/photos",
    ({ pageParam = 1 }) => getSearchPhotosPage(pageParam, searchParams.get('query')),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length ? allPages.length + 1 : undefined;
      },
    }
  );

  const intObserver = useRef();

  const lastPhotoRef = useCallback(
    (photo) => {
      if (isFetchingNextPage) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((photos) => {
        if (photos[0].isIntersecting && hasNextPage) {
          console.log("We are near last post!");
          fetchNextPage();
        }
      });

      if (photo) intObserver.current.observe(photo);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  if (status == "error") return "Error fetching" + error.message;

  const content = data?.pages.map((pg) => {
    return pg.results.map((photo, i) => {
      if (pg.length === i + 1) {
        return <ImageCard ref={lastPhotoRef} key={photo.id} data={photo} />;
      }
      return <ImageCard key={photo.id} data={photo} />;
    });
  });
  console.log(data)
  return (
    <>
      {content}
      {isFetchingNextPage && <p>Loading More Posts...</p>}
    </>
  );
};

export default GenSearchPhotos;
