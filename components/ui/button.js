import Link from 'next/link';
import React from 'react';

import styles from './button.module.css';

function button({ children, link, click }) {
  if (link) {
    return (
      <Link href={link}>
        <a className={styles.btn}>{children}</a>
      </Link>
    );
  }

  return (
    <button onClick={click} className={styles.btn}>
      {children}
    </button>
  );
}

export default button;
