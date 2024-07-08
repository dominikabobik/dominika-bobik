import { FC } from "react"
import styles from '../styles/blogContents.module.css'
import { blogPosts } from "./data"

export const BlogContent: FC = () => {
  return (
    <div className={styles.container}>
      {blogPosts.map(post => {
        return (
          <div key={post.title} className={styles.postWrapper}>
            <div className={styles.header}>
              <div className={styles.title}>{post.title}</div>
              <div className={styles.date}>{post.date}</div>
            </div>
            {post.img &&
              <img src={`/blog${post.img}`} alt='' className={styles.image} />
            }
          </div>
        )
      })}
    </div>
  )
} 