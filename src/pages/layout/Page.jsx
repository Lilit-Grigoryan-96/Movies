import React from 'react'
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";


const Page = (props) =>{
    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    )
};

export default Page;