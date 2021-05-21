import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from 'next/router' // Componente para configurar rotas
import styles from '../../styles/Home.module.css'

export default function PostItem() {

    // Configuração da Rota
    // a página ser chamado de "id" cria dinamismo
    const router = useRouter()
    const {id} = router.query // nome do arquivo da página para identificação da rota
    

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          POST ACESSADO: {id} 
        </h1>

        
      </main>

    </div>
  )
}
