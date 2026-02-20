function Footer() {
  return (
    <footer role="contentinfo" aria-label="Site footer">
      {/* Top: logo + CTA buttons */}
      <div>
        <a href="/" aria-label="Infinite Compute home">
          Infinite Compute
        </a>
        <nav aria-label="Footer call to action">
          <a href="#">Get Started</a>
          <a href="#">Contact Us</a>
        </nav>
      </div>

      {/* Nav columns */}
      <nav aria-label="Footer navigation">
        <div>
          <h3>Platform</h3>
          <ul role="list">
            <li>
              <a href="#">Cloud</a>
            </li>
            <li>
              <a href="#">Inference API</a>
            </li>
            <li>
              <a href="#">Access</a>
            </li>
            <li>
              <a href="#">Bare Metal</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Company</h3>
          <ul role="list">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Newsroom</a>
            </li>
            <li>
              <a href="#">Eng Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Resources</h3>
          <ul role="list">
            <li>
              <a href="#">Docs</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Imprint</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Legal bar */}
      <div>
        <small>© 2025 Infinite Compute Inc. All rights reserved.</small>
        <nav aria-label="Legal links">
          <a href="#">Privacy Policy</a>
          <a href="#">Security</a>
          <a href="#">Imprint</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
