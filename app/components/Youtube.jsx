import Image from 'next/image'
import videos from '../misc/videos.json'
import styles from './videos.module.css'
import Link from 'next/link'

export default function Youtube () {
  const banner = [
    <div className={styles.video_category_banner} key={0}><span>Últimas novedades</span></div>,
    <div className={styles.video_category_banner} key={1}><span>Ultimos videos</span></div>,
    <div className={styles.video_category_banner} key={2}><span>Cursos y charlas</span></div>
  ]
  return (
    <>
      {videos.map((category, key) => {
        return (
          <div key={key} className={styles.video_category}>
            {banner[key]}
            <div className={styles.video_wrapper}>
              {category.map(video => {
                return (
                  <div key={video.videoId} className={styles.video}>
                    <Link href={`https://www.youtube.com/watch?v=${video.videoId}`} target='_blank'>
                      <Image
                        alt={video.title}
                        width={240}
                        height={135}
                        src={video.img}
                      />
                    </Link>
                    <p>{video.title}</p>
                    <p>{video.publishedDate}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </>
  )
}
