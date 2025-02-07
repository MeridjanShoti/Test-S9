import { Component } from "react";

class Settings extends Component {
  render() {
    return (
      <div className="container w-50 text-secondary mt-5">
        <h1 className="text-black">Account</h1>
        <hr />
        <div className="row">
          <div className="col-3">
            <p>MEMBERSHIP &AMP; BILLING</p>
            <button className="border-1 border-light">Cancel Membership</button>
          </div>
          <div className="col">
            <div className="row">
              <div className="col text-start">
                <p className="text-black fw-bold">student@strive.school</p>
                <p>Password: ********</p>
                <p>Phone: 321 044 1279</p>
              </div>
              <div className="col text-end text-primary">
                <p>Change Account email</p>
                <p>Change Password</p>
                <p>Change phone number</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col text-start">
                <p className="text-black fw-bold">
                  <span>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0388/3771/4989/files/PAYPAL_LOGO_480x480.png?v=1650301781"
                      alt="logo"
                      className="logo"
                    />
                  </span>
                  admin@strive.school
                </p>
              </div>
              <div className="col text-end text-primary">
                <p>Update payment info</p>
                <p>Billing details</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col text-end text-primary">
                <p>Redeem gift card or promo code</p>
                <p>Where to buy gift cards</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-3">PLAN DETAILS</div>
          <div className="col">
            <div className="row">
              <div className="col text-start text-black">
                <p className="fw-bold">
                  Premium
                  <span>
                    <img src="./assets/4NCFBAA.png" alt="logo" className="logo" />
                  </span>
                </p>
              </div>
              <div className="col text-end text-primary">
                <p>Change plan</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-3">SETTINGS</div>
          <div className="col text-start text-primary">
            <p>Parental controls</p>
            <p>Test Participation</p>
            <p>Manage download services</p>
            <p>Activate a device</p>
            <p>Recent device streaming activity</p>
            <p>Sign out of all devices</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-3">MY PROFILE</div>
          <div className="col">
            <div className="row">
              <div className="col text-start text-black fw-bold">
                <span>
                  <img src="./assets/avatar.png" alt="propic" className="logo" />
                </span>
                Strive Student
              </div>
              <div className="col text-end text-primary">
                <p>manage profiles</p>
                <p>Add profile email</p>
              </div>
            </div>
            <div className="row text-primary">
              <div className="col text-start">
                <p>Language</p>
                <p>Playback settings</p>
                <p>Subtitle Appearance</p>
              </div>
              <div className="col text-start">
                <p>Viewing activity</p>
                <p>Ratings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Settings;
