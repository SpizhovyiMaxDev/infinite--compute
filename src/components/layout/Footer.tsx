function Footer() {
  return (
    <footer role="contentinfo" aria-label="Site footer" className="bg-surfacePrimaryDark text-textOnSurface border-t border-borderOnSurface/10">
      {/* Top: logo + CTA buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 px-4 sm:px-16 py-16 border-b border-borderOnSurface/10">
        <a href="/" aria-label="Infinite Compute home" className="font-sans font-medium text-body-medium text-textOnSurface hover:text-surfaceAccent transition-colors">
          Infinite Compute
        </a>
        <nav aria-label="Footer call to action" className="flex items-center gap-3">
          <a href="#" className="btn-primary text-body-small py-2 px-4">Get Started</a>
          <a href="#" className="btn-secondary text-body-small py-2 px-4">Contact Us</a>
        </nav>
      </div>

      {/* Nav columns */}
      <nav aria-label="Footer navigation" className="grid grid-cols-2 md:grid-cols-3 gap-12 px-4 sm:px-16 py-16">
        <div>
          <h3 className="font-sans font-medium text-body-small text-textOnSurfaceSecondary uppercase tracking-widest mb-6">Platform</h3>
          <ul role="list" className="flex flex-col gap-3 list-none">
            <li><a href="#" className="text-body-small text-textOnSurfaceSecondary hover:text-textOnSurface transition-colors">Cloud</a></li>
            <li><a href="#" className="text-body-small text-textOnSurfaceSecondary hover:text-textOnSurface transition-colors">Inference API</a></li>
            <li><a href="#" className="text-body-small text-textOnSurfaceSecondary hover:text-textOnSurface transition-colors">Access</a></li>
            <li><a href="#" className="text-body-small text-textOnSurfaceSecondary hover:text-textOnSurface transition-colors">Bare Metal</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans font-medium text-body-small text-textOnSurfaceSecondary uppercase tracking-widest mb-6">Company</h3>
          <ul role="list" className="flex flex-col gap-3 list-none">
            <li><a href="#" className="text-body-small text-textOnSurfaceSecondary hover:text-textOnSurface transition-colors">About</a></li>
            <li><a href="#" className="text-body-small text-textOnSurfaceSecondary hover:text-textOnSurface transition-colors">Newsroom</a></li>
            <li><a href="#" className="text-body-small text-textOnSurfaceSecondary hover:text-textOnSurface transition-colors">Eng Blog</a></li>
            <li><a href="#" className="text-body-small text-textOnSurfaceSecondary hover:text-textOnSurface transition-colors">Careers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans font-medium text-body-small text-textOnSurfaceSecondary uppercase tracking-widest mb-6">Resources</h3>
          <ul role="list" className="flex flex-col gap-3 list-none">
            <li><a href="#" className="text-body-small text-textOnSurfaceSecondary hover:text-textOnSurface transition-colors">Docs</a></li>
            <li><a href="#" className="text-body-small text-textOnSurfaceSecondary hover:text-textOnSurface transition-colors">Security</a></li>
            <li><a href="#" className="text-body-small text-textOnSurfaceSecondary hover:text-textOnSurface transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-body-small text-textOnSurfaceSecondary hover:text-textOnSurface transition-colors">Imprint</a></li>
          </ul>
        </div>
      </nav>

      {/* Legal bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-16 py-6 border-t border-borderOnSurface/10">
        <small className="text-body-small text-textOnSurfaceSecondary">© 2025 Infinite Compute Inc. All rights reserved.</small>
        <nav aria-label="Legal links" className="flex flex-wrap gap-4">
          <a href="#" className="text-body-small text-textOnSurfaceSecondary hover:text-textOnSurface transition-colors">Privacy Policy</a>
          <a href="#" className="text-body-small text-textOnSurfaceSecondary hover:text-textOnSurface transition-colors">Security</a>
          <a href="#" className="text-body-small text-textOnSurfaceSecondary hover:text-textOnSurface transition-colors">Imprint</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
