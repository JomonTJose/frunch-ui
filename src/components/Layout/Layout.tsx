import React from 'react'
import Footer from '../common/footer'
import Header from '../common/header'

const Layout = ({ children }: any) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout