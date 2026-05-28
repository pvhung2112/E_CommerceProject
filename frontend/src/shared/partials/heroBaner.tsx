import { NavLink } from "react-router-dom";
import "../styles/components/heroBaner.css"
function Banner() {
    return (
        <>
            <section className="section-card">
                <img src="../../public/images-1764555031606-card-case-hero-2.webp" alt="" />
                <div className="banner-content">
                    <h1>Think Better cho bạn</h1>
                    <p>Your best ideas deserve more than a screen.</p>
                    <NavLink to="/product/:id">The Analog System →</NavLink>
                </div>
            </section>
        </>
    )

}
export default Banner;