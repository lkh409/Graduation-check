import React from "react";
import "./Footer.css"; // 가정한 CSS 파일 경로

function Footer() {
  return (
    <div className="footer">
      <div className="footer-border">
        <h1 className="logo">Plaese, Let Me Graduate</h1>
        <h3 className="contact">contact</h3>
        <div className="contact-info">
          <span>Email : </span> sdsdfsd@dfsdf.com <br />
          <span>GitHub : </span>{" "}
          <a
            href="https://github.com/leesuin0710/Graduation-check.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/leesuin0710/Graduation-check
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

/**
 * 
 * function Footer() {
  return <div className="footer">© 2024 My Website</div>;
}

 * 
 */
