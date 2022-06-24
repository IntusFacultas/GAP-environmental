


(() => {
  const generateBreadcrumbs = () => {
    const DIVIDER = `<span class="navbar__breadcrumb--divider">
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19">
      <g transform="translate(-272.5 -30)">
        <path d="M9.5,0,19,16H0Z" transform="translate(293.5 30) rotate(90)" fill="#a91e24"/>
        <path d="M9.5,0,19,16H0Z" transform="translate(288.5 30) rotate(90)" fill="#fff"/>
      </g>
    </svg>
    </span>`;
    const breadcrumbs = [{
      text: 'Home',
      link: '/'
    }];
    const { location: { pathname} } = window;
    switch(pathname) {
      case '/about/': {
        breadcrumbs.push({
          text: 'About Us',
          link: '/about/'
        })
        break;
      }
      case '/our-work/': {
        breadcrumbs.push({
          text: 'Our Work',
          link: '/our-work/'
        });
        break;
      }
    }
    const mappedBreadcrumps = breadcrumbs.map(({ text, link}) => `<a class="navbar__breadcrumb" href="${link}">${text}</a>`)
    const breadcrumbsContainer = document.getElementById('breadcrumbs');
    breadcrumbsContainer.innerHTML = mappedBreadcrumps.join(DIVIDER);
  }
  generateBreadcrumbs();
})();

const toggleNavbar = () => {
  const EXPANDED_NAVBAR_CLASS = 'expandableNavbar--expanded';
  const EXPANDED_BACKDROP_CLASS = 'navbarBackdrop--expanded';
  const EXPANDED_ATTRIBUTE = 'aria-expanded';

  const navbar = document.getElementById('navbar');
  const backdrop = document.getElementById('backdrop');
  const isExpanded = navbar.getAttribute(EXPANDED_ATTRIBUTE)
  if (isExpanded === 'true') {
    navbar.classList.remove(EXPANDED_NAVBAR_CLASS);
    backdrop.classList.remove(EXPANDED_BACKDROP_CLASS);
    navbar.setAttribute(EXPANDED_ATTRIBUTE, false)
  } else {
    navbar.classList.add(EXPANDED_NAVBAR_CLASS);
    backdrop.classList.add(EXPANDED_BACKDROP_CLASS);
    navbar.setAttribute(EXPANDED_ATTRIBUTE, true)
  }
}