// /frontend/components/headerLoader.js
export function loadHeader() {
  const headerPath = window.location.pathname.includes('/frontend/pages/')
    ? '../assets/components/header.html'
    : 'frontend/assets/components/header.html';

  fetch(headerPath)
    .then(res => res.text())
    .then(html => {
      document.getElementById('header-component').innerHTML = html;
      setNavLinks(); // Adjust the links after loading
    });
}

function setNavLinks() {
  const onSubpage = window.location.pathname.includes('/frontend/pages/');
  const rootPrefix = onSubpage ? '../' : 'frontend/pages/';

  const routeMap = {
    home: onSubpage ? '../../index.html' : 'index.html',
    about: `${rootPrefix}about.html`,
    resume: `${rootPrefix}resume-selection.html`,
    blog: `${rootPrefix}blogs.html`,
    contact: `${rootPrefix}contact.html`,
  };

  document.querySelectorAll('a[data-link]').forEach(link => {
    const key = link.dataset.link;
    if (routeMap[key]) {
      link.href = routeMap[key];
    }
  });
}
