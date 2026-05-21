import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import "../../shared/styles/partials/footer.css"
function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Customer Service */}
                <div className="footer-column">
                    <h3>Customer Service</h3>

                    <ul>
                        <li>Help / FAQ</li>
                        <li>Returns & Exchanges</li>
                        <li>Gift Cards</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                {/* About */}
                <div className="footer-column">
                    <h3>About</h3>

                    <ul>
                        <li>Our Story</li>
                        <li>Journal</li>
                        <li>Reviews</li>
                    </ul>
                </div>

                {/* Accessibility */}
                <div className="footer-column">
                    <h3>Accessibility Statement</h3>
                </div>

                {/* Contact */}
                <div className="footer-column footer-right">

                    <div className="footer-logo">
                        LOGO
                    </div>

                    <p>© Ugmonk 2026</p>

                    <p>
                        Contact: info@ugmonk.com
                    </p>

                    <p>
                        806 Dorlan Mill Rd. Downingtown,
                        PA 19335
                    </p>

                    <p>
                        All images and content may not be
                        used without permission
                    </p>

                    <div className="footer-social">

                        <FaInstagram />

                        <FaTwitter />

                        <FaFacebookF />

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;