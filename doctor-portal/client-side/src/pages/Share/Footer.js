import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 flex justify-around ">
        <div>
          <span className="footer-title uppercase">Services</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title uppercase">Oral health</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title uppercase">out address</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer footer-center p-4 text-base-content">
        <div>
          <p>Copyright &copy; 2022 All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
