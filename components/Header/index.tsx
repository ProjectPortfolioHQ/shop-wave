import Link from "next/link";
import styles from "./Header.module.css";
import { Newsreader } from "next/font/google";
import { Button } from "@/components/ui/button";

const newsreader = Newsreader({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className="bg-primary">
      <div className="flex justify-between items-center py-8 px-4 container">
        <Link
          href="/"
          className={`${styles.brandName} ${newsreader.className}`}
        >
          Shop Wave
        </Link>
        <nav className={styles.navLink}>
          <Link href="/posts" className={styles.navLinkItem}>
            Product
          </Link>
          <Link href="/posts" className={styles.navLinkItem}>
            Cart
          </Link>
          <Link href="/posts" className={styles.navLinkItem}>
            Blog
          </Link>
          <Link href="/about-us" className={styles.navLinkItem}>
            About Us
          </Link>
          <Button asChild variant="secondary">
            <Link href="/signin">Sign In</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
