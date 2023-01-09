import Image from "next/image"
import Link from "next/link"
import { formatearFecha } from "../utils/helpers"
import styles from '../styles/blog.module.css'

export default function Post({post}) {
  const { contenido, imagen, titulo, url, publishedAt } = post
  return (
    <article>
        <Image src={imagen.data.attributes.formats.medium.url} height={400} width={600} alt={`Imagen blog ${titulo}`} />
        <div className={styles.contenido}>
            <h3 className={styles.titulo}>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{contenido}</p>
            <Link href={`/blog/${url}`} className={styles.enlace}>
                Leer Post
            </Link>
        </div>
    </article>
  )
}
