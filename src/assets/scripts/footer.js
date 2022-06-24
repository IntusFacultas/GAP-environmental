(() => {
  const currentYear = new Date().getFullYear();
  const yearSpan = document.getElementById('footerYear');
  yearSpan.innerText = currentYear;
})()