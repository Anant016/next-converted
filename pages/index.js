import React from "react";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-fetch";

import { Menu, Dropdown, Button } from "antd";
import Icon from "@ant-design/icons";

import Footer from "../components/Footer";
import ItemBox from "../components/ItemBox";

import * as firebase from "firebase";
import "firebase/database";
import "firebase/firestore";
import firebaseConfig from "../config";

var config = firebaseConfig.firebaseConfig;
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.firestore();
const db1 = firebase.database();

export default class Index extends React.Component {
  state = {
    data: null,
    search: "",
    length: "",
  };
  static async getInitialProps({}) {
    let daata = [];
    var ref = await db1.ref("referrals");
    ref.on(
      "value",
      function (snapshot) {
        daata.push(snapshot.val());
      },
      function (errorObject) {}
    );
    return {
      data: daata,
      length: daata.length,
    };
  }

  loadshop() {
    let daata = [];
    let Referrals = db.collection("referrals");
    Referrals.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().category == "shopping") {
          daata.push(doc.data());
        }
      });
      this.setState({
        data: daata,
        length: daata.length,
      });
    });
  }

  loadprod() {
    let daata = [];
    let Referrals = db.collection("referrals");
    Referrals.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().category == "productive") {
          daata.push(doc.data());
        }
      });
      this.setState({
        data: daata,
        length: daata.length,
      });
    });
  }

  loadother() {
    let daata = [];
    let Referrals = db.collection("referrals");
    Referrals.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().category == "") {
          daata.push(doc.data());
        }
      });
      this.setState({
        data: daata,
        length: daata.length,
      });
    });
  }

  loadpayment() {
    let daata = [];
    let Referrals = db.collection("referrals");
    Referrals.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().category == "payment") {
          daata.push(doc.data());
        }
      });
      this.setState({
        data: daata,
        length: daata.length,
      });
    });
  }
  loadtravel() {
    let daata = [];
    let Referrals = db.collection("referrals");
    Referrals.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().category == "Travel") {
          daata.push(doc.data());
        }
      });
      this.setState({
        data: daata,
        length: daata.length,
      });
    });
  }

  loadall() {
    let daata = [];
    let Referrals = db.collection("referrals");
    Referrals.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        daata.push(doc.data());
      });
      this.setState({
        data: daata,
        length: daata.length,
      });
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    let daata = [];
    let Referrals = db.collection("referrals");
    Referrals.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (
          doc
            .data()
            .name.toLowerCase()
            .includes(this.state.search.toLowerCase())
        ) {
          daata.push(doc.data());
        }
      });
      this.setState({
        data: daata,
      });
    });
  }

  render() {
    let inData = this.props.data[0];
    console.log(inData);
    const menu = (
      <Menu>
        <Menu.Item>
          <a onClick={this.loadall.bind(this)} rel="noopener noreferrer">
            No Filter
          </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={this.loadshop.bind(this)} rel="noopener noreferrer">
            Shopping
          </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={this.loadprod.bind(this)} rel="noopener noreferrer">
            Productivity
          </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={this.loadtravel.bind(this)} rel="noopener noreferrer">
            Travel
          </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={this.loadpayment.bind(this)} rel="noopener noreferrer">
            Payment
          </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={this.loadother.bind(this)} rel="noopener noreferrer">
            Miscallaneous
          </a>
        </Menu.Item>
      </Menu>
    );

    let List = "";

    if (this.state.data != null) {
      List = this.state.data.map((item) => (
        <ItemBox key={item.name} item={item} />
      ));
    } else if (inData.length > 0) {
      List = inData.map((item) => <ItemBox key={item.name} item={item} />);
    } else {
      {
        List = <h4 className="mt-5">Loading...</h4>;
      }
    }

    return (
      <div>
        <div className="container mt-2 mb-5">
          <Head>
            <meta charSet="utf-8" />
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
              integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
              crossorigin="anonymous"
            />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#000000" />
            <meta
              name="description"
              content="Grab Coupon code is coupon codes / referrals for new users. Grab Coupons and Save Money by online offers, deals, discount by our latest Promo codes.  "
            />
            <meta
              name="keyword"
              content="grabon, grab on,grabcouponcode,grab coupon,coupon code,coupon, referral, earn money online, first users, new users, save money,save, Promo code, deals, discount,latest coupon, online shopping "
            />
            <meta
              property="og:description"
              content="Find Latest Coupons &amp; Offers For Online Shopping Sites. GrabOn Will Ensure You Get The Right Promo Codes, Deals &amp; Discount E-Gift Cards For 2020 | SAVE ON EVERYTHING"
            />
            <meta property="og:type" content="Website" />
            <title>Grab Coupon Code</title>
          </Head>
          <div className="row mb-3">
            <div className="col col-12 col-lg-3 col-sm-12 col-md-12 mt-2 mb-2 justify-content-center">
              <Dropdown overlay={menu}>
                <Button style={{ width: "100%", height: "2.7em" }}>
                  Categories <Icon type="down" />
                </Button>
              </Dropdown>
            </div>
            <div className="justify-content-center order-first  mt-2 mb-2  align-items-center col col-12 col-lg-5 col-sm-12 col-md-12 ">
              <div className="col justify-content-center  align-items-center">
                <div className="d-flex flex-row">
                  <Link href="/">
                    <a>
                      <b
                        style={{
                          fontSize: "210%",
                          fontFamily: "Sriracha, cursive",
                        }}
                      >
                        Run-Coupon
                      </b>

                      <span
                        style={{
                          fontSize: "80%",
                          fontFamily: "Sriracha, cursive",
                          backgroundColor: "white",
                        }}
                        className="rounded-pill border border-danger ml-2"
                      >
                        <span className="ml-2 mr-2">
                          {inData.length} offers
                        </span>
                      </span>
                    </a>
                  </Link>
                </div>
                <div
                  className="d-flex flex-row ml-2"
                  style={{
                    fontWeight: "bold",
                    fontFamily: "Sriracha, cursive",
                  }}
                >
                  for new users only.
                </div>
              </div>
            </div>
            <div className="col col-12 col-lg-4 col-sm-12 col-md-12  mt-2 mb-2  justify-content-end">
              <label id="search" style={{ display: "none" }}>
                Search
              </label>
              <input
                id="search"
                style={{}}
                className="form-control"
                placeholder="Search"
                type="text"
                name="search"
                onChange={this.onChange.bind(this)}
                value={this.state.search}
              />
            </div>
          </div>
          <div className="mb-5" style={{ marginBottom: "500px" }}>
            {" "}
            {List}
          </div>
          {/* <a href="https://github.com/Anant016">@anant016</a> */}.
        </div>
        <Footer />
      </div>
    );
  }
}
