export function loadHeader() {
  // Load header.html relative to current page location
const isSubpage = window.location.pathname.includes('frontend/pages/');
  const headerPath = isSubpage
    ? '../assets/components/header.html'
    : 'frontend/assets/components/header.html';

  fetch(headerPath)
    .then(res => res.text())
    .then(html => {
      document.getElementById('header-component').innerHTML = html;
      setNavLinks(isSubpage); // Fix nav links after loading
    });
}

function setNavLinks(isSubpage) {
  const base = isSubpage ? '../' : 'frontend/';

  const routeMap = {
    home: isSubpage ? '../../index.html' : 'index.html',
    about: `${base}pages/about.html`,
    resume: `${base}pages/resume-selection.html`,
    blog: `${base}pages/blogs.html`,
    contact: `${base}pages/contact.html`,
  };

  document.querySelectorAll('a[data-link]').forEach(link => {
    const key = link.dataset.link;
    if (routeMap[key]) {
      link.href = routeMap[key];
    }
  });
}
