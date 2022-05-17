import Head from "next/head";
import CartSlider from "./cart/CartSlider";
import Footer from "./Footer";
import Header from "./Header";
import {useState} from "react"
import { useSelector } from "react-redux";
function Layout({ children }) {
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="relative w-full overflow-hidden">
      <Head>
        <title>Gigantti v2</title>
        <meta
          name="description"
          content="Gigantti, ilmainen toimitus kaikkiin nettitilauksiin!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header showCart={showCart} setShowCart={setShowCart} />
      <CartSlider showCart={showCart} setShowCart={setShowCart} cartItems={cartItems}/>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
