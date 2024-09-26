import PhotoList from "./photosList";
import { CustomLabel, ImageContainer, GalleryContainer } from "./gallery.style";

const Gallery = () => {
  const baseURL = "/assets/imgs/";
  return (
    <GalleryContainer variant="masonry" gap={10}>
      {PhotoList.map((item, i) => (
        <ImageContainer key={item.img + i}>
          <img
            srcSet={`${baseURL}${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${baseURL}${item.img}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <CustomLabel>
            <p>{item.description}</p>
          </CustomLabel>
        </ImageContainer>
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
