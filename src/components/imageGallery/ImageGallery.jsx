// import PropTypes from 'prop-types';
import styles from './imageGallery.module.css';
import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';

export function ImageGallery() {
  return (
    <ul className={styles.gallery}>
      <ImageGalleryItem />
    </ul>
  );
}
