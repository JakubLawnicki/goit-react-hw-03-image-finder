// import PropTypes from 'prop-types';
import styles from './button.module.css';

export function Button({ load, fetch }) {
  return (
    <button
      onClick={() => {
        load();
        fetch();
      }}
      type="button"
      className={styles['load-button']}
    >
      Load more
    </button>
  );
}
