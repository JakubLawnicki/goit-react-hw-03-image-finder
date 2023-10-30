// import PropTypes from 'prop-types';
import styles from './button.module.css';

export function Button({ load, more, page }) {
  return (
    <button
      onClick={() => {
        load();

        more(page);
      }}
      type="button"
      className={styles['load-button']}
    >
      Load more
    </button>
  );
}
