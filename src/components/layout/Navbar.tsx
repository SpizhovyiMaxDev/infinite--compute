function Navbar() {
  return (
    <header role="banner" className="fixed top-0 inset-x-0 z-50 bg-surfacePrimaryDark/90 backdrop-blur-sm border-b border-borderOnSurface/10">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:btn-primary"
      >
        Skip to main content
      </a>

      <div role="alert" className="bg-surfaceTertiaryDark text-textOnSurface text-body-small text-center py-2 px-4">
        {/* No announcement bar in Figma design */}
      </div>

      <nav aria-label="Main navigation" className="flex items-center justify-between px-4 sm:px-16 h-16">
        <a href="/" aria-label="Home" className="font-sans font-medium text-body-medium text-textOnSurface hover:text-surfaceAccent transition-colors">
          Infinite Compute
        </a>

        <ul role="list" className="hidden md:flex items-center gap-8 list-none">
          <li>
            <a href="#" className="text-body-small text-textOnSurfaceSecondary hover:text-textOnSurface transition-colors">Platform</a>
          </li>
          <li>
            <a href="#" className="text-body-small text-textOnSurfaceSecondary hover:text-textOnSurface transition-colors">Infrastructure</a>
          </li>
          <li>
            <a href="#" className="text-body-small text-textOnSurfaceSecondary hover:text-textOnSurface transition-colors">About</a>
          </li>
          <li>
            <a href="#" className="text-body-small text-textOnSurfaceSecondary hover:text-textOnSurface transition-colors">Newsroom</a>
          </li>
          <li>
            <a href="#" className="text-body-small text-textOnSurfaceSecondary hover:text-textOnSurface transition-colors">Eng</a>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="btn-secondary text-body-small py-2 px-4">Contact Us</a>
          <a href="#" className="btn-primary text-body-small py-2 px-4">Sign In</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
