// import PropTypes from 'prop-types';
import styles from './imageGalleryItem.module.css';

export function ImageGalleryItem({ id, url, openCloseModal }) {
  return (
    <li
      id={id}
      className={styles['gallery-item']}
      onClick={() => {
        openCloseModal();
      }}
    >
      <img src={url} alt="" />
    </li>
  );
}
