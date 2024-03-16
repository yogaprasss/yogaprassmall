import Image from 'next/image';
import Link from 'next/link';
import styles from './Layout.module.css';
import useLayoutHooks from './hooks';
import SearchIcon from '@/assets/search.svg';
import CloseIcon from '@/assets/close.svg';
import Logo from '@/assets/logo.png';

import { FC } from 'react';

import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const {
    data: { isShowSearch, search },
    methods: { toggleSearch, onInputSearch, onSubmitSearch }
  } = useLayoutHooks();
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.content}>
          <Link href='/' className={styles.logo}>
            <Image src={Logo} alt='logo' height={32} />
          </Link>
          <form className={styles.search} onSubmit={onSubmitSearch}>
            <input placeholder='Boleh, cari apa kakak?' value={search} onChange={onInputSearch} />
            <button type='submit'>
              <Image src={SearchIcon} alt='search-icon' width={16} height={16} />
            </button>
          </form>
          <div className={styles.searchMobile}>
            <button type='button' onClick={toggleSearch}>
              <Image
                src={isShowSearch ? CloseIcon : SearchIcon}
                alt='search-icon'
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>
      <div className={isShowSearch ? styles.showSearchContainer : styles.hideSearchContainer}>
        <div className={styles.searchContainer}>
          <form className={styles.searchContent} onSubmit={onSubmitSearch}>
            <input placeholder='Boleh, cari apa kakak?' value={search} onChange={onInputSearch} />
            <button type='submit'>
              <Image src={SearchIcon} alt='search-icon' width={16} height={16} />
            </button>
          </form>
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
