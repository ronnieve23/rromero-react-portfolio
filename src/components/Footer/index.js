import React from "react";
import '../Footer/footer.css'

function Footer() {
  return (
    <footer className="bg-dark text-white text-center" >
      <h3>Connect With Me:
        <a href="https://github.com/ronnieve23" className="ml-2" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/ronnieve-romero-88823a6a/" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </h3>
    </footer>
  )
}

export default Footer;