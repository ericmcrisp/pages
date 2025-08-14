export function loadHeader() {
  const headerPath = window.location.pathname.includes('/pages/')
    ? '../assets/components/header.html'
    : 'assets/components/header.html';

  fetch(headerPath)
    .then(res => res.text())
    .then(html => {
      document.getElementById('header-component').innerHTML = html;
      setNavLinks(); // Fix links after loading
    });
}

function setNavLinks() {
  const onSubpage = window.location.pathname.includes('/pages/');
  const rootPrefix = onSubpage ? '../' : 'pages/';

  const routeMap = {
    home: onSubpage ? '../index.html' : 'index.html',
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
