import React from "react";
import {
  BsInstagram,
  BsLinkedin,
  BsSnapchat,
  BsTiktok,
  BsTwitterX,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";

function Footer() {
  return (
    <footer id="footer" className="footer position-relative dark-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <div className="footer-about">
              <a href="#" className="logo sitename">
                Umbrella Show
              </a>
              <div className="footer-contact pt-3">
                <p>UAE</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>+971 54 789 9905</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>info@umbrellashow.com</span>
                </p>
              </div>
              <div className="social-links d-flex mt-4">
                <a
                  href="https://x.com/umbrellashowuae?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitterX size={24} />
                </a>
                <a
                  href="https://wa.me/message/EKWYIR2UAENZJ1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsWhatsapp size={24} />
                </a>
                <a
                  href="https://www.tiktok.com/@umbrellashowuae?_t=ZS-8ssRyTWFGMP&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTiktok size={24} />
                </a>
                <a
                  href="https://youtube.com/@umbrellashow?si=-41svhcU3DGuC3cS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsYoutube size={24} />
                </a>

                <a
                  href="https://snapchat.com/t/jx2I1CEt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsSnapchat size={24} />
                </a>
                <a
                  href="https://www.instagram.com/umbrellashowuae?igsh=MTVpeGZjNGN5ejZqZg%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEhc8CrYk_TyQAAAZRR687gT0zktmwmic-jx7wXK8QIHLWEqppYSgmZFMEhKaqgNU9-uxr6Dg_ci1RCe3GvswBG0FbqZvu4xyIyEKKyUWeem0-cKWh-3XVJ9SRnkrQ1wkgbT7I=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fumbrella-show-050396345%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="#">Conference & Symposium Organization</a>
              </li>
              <li>
                <a href="#">Event Supplies & Preparations</a>
              </li>
              <li>
                <a href="#">Parties And Private Function Filming</a>
              </li>
              <li>
                <a href="#">Exhibitions Organizing</a>
              </li>
              <li>
                <a href="#">Folklore Dance Performances</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            {/* <form
              action="forms/newsletter.php"
              method="post"
              className="php-email-form"
            >
              <div className="newsletter-form">
                <input type="email" name="email" placeholder="Your Email" />
                <input type="submit" value="Subscribe" />
              </div>
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your subscription request has been sent. Thank you!
              </div>
            </form> */}
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">Umbrella Show</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        {/* <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
