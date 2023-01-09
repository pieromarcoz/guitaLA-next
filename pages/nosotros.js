import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title='Nosotros'
      description='Nosotros Informacion'
    >
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>
        <div className={styles.contenido}>
          <Image src={'/img/nosotros.jpg'} width={1000} height={800} alt='Imagen sobre nosotros'/>
          <div>
            <p>Quisque quis mi accumsan, varius massa a, tincidunt nisl. Suspendisse potenti. Cras condimentum justo a nisi faucibus pharetra. Pellentesque id nulla at neque placerat congue eu ac odio. Pellentesque semper enim arcu, sit amet tincidunt quam faucibus sed. Mauris congue suscipit diam, ut venenatis urna egestas in. Curabitur faucibus feugiat venenatis. Aliquam pharetra sapien odio. Vestibulum imperdiet arcu arcu. Aenean ullamcorper diam quis nulla iaculis, finibus convallis lorem porta. Vivamus sed nulla quis dui blandit pellentesque blandit at ex. Pellentesque sed pharetra nulla. Nam ut felis mi. Aliquam finibus, neque vel tempus commodo, erat urna varius lacus, sit amet congue nibh ligula ut justo. Sed efficitur dapibus gravida.</p>
            <p>Phasellus tristique lorem ut vehicula lobortis. Aenean neque sem, bibendum id tellus eu, feugiat ultrices felis. Fusce in vestibulum velit. In hac habitasse platea dictumst. Suspendisse ornare massa in eros accumsan, ut mattis massa dictum. Vivamus fermentum dolor ac lectus laoreet mollis. Vestibulum semper ligula et fermentum porta. Suspendisse sollicitudin sollicitudin sapien, sed vehicula tellus tristique ac. Donec dictum cursus dui, et congue nibh euismod eu.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
