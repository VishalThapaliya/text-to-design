import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

import "./Footer.css";

const soialLinks = [
  {
    id: 1,
    title: "Twitter",
    icon: <FaXTwitter className="social-icon" />,
  },
  {
    id: 2,
    title: "Facebook",
    icon: <FaFacebookF className="social-icon" />,
  },
  {
    id: 5,
    title: "LinkedIn",
    icon: <FaLinkedinIn className="social-icon" />,
  },
  {
    id: 4,
    title: "Github",
    icon: <FaGithub className="social-icon" />,
  },
];

const legalLinks = [
  { id: 1, title: "Privacy Policy" },
  { id: 2, title: "Terms of Service" },
  { id: 3, title: "Cookie Policy" },
];

const Footer = ({ footerProductLinks, footerSupportLinks }) => {
  {console.log("product links", footerProductLinks);}
  return (
    <footer className="main-footer">
      <div className="container footer-container">
        <div className="footer-main">
          <div className="footer-about">
            <h3>Conception UI</h3>
            <p>
              Transform your apps into beautiful visual mockups using the power
              of artificial intelligence.
            </p>

            <div className="social-links">
              {soialLinks.map((link) => (
                <a href="#" title={link.title} key={link.id} target="_blank">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h4>Product</h4>
            <ul>
              {footerProductLinks.map((product) => (
                <li key={product.id}>
                  <a href="#">{product.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              {footerSupportLinks.map((support) => (
                <li key={support.id}>
                  <a href="#">{support.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Conception UI. All rights reserved.</p>
          <div className="legal-links">
            {legalLinks.map((link) => (
              <a href="#" key={link.id}>
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
