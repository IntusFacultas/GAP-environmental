(() => {
  const onCardIntersection = (entries, opts) => {
    entries.forEach(entry =>  {
      if (entry.isIntersecting) {
        entry.target.classList.add('animatedImage--animated')
      }
    })
  };
  
  const cardObserver = new IntersectionObserver(onCardIntersection, {
    root: null,   // default is the viewport
    threshold: .5 // percentage of targets's visible area. Triggers "onIntersection"
  });
  
  document.querySelectorAll('.animatedImage').forEach(element => cardObserver.observe(element));
})()

