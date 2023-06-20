import Image from 'next/image';
import React from 'react';
import styles from '@/styles/styles.module.css'
import Link from 'next/link';
function NewsPage({ articles }) {
  return (
    <>
      <h1 className='text-center font-bold text-xl mt-5 mb-5'>Últimas notícias</h1>
      {articles.map((article) => (
        <div key={article.title}>
          <Link href={article.url}>
            <div className={styles.artigo}>
              <h2 className='mb-2'><b>{article.title}</b></h2>
              {article.urlToImage && (
                <div className={styles.img}>
                  <img className={styles.img}
                    src={article.urlToImage}
                    alt={article.title}
                  />
                </div>

              )}
              <p className='mt-2'>{article.description}</p>
            </div>
          </Link>
        </div>

      ))}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/news');
  const { articles } = await response.json();

  return {
    props: {
      articles,
    },
  };
}

export default NewsPage;
