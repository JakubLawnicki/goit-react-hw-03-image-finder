// import PropTypes from 'prop-types';
import styles from './imageGallery.module.css';
import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';

export function ImageGallery({ list }) {
  return (
    <ul className={styles.gallery}>
      {list.map(image => {
        return (
          <ImageGalleryItem
            id={image.id}
            url={image.imgUrl}
            largeUrl={image.largeImgUrl}
          />
        );
      })}
    </ul>
  );
}
