import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="tr-SiteHeader tr-SiteHeader--withSiteName">
      <nav className="nav-bar tr-SiteHeader-inner">
        <div className="nav-logo tr-SiteHeader-logo">
          <Image
            src="/tr_logo.png"
            className="app-logo"
            height={55}
            width={235}
          />
        </div>
        <div className="nav-pages">
          <ul className="tr-SiteHeader-menus">
            <li className="tr-SiteHeaderMenu">
              <Link href="/">
                <a className="tr-SiteHeaderMenu-link">Home</a>
              </Link>
            </li>
            <li className="tr-SiteHeaderMenu">
              <Link href="/blogs">
                <a className="tr-SiteHeaderMenu-link">Blogs</a>
              </Link>
            </li>
            <li className="tr-SiteHeaderMenu">
              <Link href="/products">
                <a className="tr-SiteHeaderMenu-link">Products</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
