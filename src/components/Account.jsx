import { Component } from "react";

class Account extends Component {
  render() {
    return (
      <>
        {" "}
        <div className="container w-40 mt-5">
          <h1>EDIT PROFILE</h1>
          <hr />
          <div className="row pt-2 gap-3">
            <div className="col-12 col-md-2 px-0">
              <div className="px-0 position-relative">
                <img className="img-fluid" src="./assets/avatar.png" alt="propic" />
                <div className="bg-black position-absolute rounded-circle matita d-flex justify-content-center align-items-center bottom-0 left-0 m-2 border border-light border-1">
                  <i className="bi bi-pencil-fill"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-md px-0">
              <div className="bg-secondary px-2 py-1 fs-5 w-75">Strive Student</div>
              <p className="text-secondary fs-5 mt-5">Language:</p>
              <select className="bg-black rounded-0 text-light" name="Language" id="Language">
                <option value="English">English</option>
                <option value="Italiano">Italiano</option>
                <option value="Shqip">Shqip</option>
              </select>
              <hr />
              <p className="text-secondary fs-5">Maturity Settings:</p>
              <button className="text-light darker border-0 px-3 py-1 mb-3">ALL MATURITY RATINGS</button>
              <p>
                Show titles of <b>all maturity ratings</b> for this profile
              </p>
              <button className="border border-secondary text-secondary bg-dark px-3">EDIT</button>
              <hr />
              <p className="text-secondary fs-5">Autoplay Controls</p>
              <input
                type="checkbox"
                id="nextEpisode"
                className="form-check-input rounded-0 border border-secondary bg-secondary bg-dark p-2 fw-bold"
              />
              <label htmlFor="next">Autoplay next episode in a series on all devices</label>
              <br />
              <input
                type="checkbox"
                id="previews"
                className="form-check-input rounded-0 border border-secondary bg-secondary bg-dark p-2 fw-bold"
              />
              <label htmlFor="previews">Autoplay previews while browsing on all devices</label>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <hr />
              <div className="d-flex justify-content-center justify-content-md-between flex-wrap flex-md-nowrap gap-2">
                <button className="px-2 w-75 w-md-25 fs-6 fw-bold border border-black bg-light">SAVE</button>
                <button className="px-2 w-75 w-md-25 fs-6 text-light border border-secondary bg-dark">CANCEL</button>
                <button className="px-2 w-75 w-md-25 fs-6 text-light border border-secondary bg-dark">
                  DELETE PROFILE
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Account;
