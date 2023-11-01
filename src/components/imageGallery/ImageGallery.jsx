// import PropTypes from 'prop-types';
import styles from './imageGallery.module.css';
import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';
import { Button } from 'components/button/Button';
import { Modal } from 'components/modal/Modal';

export function ImageGallery({
  list,
  load,
  more,
  page,
  total,
  modal,
  openCloseModal,
}) {
  const renderLoadMoreButton = () => {
    if (total > 12) {
      return <Button load={load} more={more} page={page} />;
    }
  };

  return (
    <>
      <ul className={styles.gallery}>
        {list.map(image => {
          return (
            <>
              <ImageGalleryItem
                id={image.id}
                url={image.imgUrl}
                openCloseModal={openCloseModal}
              />
              <Modal
                largeUrl={image.largeImgUrl}
                modal={modal}
                closeModal={openCloseModal}
              />
            </>
          );
        })}
      </ul>
      {renderLoadMoreButton()}
    </>
  );
}
