import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-dark py-5 fixed-bottom h-25">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Link to="/"><img width="100 vh" src="../public/Fitflex.png"/></Link>
            <p className="mt-2">Hacer deporte desde cualquier lugar y en cualquier momento</p>
            <p className="">&copy; 2023</p>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <a href="https://www.instagram.com/"><i className="bi bi-instagram"></i> Instagram</a>
              </div>
              <div className="col-md-4">
                <a href="https://twitter.com/"><i className="bi bi-twitter"></i> Twitter</a>
              </div>
              <div className="col-md-4">
                <a href="https://www.tiktok.com/"><i className="bi bi-tiktok"></i> TikTok</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
