import { useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ImageMask from "../ImageMask/imageMask";

register();

type Banner = {
  url: string;
  descripton: string;
  link?: string;
  target?: string;
};

type Config = {
  slidesPerView: number;
  pagination: boolean;
  navigation: boolean;
};

type Props = {
  bannersList: Banner[];
  config?: Config;
};

const configDefault: Config = {
  slidesPerView: 1,
  pagination: true,
  navigation: true,
};

const Carousel: React.FC<Props> = ({ bannersList, config = configDefault }) => {
  const [slidePerView, setSlidePerView] = useState(config.slidesPerView);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerView(1);
      } else {
        setSlidePerView(config.slidesPerView);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [config.slidesPerView]);

  return (
    <Swiper {...config} slidesPerView={slidePerView}>
      {bannersList.map((banner, i) => (
        <SwiperSlide key={i}>
          {banner.link ? (
            <a href={banner.link} target={banner.target || "_blank"}>
              <ImageMask
                src={banner.url}
                alt={banner.descripton}
                className="slide-item"
              />
            </a>
          ) : (
            <ImageMask
              src={banner.url}
              alt={banner.descripton}
              className="slide-item"
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
