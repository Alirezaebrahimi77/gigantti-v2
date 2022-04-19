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

export default function Home() {

  const productsData = [
    {
      backgroundUrl: sectionBackground,
      sectionTitle: "Superpääsiäisen suosituimmat tarjoukset",
      sectionTitleColor: "#fff",
      buttonText: "Katso kaikki tarjoukset",
      buttonLink: "/tarjoukset",
      products:[
        {
          productNro: 356501,
          imageSrc: iRobot,
          productTitle: "Irobot Roomba i6 robotti-imuri i6158 (musta)",
          rating: 4,
          numOfReviews: 23,
          price: 295,
          normalPrice: 449,
          savePrice: 154,
          offerText: "Tarjous voimassa su 24.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 887,
              desc: "Käyttöaika jopa 75 minuuttia"
            },
            {
              descId: 993,
              desc: "Imprint Smart Mapping -Tek"
            },
            {
              descId: 532,
              desc: "iRobot HOME -sovellus"
            }
          ]
        },
        {
          productNro: 305410,
          imageSrc: asus,
          productTitle: 'Asus VivoBook 14 X413 i3/8/256 14" kannettava ',
          rating: 5,
          numOfReviews: 43,
          price: 399,
          normalPrice: 449,
          savePrice: 50,
          offerText: " Esittelytuote / asiakaspalautus alk. 509€ ",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 5423,
              desc: 'Intel® Core™ i3-1005G1'
            },
            {
              descId: 134,
              desc: '14" FHD IPS -näyttö'
            },
            {
              descId: 643,
              desc: '8 GB DDR4 RAM, 256 GB SSD'
            }
          ]
        },
        {
          productNro: 3020098,
          imageSrc: lg,
          productTitle: 'LG 65" C1 4K OLED älytelevisio (2021)',
          rating: 4.6,
          numOfReviews: 41,
          price: 1499,
          normalPrice: 1699,
          savePrice: 200,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 30009438,
          imageSrc: xplora,
          productTitle: 'Xplora XGO2 lasten kellopuhelin (musta) ',
          rating: 4.7,
          numOfReviews: 7,
          price: 77,
          normalPrice: 139,
          savePrice: 62,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 30540098,
          imageSrc: acer,
          productTitle: 'Acer Aspire Vero i5/8/512 15.6" kannettava ',
          rating: 0,
          numOfReviews: 0,
          price: 549,
          normalPrice: 749,
          savePrice: 200,
          offerText: " Esittelytuote / asiakaspalautus alk. 524€ ",
          offerDetails: "Ei saatavilla verkkokaupasta",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 305420098,
          imageSrc: braun,
          productTitle: 'Braun Silk-expert PRO 3 valoimpulssilaite PL3132 ',
          rating: 3,
          numOfReviews: 41,
          price: 179,
          normalPrice: 349,
          savePrice: 170,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 30054098,
          imageSrc: electrolux,
          productTitle: 'Electrolux SilentPerformer pölynimuri ESP74DB ',
          rating: 4,
          numOfReviews: 27,
          price: 89.95,
          normalPrice: 199,
          savePrice: 109.05,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 4232,
              desc: 'Työskentelysäde: 12 m'
            },
            {
              descId: 436622,
              desc: 'HEPA 12 -suodatin'
            },
            {
              descId: 45542,
              desc: '3-in-1-suulake'
            }
          ]
        },
        {
          productNro: 212098,
          imageSrc: irobotRoomba,
          productTitle: 'iRobot Roomba i4+ robotti-imuri 43371515 ',
          rating: 3.8,
          numOfReviews: 5,
          price: 349,
          normalPrice: 749,
          savePrice: 400,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 45098,
          imageSrc: siemens,
          productTitle: 'Siemens EQ.500 kahvikone TQ507RX3 ',
          rating: 4.6,
          numOfReviews: 41,
          price: 1499,
          normalPrice: 1699,
          savePrice: 200,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 54398,
          imageSrc: oneplus,
          productTitle: 'OnePlus 9 5G älypuhelin 8/128GB (Astral Black) ',
          rating: 4.6,
          numOfReviews: 41,
          price: 444,
          normalPrice: 699,
          savePrice: 255,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 1444098,
          imageSrc: lg77,
          productTitle: 'LG 77" B1 4K OLED älytelevisio (2021) ',
          rating: 4.7,
          numOfReviews: 9,
          price: 1999,
          normalPrice: 2399,
          savePrice: 400,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },

      ]
    }

  ]
  const vacumSectionData = [
    {
      backgroundUrl: vacumBackground,
      sectionTitle: "Bosch-imureita jopa -70%",
      sectionTitleColor: "#000",
      buttonText: "Tutustu tarjouksiin",
      buttonLink: "/tarjoukset",
      products:[
        {
          productNro: 356501,
          imageSrc: iRobot,
          productTitle: "Irobot Roomba i6 robotti-imuri i6158 (musta)",
          rating: 4,
          numOfReviews: 23,
          price: 295,
          normalPrice: 449,
          savePrice: 154,
          offerText: "Tarjous voimassa su 24.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 887,
              desc: "Käyttöaika jopa 75 minuuttia"
            },
            {
              descId: 993,
              desc: "Imprint Smart Mapping -Tek"
            },
            {
              descId: 532,
              desc: "iRobot HOME -sovellus"
            }
          ]
        },
        {
          productNro: 305410,
          imageSrc: asus,
          productTitle: 'Asus VivoBook 14 X413 i3/8/256 14" kannettava ',
          rating: 5,
          numOfReviews: 43,
          price: 399,
          normalPrice: 449,
          savePrice: 50,
          offerText: " Esittelytuote / asiakaspalautus alk. 509€ ",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 5423,
              desc: 'Intel® Core™ i3-1005G1'
            },
            {
              descId: 134,
              desc: '14" FHD IPS -näyttö'
            },
            {
              descId: 643,
              desc: '8 GB DDR4 RAM, 256 GB SSD'
            }
          ]
        },
        {
          productNro: 3020098,
          imageSrc: lg,
          productTitle: 'LG 65" C1 4K OLED älytelevisio (2021)',
          rating: 4.6,
          numOfReviews: 41,
          price: 1499,
          normalPrice: 1699,
          savePrice: 200,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 30009438,
          imageSrc: xplora,
          productTitle: 'Xplora XGO2 lasten kellopuhelin (musta) ',
          rating: 4.7,
          numOfReviews: 7,
          price: 77,
          normalPrice: 139,
          savePrice: 62,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 30540098,
          imageSrc: acer,
          productTitle: 'Acer Aspire Vero i5/8/512 15.6" kannettava ',
          rating: 0,
          numOfReviews: 0,
          price: 549,
          normalPrice: 749,
          savePrice: 200,
          offerText: " Esittelytuote / asiakaspalautus alk. 524€ ",
          offerDetails: "Ei saatavilla verkkokaupasta",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 305420098,
          imageSrc: braun,
          productTitle: 'Braun Silk-expert PRO 3 valoimpulssilaite PL3132 ',
          rating: 3,
          numOfReviews: 41,
          price: 179,
          normalPrice: 349,
          savePrice: 170,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 30054098,
          imageSrc: electrolux,
          productTitle: 'Electrolux SilentPerformer pölynimuri ESP74DB ',
          rating: 4,
          numOfReviews: 27,
          price: 89.95,
          normalPrice: 199,
          savePrice: 109.05,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 4232,
              desc: 'Työskentelysäde: 12 m'
            },
            {
              descId: 436622,
              desc: 'HEPA 12 -suodatin'
            },
            {
              descId: 45542,
              desc: '3-in-1-suulake'
            }
          ]
        },
        {
          productNro: 212098,
          imageSrc: irobotRoomba,
          productTitle: 'iRobot Roomba i4+ robotti-imuri 43371515 ',
          rating: 3.8,
          numOfReviews: 5,
          price: 349,
          normalPrice: 749,
          savePrice: 400,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 45098,
          imageSrc: siemens,
          productTitle: 'Siemens EQ.500 kahvikone TQ507RX3 ',
          rating: 4.6,
          numOfReviews: 41,
          price: 1499,
          normalPrice: 1699,
          savePrice: 200,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 54398,
          imageSrc: oneplus,
          productTitle: 'OnePlus 9 5G älypuhelin 8/128GB (Astral Black) ',
          rating: 4.6,
          numOfReviews: 41,
          price: 444,
          normalPrice: 699,
          savePrice: 255,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 1444098,
          imageSrc: lg77,
          productTitle: 'LG 77" B1 4K OLED älytelevisio (2021) ',
          rating: 4.7,
          numOfReviews: 9,
          price: 1999,
          normalPrice: 2399,
          savePrice: 400,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },

      ]
    }

  ]
  const outdoorSectionData = [
    {
      backgroundUrl: outdoorBg,
      sectionTitle: "Hue Outdoor-tuotteet",
      sectionTitleColor: "#fff",
      buttonText: "Tarjouksiin",
      buttonLink: "/tarjoukset",
      products:[
        {
          productNro: 356501,
          imageSrc: iRobot,
          productTitle: "Irobot Roomba i6 robotti-imuri i6158 (musta)",
          rating: 4,
          numOfReviews: 23,
          price: 295,
          normalPrice: 449,
          savePrice: 154,
          offerText: "Tarjous voimassa su 24.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 887,
              desc: "Käyttöaika jopa 75 minuuttia"
            },
            {
              descId: 993,
              desc: "Imprint Smart Mapping -Tek"
            },
            {
              descId: 532,
              desc: "iRobot HOME -sovellus"
            }
          ]
        },
        {
          productNro: 305410,
          imageSrc: asus,
          productTitle: 'Asus VivoBook 14 X413 i3/8/256 14" kannettava ',
          rating: 5,
          numOfReviews: 43,
          price: 399,
          normalPrice: 449,
          savePrice: 50,
          offerText: " Esittelytuote / asiakaspalautus alk. 509€ ",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 5423,
              desc: 'Intel® Core™ i3-1005G1'
            },
            {
              descId: 134,
              desc: '14" FHD IPS -näyttö'
            },
            {
              descId: 643,
              desc: '8 GB DDR4 RAM, 256 GB SSD'
            }
          ]
        },
        {
          productNro: 3020098,
          imageSrc: lg,
          productTitle: 'LG 65" C1 4K OLED älytelevisio (2021)',
          rating: 4.6,
          numOfReviews: 41,
          price: 1499,
          normalPrice: 1699,
          savePrice: 200,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 30009438,
          imageSrc: xplora,
          productTitle: 'Xplora XGO2 lasten kellopuhelin (musta) ',
          rating: 4.7,
          numOfReviews: 7,
          price: 77,
          normalPrice: 139,
          savePrice: 62,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 30540098,
          imageSrc: acer,
          productTitle: 'Acer Aspire Vero i5/8/512 15.6" kannettava ',
          rating: 0,
          numOfReviews: 0,
          price: 549,
          normalPrice: 749,
          savePrice: 200,
          offerText: " Esittelytuote / asiakaspalautus alk. 524€ ",
          offerDetails: "Ei saatavilla verkkokaupasta",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 305420098,
          imageSrc: braun,
          productTitle: 'Braun Silk-expert PRO 3 valoimpulssilaite PL3132 ',
          rating: 3,
          numOfReviews: 41,
          price: 179,
          normalPrice: 349,
          savePrice: 170,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 30054098,
          imageSrc: electrolux,
          productTitle: 'Electrolux SilentPerformer pölynimuri ESP74DB ',
          rating: 4,
          numOfReviews: 27,
          price: 89.95,
          normalPrice: 199,
          savePrice: 109.05,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 4232,
              desc: 'Työskentelysäde: 12 m'
            },
            {
              descId: 436622,
              desc: 'HEPA 12 -suodatin'
            },
            {
              descId: 45542,
              desc: '3-in-1-suulake'
            }
          ]
        },
        {
          productNro: 212098,
          imageSrc: irobotRoomba,
          productTitle: 'iRobot Roomba i4+ robotti-imuri 43371515 ',
          rating: 3.8,
          numOfReviews: 5,
          price: 349,
          normalPrice: 749,
          savePrice: 400,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 45098,
          imageSrc: siemens,
          productTitle: 'Siemens EQ.500 kahvikone TQ507RX3 ',
          rating: 4.6,
          numOfReviews: 41,
          price: 1499,
          normalPrice: 1699,
          savePrice: 200,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 54398,
          imageSrc: oneplus,
          productTitle: 'OnePlus 9 5G älypuhelin 8/128GB (Astral Black) ',
          rating: 4.6,
          numOfReviews: 41,
          price: 444,
          normalPrice: 699,
          savePrice: 255,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 1444098,
          imageSrc: lg77,
          productTitle: 'LG 77" B1 4K OLED älytelevisio (2021) ',
          rating: 4.7,
          numOfReviews: 9,
          price: 1999,
          normalPrice: 2399,
          savePrice: 400,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },

      ]
    }

  ]
  const appleSectionData = [
    {
      backgroundUrl: appleBackground,
      sectionTitle: "Apple-uutuudet",
      sectionTitleColor: "#000",
      buttonText: "Tutustu tarjouksiin",
      buttonLink: "/tarjoukset",
      products:[
        {
          productNro: 356501,
          imageSrc: iRobot,
          productTitle: "Irobot Roomba i6 robotti-imuri i6158 (musta)",
          rating: 4,
          numOfReviews: 23,
          price: 295,
          normalPrice: 449,
          savePrice: 154,
          offerText: "Tarjous voimassa su 24.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 887,
              desc: "Käyttöaika jopa 75 minuuttia"
            },
            {
              descId: 993,
              desc: "Imprint Smart Mapping -Tek"
            },
            {
              descId: 532,
              desc: "iRobot HOME -sovellus"
            }
          ]
        },
        {
          productNro: 305410,
          imageSrc: asus,
          productTitle: 'Asus VivoBook 14 X413 i3/8/256 14" kannettava ',
          rating: 5,
          numOfReviews: 43,
          price: 399,
          normalPrice: 449,
          savePrice: 50,
          offerText: " Esittelytuote / asiakaspalautus alk. 509€ ",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 5423,
              desc: 'Intel® Core™ i3-1005G1'
            },
            {
              descId: 134,
              desc: '14" FHD IPS -näyttö'
            },
            {
              descId: 643,
              desc: '8 GB DDR4 RAM, 256 GB SSD'
            }
          ]
        },
        {
          productNro: 3020098,
          imageSrc: lg,
          productTitle: 'LG 65" C1 4K OLED älytelevisio (2021)',
          rating: 4.6,
          numOfReviews: 41,
          price: 1499,
          normalPrice: 1699,
          savePrice: 200,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 30009438,
          imageSrc: xplora,
          productTitle: 'Xplora XGO2 lasten kellopuhelin (musta) ',
          rating: 4.7,
          numOfReviews: 7,
          price: 77,
          normalPrice: 139,
          savePrice: 62,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 30540098,
          imageSrc: acer,
          productTitle: 'Acer Aspire Vero i5/8/512 15.6" kannettava ',
          rating: 0,
          numOfReviews: 0,
          price: 549,
          normalPrice: 749,
          savePrice: 200,
          offerText: " Esittelytuote / asiakaspalautus alk. 524€ ",
          offerDetails: "Ei saatavilla verkkokaupasta",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 305420098,
          imageSrc: braun,
          productTitle: 'Braun Silk-expert PRO 3 valoimpulssilaite PL3132 ',
          rating: 3,
          numOfReviews: 41,
          price: 179,
          normalPrice: 349,
          savePrice: 170,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 30054098,
          imageSrc: electrolux,
          productTitle: 'Electrolux SilentPerformer pölynimuri ESP74DB ',
          rating: 4,
          numOfReviews: 27,
          price: 89.95,
          normalPrice: 199,
          savePrice: 109.05,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 4232,
              desc: 'Työskentelysäde: 12 m'
            },
            {
              descId: 436622,
              desc: 'HEPA 12 -suodatin'
            },
            {
              descId: 45542,
              desc: '3-in-1-suulake'
            }
          ]
        },
        {
          productNro: 212098,
          imageSrc: irobotRoomba,
          productTitle: 'iRobot Roomba i4+ robotti-imuri 43371515 ',
          rating: 3.8,
          numOfReviews: 5,
          price: 349,
          normalPrice: 749,
          savePrice: 400,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 45098,
          imageSrc: siemens,
          productTitle: 'Siemens EQ.500 kahvikone TQ507RX3 ',
          rating: 4.6,
          numOfReviews: 41,
          price: 1499,
          normalPrice: 1699,
          savePrice: 200,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 54398,
          imageSrc: oneplus,
          productTitle: 'OnePlus 9 5G älypuhelin 8/128GB (Astral Black) ',
          rating: 4.6,
          numOfReviews: 41,
          price: 444,
          normalPrice: 699,
          savePrice: 255,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },
        {
          productNro: 1444098,
          imageSrc: lg77,
          productTitle: 'LG 77" B1 4K OLED älytelevisio (2021) ',
          rating: 4.7,
          numOfReviews: 9,
          price: 1999,
          normalPrice: 2399,
          savePrice: 400,
          offerText: "Tarjous voimassa su 18.4 asti",
          offerDetails: "Saatavilla verkkokaupasta (100+) kpl",
          description: [
            {
              descId: 432,
              desc: '65" Self-lit OLED Smart TV'
            },
            {
              descId: 43422,
              desc: 'α9 Gen4 AI 4K -prosessori'
            },
            {
              descId: 43542,
              desc: 'WebOS, AI ThinQ, Game Optimiser'
            }
          ]
        },

      ]
    }

  ]

  const blogsData = [
    {
      id: 35252,
      image: samsung,
      title: "Osta Samsung QN85A -sarjan televisio, saat soundbarin kaupan päälle",
      text: "Samsung HW-Q810A soundbarilla koet huippurealistisen ja syvän äänentoiston sekä kristallinkirkkaat dialogit riippumatta siitä, missä päin huonetta olet. Juuri nyt saat soundbarin kaupan päälle, kun ostat 55-85 Samsung QN85A -sarjan television. Etusi 499€, voimassa 24.4. asti.",
      buttonText: "Hyödynnä etu"

    },
    {
      id: 6352,
      image: gaming,
      title: "Gigantin kuukauden Gaming-tarjoukset",
      text: "Peleissä menestyminen vaatii oikean tyyppiset laitteet. Päivitämme sivulle kuukauden parhaat gaming-tarjoukset, kuten pelitietokoneet, kuulokkeet, ohjaimet ja pelituolit. Varmista itsellesi paras laitteisto edullisempaan hintaan!",
      buttonText: "Lue lisää"

    },
    {
      id: 355432,
      image: grilli,
      title: "10 vinkkiä täydelliseen grillikesään",
      text: "Aurinko, kesä ja grillaus kuuluvat yhteen. On aina yhtä mukavaa kutsua ystäviä ja perheenjäseniä puutarhajuhliin, joissa tarjoillaan hyvää grilliruokaa. Noudattamalla näitä vinkkejä voit tulla tunnetuksi naapurustosi grillimestarina.",
      buttonText: "Lue lisää"

    },
    {
      id: 3312,
      image: operaattorit,
      title: "Sinulle sopiva puhelinliittymä ",
      text: "Haussa uusi puhelinliittymä tai laajakaista? Gigantista saat parhaat tarjoukset Suomen suurimmilta operaattoreilta! Teemme yhteistyötä Suomen kolmen suurimman teleoperaattorin – DNA:n, Elisan ja Telian – kanssa, joten myymälöistämme löydät laajan valikoiman puhelin- ja laajakaistaliittymiä. Asiantuntevat myyjämme auttavat sinua löytämään juuri sinulle sopivimman vaihtoehdon.",
      buttonText: "Lue lisää"

    },
  ]

  return (
    <Layout>
      <Category />
      <Banners />
      <Products productsData={productsData[0]}/>
      <Products productsData={vacumSectionData[0]}/>
      <Products productsData={outdoorSectionData[0]}/>
      <Blogs blogsData={blogsData}/>
      <Products productsData={appleSectionData[0]}/>



    </Layout>
  );
}


