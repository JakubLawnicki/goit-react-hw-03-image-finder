// import PropTypes from 'prop-types';
import styles from './imageGalleryItem.module.css';

export function ImageGalleryItem({ id, url, largeUrl }) {
  return (
    <li className={styles['gallery-item']}>
      <img src={url} alt="" />
    </li>
  );
}
