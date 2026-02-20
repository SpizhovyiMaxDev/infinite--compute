function Navbar() {
  return (
    <header role="banner">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <div role="alert">
        <a href="#">New: Bare Metal is generally available. Learn more</a>
      </div>

      <nav aria-label="Main navigation">
        <a href="/" aria-label="Home">
          Logo
        </a>

        <ul role="list">
          <li>
            <a href="#">Platform</a>
          </li>
          <li>
            <a href="#">Infrastructure</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Newsroom</a>
          </li>
          <li>
            <a href="#">Eng</a>
          </li>
        </ul>

        <div>
          <a href="#">Sign in</a>
          <a href="#">Get started</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
