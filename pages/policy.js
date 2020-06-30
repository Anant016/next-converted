import Link from "next/link";
import Head from "next/head";
// import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";

const PrivacyPolicy = () => (
  <div>
    <Head>
      <title>Policy</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
    </Head>
    <center>
      <Link href="/">
        <a style={{ fontSize: "500%", fontFamily: "cursive" }}>
          Privacy - policy
        </a>
      </Link>
    </center>
    <br />
    <div className="lead" style={{ fontSize: "160%" }}>
      <ul className="justify-content-start ml-5 col">
        <li className="row d-flex">
          This website is not promoting any brand or person and not taking any
          money from any business.
        </li>
        <li className="row d-flex">
          This website does not guarantee or uphold to any offers, as offer
          changes and are not provided by us.
        </li>
        <li className="row d-flex">
          This website may not be up to date. We do try to update it.
        </li>
      </ul>
    </div>
    <Footer />
  </div>
);

export default PrivacyPolicy;
