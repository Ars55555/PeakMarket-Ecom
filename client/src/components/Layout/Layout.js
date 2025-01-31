import React from 'react'
import { Header } from './Header'
import {Footer} from './Footer';
import {Helmet} from "react-helmet";
// import { ToastContainer} from 'react-toastify';
import {Toaster} from 'react-hot-toast';



export default function Layout({children,title,description,keywords,author}) {
  return (
    <div>
        <Helmet>
            <meta charSet='utf-8'/>
            
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta name="author" content={author}></meta>
            <title>{title}</title>
        </Helmet>


        <Header/>
        <main style={{minHeight:"70vh"}}>
        <Toaster/>
        {children}
        </main>
        <Footer/>
    </div>
  );
};
Layout.defaultProps={
    title:"Ecommerce App - Shop Now",
    description:"mern project",
    keywords:"mern,react,node,mongodb",
    author:"ARS",
};
