import Link from "next/link";
import Head from "next/head";

const Footer = () => {
  var date = new Date();
  return (
    <div
      className="fixed-bottom mt-5"
      style={{ height: "50px", backgroundColor: "lightblue" }}
    >
      <div>
        <div className="mt-2">
          <div className="row">
            <div className="col ml-5">
              <Link href="/about">
                <a style={{ color: "black" }} style={{ color: "black" }}>
                  About
                </a>
              </Link>
              <br />
              <Link href="/policy">
                <a style={{ color: "black" }} style={{ color: "black" }}>
                  Privacy Policy
                </a>
              </Link>
            </div>
            <div className="col">©{date.getFullYear()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
