import Link from "next/link";
import Head from "next/head";

import Footer from "../components/Footer";

const About = () => (
  <div>
    <Head>
      <title>About</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
    </Head>
    <center>
      <Link href="/">
        <a style={{ fontSize: "500%", fontFamily: "cursive" }}>Run-Coupon</a>
      </Link>
    </center>
    <br />
    <div className="lead" style={{ fontSize: "160%" }}>
      <ul className="justify-content-start ml-5 col">
        <li className="row d-flex">
          Almost Every Company, to increase their customers have a referral
          policy.
        </li>
        <li className="row d-flex">
          In which existing customers help bring more customers and in turn get
          rewards to both the old customer and the new customer.
        </li>
        <li className="row d-flex">
          So this platform is to help those first conversions,
          <b> and to find these coupon easily. </b> And get some rewards.
        </li>
        <li className="row d-flex">
          If you like the work. <b>Donate!!! </b>So I can keep this website
          updated and up and running for everyone.
        </li>
      </ul>
      <center>
        <a href="https://www.buymeacoffee.com/anant016" target="_blank">
          <img
            src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
            alt="Buy Me A Coffee"
            style={{ height: "51px", width: "217px" }}
          />
        </a>
      </center>
    </div>
    <Footer />
  </div>
);

export default About;
