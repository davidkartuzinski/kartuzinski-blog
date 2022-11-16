import Image from 'next/image';
import Link from 'next/link';
import styles from './logo.module.css';
import logoPic from '../../../../public/Kartuzinski-Logo.png';

function Logo() {
  return (
    <div className={styles.logo}>
      <Link href='/' passHref>
        <Image
          src={logoPic}
          alt='Logo for the Kartuzinski.com blog'
          width={160}
          height={24}
        />
      </Link>
    </div>
  );
}

export default Logo;
