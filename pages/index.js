import Layout from "../components/Layout";
import Category from "../components/Category";
import Banners from "../components/Banners";
import Products from "../components/Products";
import iRobot from "../public/products/irobot.png";
import asus from "../public/products/asus.png";
import lg from "../public/products/lg.png";
import xplora from "../public/products/xplora.png";
import acer from "../public/products/acer.png";
import braun from "../public/products/braun.png";
import electrolux from "../public/products/electrolux.png";
import irobotRoomba from "../public/products/irobot-roomba.png";
import siemens from "../public/products/siemens.png";
import oneplus from "../public/products/oneplus.png";
import lg77 from "../public/products/lg-77.png";
import sectionBackground from "../public/homePageBanners/sale-pink-background.webp";
import vacumBackground from "../public/homePageBanners/vacumBg.webp";
import appleBackground from "../public/homePageBanners/appleBg.webp"
import outdoorBg from "../public/homePageBanners/outdoorBg.webp";

import samsung from "../public/blogs/samsung.png"
import operaattorit from "../public/blogs/operaattorit.webp"
import grilli from "../public/blogs/grilli.webp"
import gaming from "../public/blogs/gaming.webp"
import Blogs from "../components/Blogs";

// Badges
import drive from "../public/badges/drive.webp"
import laajat from "../public/badges/laajat.webp"
import live from "../public/badges/live.webp"
import palautus from "../public/badges/palautusoikeus.webp"
import samaHinta from "../public/badges/sama.webp"
import vaara from "../public/badges/varaa.webp"
import Badges from "../components/Badges";


// get products 
import {getProducts} from "../redux/actions/productActions"
import {wrapper, store} from "../redux/store"
import { useDispatch, useSelector } from "react-redux";



export default function Home({users, cookie}) {
  const { products } = useSelector(state => state.allProducts)

  const productsData = [
    {
      backgroundUrl: sectionBackground,
      sectionTitle: "Superp????si??isen suosituimmat tarjoukset",
      sectionTitleColor: "#fff",
      buttonText: "Katso kaikki tarjoukset",
      buttonLink: "/tarjoukset",
    }

  ]
  const vacumSectionData = [
    {
      backgroundUrl: vacumBackground,
      sectionTitle: "Bosch-imureita jopa -70%",
      sectionTitleColor: "#000",
      buttonText: "Tutustu tarjouksiin",
      buttonLink: "/tarjoukset"
    }

  ]
  const outdoorSectionData = [
    {
      backgroundUrl: outdoorBg,
      sectionTitle: "Hue Outdoor-tuotteet",
      sectionTitleColor: "#fff",
      buttonText: "Tarjouksiin",
      buttonLink: "/tarjoukset"
    }

  ]
  const appleSectionData = [
    {
      backgroundUrl: appleBackground,
      sectionTitle: "Apple-uutuudet",
      sectionTitleColor: "#000",
      buttonText: "Tutustu tarjouksiin",
      buttonLink: "/tarjoukset"
    }

  ]
  const blogsData = [
    {
      id: 35252,
      image: samsung,
      title: "Osta Samsung QN85A -sarjan televisio, saat soundbarin kaupan p????lle",
      text: "Samsung HW-Q810A soundbarilla koet huippurealistisen ja syv??n ????nentoiston sek?? kristallinkirkkaat dialogit riippumatta siit??, miss?? p??in huonetta olet. Juuri nyt saat soundbarin kaupan p????lle, kun ostat 55-85 Samsung QN85A -sarjan television. Etusi 499???, voimassa 24.4. asti.",
      buttonText: "Hy??dynn?? etu"

    },
    {
      id: 6352,
      image: gaming,
      title: "Gigantin kuukauden Gaming-tarjoukset",
      text: "Peleiss?? menestyminen vaatii oikean tyyppiset laitteet. P??ivit??mme sivulle kuukauden parhaat gaming-tarjoukset, kuten pelitietokoneet, kuulokkeet, ohjaimet ja pelituolit. Varmista itsellesi paras laitteisto edullisempaan hintaan!",
      buttonText: "Lue lis????"

    },
    {
      id: 355432,
      image: grilli,
      title: "10 vinkki?? t??ydelliseen grillikes????n",
      text: "Aurinko, kes?? ja grillaus kuuluvat yhteen. On aina yht?? mukavaa kutsua yst??vi?? ja perheenj??seni?? puutarhajuhliin, joissa tarjoillaan hyv???? grilliruokaa. Noudattamalla n??it?? vinkkej?? voit tulla tunnetuksi naapurustosi grillimestarina.",
      buttonText: "Lue lis????"

    },
    {
      id: 3312,
      image: operaattorit,
      title: "Sinulle sopiva puhelinliittym?? ",
      text: "Haussa uusi puhelinliittym?? tai laajakaista? Gigantista saat parhaat tarjoukset Suomen suurimmilta operaattoreilta! Teemme yhteisty??t?? Suomen kolmen suurimman teleoperaattorin ??? DNA:n, Elisan ja Telian ??? kanssa, joten myym??l??ist??mme l??yd??t laajan valikoiman puhelin- ja laajakaistaliittymi??. Asiantuntevat myyj??mme auttavat sinua l??yt??m????n juuri sinulle sopivimman vaihtoehdon.",
      buttonText: "Lue lis????"

    },
  ]

  const badgesData = [
    {
      id: 32532,
      image: drive,
      text: "Gigantti Drive-in"
    },
    {
      id: 35432,
      image: laajat,
      text: "Gigantti Laajat asennus"
    },
    {
      id: 31132,
      image: live,
      text: "Gigantti Live-myyj??"
    },
    {
      id: 35532,
      image: palautus,
      text: "Gigantti Palautusoikeus"
    },
    {
      id: 654532,
      image: samaHinta,
      text: "Gigantti Sama hinta"
    },
    {
      id: 432442,
      image: vaara,
      text: "Gigantti Vaara & Nouda"
    },
  ]

  return (
    <Layout>
      <Category />
      <Banners />
      <Products productsData={productsData[0]} products={products}/>
      <Products productsData={vacumSectionData[0]} products={products}/>
      <Products productsData={outdoorSectionData[0]} products={products}/>
      <Blogs blogsData={blogsData} />
      <Products productsData={appleSectionData[0]} products={products}/>
      <Badges badges={badgesData}/>

    </Layout>
  );
}


export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req }) => {
  await store.dispatch(getProducts(req))
})
