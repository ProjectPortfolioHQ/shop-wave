import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brandName}>
        Shop Wave
      </Link>
      <nav className={styles.navLink}>
        <Link href="/products" className={styles.navLinkItem}>
          Products
        </Link>
        <Link href="/blogs" className={styles.navLinkItem}>
          Blogs
        </Link>
        <Link href="/about-us" className={styles.navLinkItem}>
          About Us
        </Link>
      </nav>
    </header>
  );
}
