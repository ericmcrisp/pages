// downloadButton.js
export function createDownloadButton(url, label = 'Download') {
  const btn = document.createElement('button');
  btn.textContent = label;
  btn.addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = url;
    a.download = url.split('/').pop();
    a.click();
  });
  return btn;
}