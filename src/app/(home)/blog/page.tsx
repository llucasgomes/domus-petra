import { bebasNeue } from '@/app/_ui/fonts'
import { blog } from '@/lib/data'
import Image from 'next/image'
import styles from './Blog.module.css'

export default function Page() {
  return (
    <main className={styles.main}>
      {/* Primeira Seção */}
      <section className={styles.blogHeader}>
        <Image
          src="/services/bg-services.jpeg"
          alt="Imagem para seção"
          width={700}
          height={300}
          className={styles.blogHeaderImage}
        />
        <h1 className={`${bebasNeue.className} ${styles.blogTitle}`}>BLOG</h1>
      </section>

      <section className={styles.blogContent}>
        {blog.map((post) => {
          if (post.id === '01') {
            return (
              <div
                key={post.id}
                className={`${styles.blogPost} ${styles.blogDiv1}`}
              >
                <Image
                  src={post.capa_image || '/default-image.jpg'}
                  alt="Imagem do post"
                  width={600}
                  height={400}
                  className={styles.blogImage}
                />
                <div className={styles.blogText}>
                  <h2 className={styles.blogHeading}>{post.title}</h2>
                  <h3 className={styles.blogSubtitle}>{post.subtitle}</h3>
                </div>
              </div>
            )
          }
          if (post.id === '02') {
            return (
              <div key={post.id} className={styles.blogDiv2}>
                <div className={styles.blogText}>
                  <h2 className={styles.blogHeading}>{post.title}</h2>
                  <h3 className={styles.blogSubtitle}>{post.subtitle}</h3>
                </div>
                <Image
                  src={post.capa_image || '/default-image.jpg'}
                  alt="Imagem do post"
                  width={478}
                  height={430}
                  className={styles.blogImage}
                />
              </div>
            )
          }
          if (post.id === '03') {
            return (
              <div
                key={post.id}
                className={`${styles.blogPost} ${styles.blogDiv3}`}
              >
                <Image
                  src={post.capa_image || '/default-image.jpg'}
                  alt="Imagem do post"
                  width={600}
                  height={400}
                  className={styles.blogImage}
                />
                <div className={styles.blogText}>
                  <h2 className={styles.blogHeading}>{post.title}</h2>
                  <h3 className={styles.blogSubtitle}>{post.subtitle}</h3>
                </div>
              </div>
            )
          }
          return null
        })}
      </section>
    </main>
  )
}
