/**
 * Index du site
 */
 import Head from 'next/head'
 import Layout, { siteTitle } from '../components/layout'

 //import du style pour les éléments
 import utilStyles from '../styles/utils.module.css'
 
 export default function Home() {
   return (
     // le contenu rentré à l'intérieur de layout correspond à children
     // layout prend en parametre home pour dire que l'on est sur la home et faire les modifs en conséquence
     <Layout home>
       <Head>
         <title>{siteTitle}</title>
       </Head>
       <section className={utilStyles.headingMd}>
         <p>Hi, I'm <strong>Benjamin</strong>, I really love coding and create beautiful website, I learn React, NodeJS and technologies that interest myself</p>
         <p>
           This is a sample website - to train myself to use nextjs
           <a href="https://nextjs.org/learn"> our Next.js tutorial</a>.
         </p>
       </section>
     </Layout>
   )
 }