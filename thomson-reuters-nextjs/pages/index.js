import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="home-blog">
        <h2>Thomson Reuter Blogs</h2>
        <p>
          Stay up-to-date with the latest developments from the Thomson Reuter
          Community
        </p>
        <Link href="/blogs">
          <button style={{ cursor: "pointer" }}>Blogs</button>
        </Link>
      </div>
      <div className="home-products">
        <h2>Thomson Reuter Products</h2>
        <p>
          Learn more about the products that legal, tax, and business
          professionals rely on to deliver their best work.
        </p>
        <Link href="/products">
          <button style={{ cursor: "pointer" }}>Products</button>
        </Link>
      </div>
    </>
  );
}
