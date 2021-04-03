import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Top from './components/Topbar/Top';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Shop from './components/shop/Shop';
import Menu from './components/menu/Menu';
import Item from './components/item/Item';
import Report from './components/report/Report';
const Home = () => {
    return (
        <>
 
<div>
<Header />
<Navbar />
<Content />
<Top />
<About />
<Shop />
<Menu />
<Report />
<Contact />
<Item />
<Footer />

</div>

        </>
    );
}

export default Home;