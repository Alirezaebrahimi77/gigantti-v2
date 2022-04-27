import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router"
import { wrapper } from '../redux/store';
const progress = new ProgressBar({
  size: 4,
  color: "#6B9B37",
  className: 'z-50',
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
