// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import './home.css';

const Header = () => {
    return (
        <header className="headerjazda">
            <div className="header-logo">
                {/* Dodaj logo tutaj */}
                <img src="czerwonetalescorll.png" alt="Logo" />
            </div>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/shop">SHOP</Link></li>
                    <li><Link to="/blog">BLOG</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </nav>
            <div className="header-buttons">
                <button><Link to="/Login">Login</Link></button>
                <button><Link to="/Login">Sign up</Link></button>
            </div>
        </header>
    );
}

// Home.js
// Home.js
function Home(props) {
    return (
        <div>
            <Header />
            <div className="Bg1">
            <div className="gray-bar">
                <div className="box">
                    <div className="content1">
                        <h1>Witaj w TaleScroll</h1>
                        <p>
                            W miejscu, gdzie świat książek staje się niezwykle fascynujący! <br/>
                            Jesteśmy pasjonatami czytania i pragniemy podzielić się tą pasją z Tobą. <br/>Niech każdy moment spędzony z książką stanie się wyjątkowy, <br/> a każda historia rozpalającym doświadczeniem.
                        </p>
                        <div className="join-us-button">
                            <button>Join Us</button>
                            <input className="Emailinput" type="email" pattern="enter here your email" size="30" placeholder="enter here your email"></input>
                        </div>
                    </div>
                </div>
            </div>

            <div className="centered-buttons">
                <button className="discover-button">DISCOVER YOUR NEXT BOOK</button>
                <button className="ask-button">ASK ABOUT THE BOOK</button>
            </div>

            <div className="blog-bar">
                <div className="box2">
                <div className="Blog">
                    <h1>Blog</h1>
                    <p>
                        Join Us!
                    </p>
                </div>
                </div>
            </div>

                <div className="blogsite">
                    <div className="rectangle" style={{ backgroundImage: "url('prostokat1.png')" }}>
                        <header>TaleScroll</header>
                        <img src="icons8-facebook-64 (1).png" alt="Instagram" />
                        <button><a href="https://www.facebook.com/profile.php?id=61554927153325" target="_blank" rel="noopener noreferrer">Join Us</a></button>
                    </div>
                    <div className="rectangle" style={{ backgroundImage: "url('prostokat2.jpg')" }}>
                        <header>@tale.scroll</header>
                        <img src="icons8-instagram-64 (1).png" alt="Instagram" />
                        <button><a href="https://www.instagram.com/tale.scroll/" target="_blank" rel="noopener noreferrer">Join Us</a></button>
                    </div>
                    <div className="rectangle" style={{ backgroundImage: "url('prostokat3.jpg')" }}>
                        <header>TaleScroll</header>
                        <img src="icons8-tiktok-64 (1).png" alt="Instagram" />
                        <button><a href="https://www.tiktok.com/@talescroll" target="_blank" rel="noopener noreferrer">Join Us</a></button>
                    </div>
                    <div className="rectangle" style={{ backgroundImage: "url('prostokat4.jpg')" }}>
                        <header>TaleScroll</header>
                        <img src="icons8-youtube-64.png" alt="Instagram" />
                        <button><a href="https://www.youtube.com/channel/UCYtx2PGMHVcGsu7ztE2KokA" target="_blank" rel="noopener noreferrer">Join Us</a></button>
                    </div>
                </div>
            </div>



            <div className="shop-bar">
                    <div className="shop-box">
                        <h1>SHOP</h1>
                    </div>
            </div>

            <div className="shop-product">
                <div className="product-details">
                    <h2>Lampka do czytania</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.centuries, but also the leap into electronic typesetting, remaining essentially unchanged. centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div className="price-buttons">
                        <div className="product-price">
                            <h3>$19.99</h3>
                        </div>
                        <div className="action-buttons">
                            <button>Kup Teraz</button>
                            <button >Zobacz Więcej</button >
                        </div>
                    </div>
                </div>
                <div className="product-image">
                    {/* Dodaj zdjęcie produktu */}
                    <img src="lampka.jpg" alt="Product" />
                </div>
            </div>

            <div className="book-ask-bar">
                <div className="book-ask-box">
                    <p>kontakt@talescroll.com</p>
                </div>
            </div>
        </div>
    );
};

export default Home;





