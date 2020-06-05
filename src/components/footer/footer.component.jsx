import React from 'react';
import './footer.styles.scss'

const Footer = () => {
    return (
        <div>
        <footer className="white page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="indigo-text text-darken-4">Piggy Vest</h5>
                <p className="blue-grey-text text-darken-1 typo">PiggyVest <span className="black-text">(formerly piggybank.ng)</span> is the largest online savings & investing platform in Nigeria.For over 4 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.</p>
                <p className="blue-grey-text text-darken-1 typo">Office: Tesmot House, 3 Abdulrahman Okene Close, off Ligali Ayorinde Street, Victoria Island, Lagos.<br />
                <span className="black-text">0700 933 933 933 (Mon-Fri from 9am-5pm) - contact@piggyvest.com</span>
                </p>
              </div>
              <div className="col l2 offset-l2 s12">
                <h5 className="blue-grey-text text-darken-1 typo2">Quick Links</h5>
                <ul>
                  <li><a className="grey-text text-darken-3" href="#!">AutoSave™</a></li>
                  <li><a className="grey-text text-darken-3" href="#!">PiggyLink</a></li>
                  <li><a className="grey-text text-darken-3" href="#!">Quick Save™</a></li>
                  <li><a className="grey-text text-darken-3" href="#!">SafeLock™</a></li>
                  <li><a className="grey-text text-darken-3" href="#!">Withdrawals & Breaking</a></li>
                  <li><a className="grey-text text-darken-3" href="#!">Salary Management</a></li>
                </ul>
              </div>
              <div className="col l2 offset-l right s12">
                <h5 className="blue-grey-text text-darken-1 typo2">COMPANY</h5>
                <ul>
                  <li><a className="grey-text text-darken-3" href="#!">About</a></li>
                  <li><a className="grey-text text-darken-3" href="#!">FAQs</a></li>
                  <li><a className="grey-text text-darken-3" href="#!">Terms of Use</a></li>
                  <li><a className="grey-text text-darken-3" href="#!">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="white footer-copyright">
            <div className="container grey-text text-darken-3">
            © 2016 - 2020 PiggyTech Global Limited - RC 1405222
            {/* <a className="grey-text text-darken-3 right" href="#!">More Links</a> */}
            </div>
          </div>
        </footer>
        </div>
    )
}

export default Footer;