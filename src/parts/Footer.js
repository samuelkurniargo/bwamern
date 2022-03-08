import React from "react";

import Buton from "elements/Button";

import IconText from "parts/IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{width: 350}}>
            <IconText />
            <p className="brand-tagline">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Buton type="link" href="/register">
                  New Account
                </Buton>
              </li>
              <li className="list-group-item">
                <Buton type="link" href="/properties">
                  Start Booking a Room
                </Buton>
              </li>
              <li className="list-group-item">
                <Buton type="link" href="/use-payments">
                  Use Payments
                </Buton>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Buton type="link" href="/careers">
                  Our Careers
                </Buton>
              </li>
              <li className="list-group-item">
                <Buton type="link" href="/privacy">
                  Privacy
                </Buton>
              </li>
              <li className="list-group-item">
                <Buton type="link" href="/terms">
                  Terms & Conditions
                </Buton>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Buton
                  isExternal
                  type="link"
                  href="mailto:support@staycation.id"
                >
                  support@staycation.id
                </Buton>
              </li>
              <li className="list-group-item">
                <Buton isExternal type="link" href="telp:+622122081996">
                  021 - 2208 - 1996
                </Buton>
              </li>
              <li className="list-group-item">
                <span>Staycation, Kemang, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
        <div className="col text-center copyrights">
            Copyright 2019 . All rights reserved . Staycation
          </div>
          </div>
      </div>
    </footer>
  );
}
