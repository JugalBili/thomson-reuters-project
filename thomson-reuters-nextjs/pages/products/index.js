import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import image from "next/image"
import { Profiler } from "react";
export const getStaticProps = async () => {
  const GQL_API = 'http://localhost:3030';
  const GQL_QUERY = `
    query{
      products{
        title
        author
        publisher
        publication_date
        image
        text
        id
      }
    }
  `
  const res = await fetch(GQL_API, {
    method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
    body: JSON.stringify({
      query: GQL_QUERY,
    }),
  });
  const data = await res.json()

  
  return{
    props: { products: data }
  }
}

/*const Products = ({ data }) => {
  return (
    <div>
      <h1>All Products</h1>
      {data.map(product => (
        <div key={product.id}>
          <a>
            <h3>{ product.name }</h3>
          </a>
          </div>
      ))}
    </div>
  );
}
*/


export default function Products({products}) {
  return (
    <>
      <Head>
        <title>Thomson Reuters | Blogs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./tr_favicon.ico" />
      </Head>

      <main>
        <nav className="nav-bar">
          <img src="./tr_logo.png" className="app-logo" alt="TR logo" />
          <h1 className="app-title"> Thomson Reuters GraphQL POC NextJS App</h1>
          <ul className="nav-pages">
            <li>
              <Link href="/blogs">
                <a>Blogs</a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a>Products</a>
              </Link>
            </li>
          </ul>
        </nav>
        <body className="body">
          <div className="products">
            <h2>Thomson Reuter Books and Products</h2>
            <p>
              Explore the several books and products offered by Thomson Reuters.
            </p>
          </div>
          <div> 
          <div>
            <h1>All Products</h1>
            { products && products.data.products.map(product => (
              <div key={product.id}>
                <a>
                    <h3>{ product.title }</h3>
                  </a>
              </div>
            ))}
          </div>
    </div>
        </body>
      </main>
    </>
  );
} 

