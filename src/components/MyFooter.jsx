import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

function MyFooter() {
  return (
    <>
      <footer className="container w-50 text-secondary mt-auto text-secondary">
        <div className="d-flex justify-content-start w-100 gap-2 fs-5 mt-5">
          <Facebook />
          <Instagram />
          <Twitter />
          <Youtube />
        </div>
        <div className="row">
          <div className="col-6 col-md-3">
            <ul className="px-0">
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Audio and Subtitles
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Media Center
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <ul className="px-0">
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Audio Description
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Legal Notices
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <ul className="px-0">
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <ul className="px-0">
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>
          <div>
            <button type="button" className="btn btn-outline-secondary bg-dark mb-3 rounded-0">
              Service Code
            </button>
          </div>
          <p>&copy; 1997-2019 Netflix, Inc &#123;i-0d00fcda2fdf9c0de&#124;</p>
        </div>
      </footer>
    </>
  );
}
export default MyFooter;
