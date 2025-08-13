export function loadHeader() {
  // Load header.html relative to current page location
  const headerPath = window.location.pathname.includes('/frontend/pages/')
    ? '../assets/components/header.html'
    : 'frontend/assets/components/header.html';

  fetch(headerPath)
    .then(res => res.text())
    .then(html => {
      document.getElementById('header-component').innerHTML = html;
      setNavLinks(); // Fix nav links after loading
    });
}

function setNavLinks() {
  const onSubpage = window.location.pathname.includes('/frontend/pages/');

  // If on subpage (in /frontend/pages/), links to other pages in same folder are just filenames
  // If on root, prefix with 'frontend/pages/' for those pages
  const routeMap = {
    home: onSubpage ? '../../index.html' : 'index.html',
    about: onSubpage ? 'about.html' : 'frontend/pages/about.html',
    resume: onSubpage ? 'resume-selection.html' : 'frontend/pages/resume-selection.html',
    blog: onSubpage ? 'blogs.html' : 'frontend/pages/blogs.html',
    contact: onSubpage ? 'contact.html' : 'frontend/pages/contact.html',
  };

  document.querySelectorAll('a[data-link]').forEach(link => {
    const key = link.dataset.link;
    if (routeMap[key]) {
      link.href = routeMap[key];
    }
  });
}
