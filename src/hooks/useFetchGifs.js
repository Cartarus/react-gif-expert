import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoadign, setIsLoadign] = useState(true)

  const getImages = async () => {
    const Newimages = await getGifs(category);
    setImages(Newimages);
    setIsLoadign(false)
  };

  useEffect(() => {
    getImages(category);
  }, []);

  return {
    images,
    isLoading: isLoadign,
  };
};
