import React from "react";
import '../styles/Navbar.css'
function Navbar(){ 
  return(
    
<nav class="navbar">
  <div class="container">
    <div class="brand-content">Brand Content</div>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>

    )
}
export default Navbar;