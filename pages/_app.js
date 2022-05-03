import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { wrapper } from "../redux/store";
import {useDispatch} from "react-redux";
import { useEffect } from "react";
import {loadCart} from "../redux/actions/cartActions"


const progress = new ProgressBar({
  size: 4,
  color: "#6B9B37",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);


function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch()
  useEffect(() => {
    const handleRouteChange = () => {
      if(typeof window !== "undefined"){
        localStorage.getItem("cartItems") ? dispatch(loadCart(JSON.parse(localStorage.getItem("cartItems")))) : []
      }
    }
    Router.events.on("routeChangeComplete", handleRouteChange)
  },[Router.events])
  useEffect(() => {
    const loadCartItems = () => {
      if(typeof window !== "undefined"){
        localStorage.getItem("cartItems") ? dispatch(loadCart(JSON.parse(localStorage.getItem("cartItems")))) : []
      }
    }
    loadCartItems()

  },[])
  return (
      <Component {...pageProps} />
  );
}

export default wrapper.withRedux(MyApp);
