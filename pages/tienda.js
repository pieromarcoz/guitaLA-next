import Layout from '../components/layout'
import Guitarra from '../components/guitarra'
import styles from '../styles/grid.module.css'

export default function Tienda({guitarras}) {
  return (
    <Layout
      title='Tienda Virtual'
      description='Tienda virtual, venta de guitarrasm GuitarLa'
    >
        <main className='contenedor'>
          <h1 className='heading'>Nuestra Colección</h1>
          <div className={styles.grid}>
            {guitarras?.map(guitarra => (
              <Guitarra
                key={guitarra.id}
                guitarra={guitarra.attributes}
              />
            ))}
          </div>
        </main>
    </Layout>
  )
}

// export async function getStaticProps(){
//   const respouesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//   const { data: guitarras } = await respouesta.json()

//   return {props:{
//     guitarras
//   }}
// }

export async function getServerSideProps(){
  const respouesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const { data: guitarras } = await respouesta.json()
  return {props:{
    guitarras
  }}
}