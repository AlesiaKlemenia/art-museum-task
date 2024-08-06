import "./styles.scss";

import React, { useCallback, useEffect, useState } from "react";

import { IArtworkBriefInfo } from "@/interfaces/IArtworkBriefInfo";
import ArtworkCard from "@/pages/Home/ArtworkCard";
import PaginateBar from "@/pages/Home/SpecialGallery/PaginateBar";
import { getSpecials } from "@/utils/requests";

const SpecialGallery = (): JSX.Element => {
  const [gallery, setGallery] = useState<IArtworkBriefInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(5);

  useEffect(() => {
    if (!currentPage) return;
    setIsLoading(true);
    getSpecials(currentPage).then((res) => {
      setTotalPages(res.pagination.total_pages);
      setGallery(res.data);
      setIsLoading(false);
    });
  }, [currentPage]);

  const increasePageNumber = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [currentPage, totalPages]);

  const decreasePageNumber = useCallback(() => {
    if (currentPage - 1 > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [currentPage]);

  const selectPage = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="special-gallery-loader">Loading!</div>
      ) : (
        <div className="special-gallery">
          {gallery.map((card: IArtworkBriefInfo) => (
            <ArtworkCard
              key={card.id}
              id={card.id}
              title={card.title}
              artist_title={card.artist_title}
              is_public_domain={card.is_public_domain}
              image_id={card.image_id}
            />
          ))}
        </div>
      )}
      <PaginateBar
        pageNumber={currentPage}
        totalPages={totalPages}
        increasePageNumber={increasePageNumber}
        decreasePageNumber={decreasePageNumber}
        selectPage={selectPage}
        isLoading={isLoading}
      />
    </>
  );
};

export default SpecialGallery;
