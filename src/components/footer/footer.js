import '../../styles/Footer/footer.css'; 

const Footer = () => {
  return (
    <div className="work-together-container">
      <div className="main-content">
        <h1>Let's Work Together</h1>
        <div className="sub-content">
          <p>We are a creative agency that helps businesses enhance their brand presence through impactful graphic design and eye-catching vehicle wraps.</p>
          <button className="cta-button-footer">LET'S CREATE</button>
        </div>
      </div>
      <div className="footer">
        <nav className="footer-nav">
          <ul>
            <li><a href='./'>HOME</a></li>
            <li><a href='./'>SERVICES</a></li>
            <li><a href='./'>ABOUT US</a></li>
            <li><a href='./'>OUR WORK</a></li>
            <li><a href='./'>CONTACT US</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
