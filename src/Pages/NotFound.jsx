import './NotFound.css'
import bg from "../assets/images/contact/img-1.png"

export default function NotFound() {
    return (
        <div>
            {/* Test if image loads via standard img tag */}
            <img src={bg} alt="Background Test" style={{ width: '200px' }} />
            
            <section className="page-header">
                <div 
                    className="page-header__bg" 
                    style={{ backgroundImage: `url(${bg})` }}
                >
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        <h3>404 Error</h3>
                        <div className="thm-breadcrumb__inner">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><a href="index.html">Home</a></li>
                                <li><span className="fas fa-angle-right"></span></li>
                                <li>404 Error</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}