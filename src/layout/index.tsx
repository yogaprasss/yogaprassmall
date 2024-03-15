import styles from './Layout.module.css';
import SearchIcon from '@/assets/search.svg';
import Logo from '@/assets/logo.png';
import Image from 'next/image';

import { FC } from 'react';

import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Image src={Logo} alt='logo' height={32} />
          </div>
          <div className={styles.search}>
            <input placeholder='Boleh, cari apa kakak?' />
            <button>
              <Image src={SearchIcon} alt='search-icon' width={16} height={16} />
            </button>
          </div>
          <div />
        </div>
      </div>
      <main className={styles.container}>
        <div className={styles.content}>
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
