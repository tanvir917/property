import Head from 'next/head';
import Header from "./Header";
import Footer from './Footer'

const HomeLayout = ({children}) => {
    return (
        <>
            <Head>
                <title>Canada’s Only Rent-to-Own Marketplace</title>
                <meta name="description" content="Why wait? With Rent-to-Own Realty, you get the ability to buy your dream home today." />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" type="image/jpg" href="/images/fav.jpg"/>
                <link rel="shortcut icon" type="image/x-icon" href="/images/fav.jpg" />
                <link rel="apple-touch-icon-precomposed" type="image/png" href="/images/fav.jpg" />

            </Head>
            <Header />
            {
                children
            }
            <Footer />
        </>
    )
}

export default HomeLayout
