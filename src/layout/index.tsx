import Image from 'next/image';
import Link from 'next/link';
import styles from './Layout.module.css';
import useLayoutHooks from './hooks';
import SearchIcon from '@/assets/search.svg';
import CloseIcon from '@/assets/close.svg';
import CartIcon from '@/assets/cart.svg';
import Logo from '@/assets/logo.png';

import { FC } from 'react';

import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const {
    data: {
      isShowSearch,
      search,
      cartCount,
      isShowCartDetail,
      carts
    },
    methods: {
      toggleSearch,
      onInputSearch,
      onSubmitSearch,
      toggleCartDetail,
      checkout
    }
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
          <button className={styles.cartContainer} onClick={toggleCartDetail}>
            <Image src={CartIcon} alt='cart-icon' width={28} height={28} />
            {cartCount > 0 && (
              <div className={styles.cartCounter}>{cartCount}</div>
            )}
            {isShowCartDetail && (
              <div className={styles.cartDetail}>
                {cartCount === 0 && 'No Items'}
                {cartCount > 0 && (
                  <>
                    {carts.map((cart, index) => (
                      <div key={`cart-${index+1}`} className={styles.cartItems}>
                        <Image
                          src={cart.images[0]}
                          alt=''
                          width={200}
                          height={200}
                          className={styles.cartImage}
                          priority
                        />
                        <p>{cart.title}</p>
                      </div>
                    ))}
                    <br />
                    <br />
                    <button
                      style={{ background: 'transparent', border: 0, cursor: 'pointer' }}
                      onClick={checkout}
                    >
                      Checkout
                    </button>
                  </>
                )}
              </div>
            )}
          </button>
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
