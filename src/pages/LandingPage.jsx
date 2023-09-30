import React, { useEffect, useRef } from "react";

import Header from "../parts/Header";
import Hero from "../parts/Hero";
import MostPicked from "../parts/MostPicked";
import Categories from "../parts/Categories";
import Testimony from "../parts/Testimony";

import landingPage from "../json/landingPage.json";
import Footer from "../parts/Footer";

// export default class LandingPage extends Component {
//   constructor(props) {
//     console.log(`cek props dari landingpage -> ${ props}`)
//     super(props);
//     this.refMostPicked = React.createRef();
//   }

//   componentDidMount() {
//     window.title = "Staycation | Home";
//     window.scrollTo(0, 0);
//   }

//   render() {
//     return (
//       <>
//         <Header {...this.props}></Header>
//         <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
//         <MostPicked
//           refMostPicked={this.refMostPicked}
//           data={landingPage.mostPicked}
//         />
//         <Categories data={landingPage.categories} />
//         <Testimony data={landingPage.testimonial} />
//         <Footer />
//       </>
//     );
//   }
// }

export default function LandingPage(props) {
  const refMostPicked = useRef();
  // window.title dan window.scrollTo belum berhasil diimplemntasikan
  useEffect(() => {
    document.title = "Staycation | Home";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header {...props}></Header>
      <Hero refMostPicked={refMostPicked} data={landingPage.hero} />
      <MostPicked refMostPicked={refMostPicked} data={landingPage.mostPicked} />
      <Categories data={landingPage.categories} />
      <Testimony data={landingPage.testimonial} />
      <Footer />
    </>
  );
}
