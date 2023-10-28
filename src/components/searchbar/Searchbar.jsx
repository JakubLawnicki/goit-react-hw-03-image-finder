// import PropTypes from 'prop-types';
import styles from './searchbar.module.css';

export function Searchbar({ onSubmit }) {
  return (
    <header className={styles.searchbar}>
      <form className={styles.form}>
        <button type="submit" className={styles.button}>
          <span className={styles['button-label']}>Search</span>
        </button>

        <input
          className={styles.input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
