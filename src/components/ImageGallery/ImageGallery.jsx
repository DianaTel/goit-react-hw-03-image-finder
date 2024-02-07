import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";
import PropTypes from 'prop-types'

export const ImageGallery = ({ photos, onClickImageItem }) => (
  <Gallery>
    {photos.map(({ id, smallUrl, tags }) => (
      <ImageGalleryItem
        id={id}
        tags={tags}
        smallUrl={smallUrl}
        onClickImageItem={onClickImageItem}
      />
    ))}
  </Gallery>
);

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.objectOf({
      id: PropTypes.number.isRequired,
      smallUrl: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClickImageItem: PropTypes.func.isRequired,
};












