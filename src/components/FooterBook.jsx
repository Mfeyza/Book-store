import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="">
      <footer className="text-center text-white footerbg">
        <div className="container pt-4">
          <section className="mb-4">
            {/* Facebook */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              style={{ rippleColor: "dark" }}
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            {/* Twitter */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              style={{ rippleColor: "dark" }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            {/* Google */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              style={{ rippleColor: "dark" }}
            >
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            {/* Instagram */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              style={{ rippleColor: "dark" }}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            {/* LinkedIn */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              style={{ rippleColor: "dark" }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            {/* GitHub */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              style={{ rippleColor: "dark" }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </section>
        </div>

        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            mfysahaf.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
