// (() => {
//   const onCardIntersection = (entries, opts) => {
//     entries.forEach(entry =>  {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('cards__container__card--animated')
//       }
//     })
//   };
  
//   const cardObserver = new IntersectionObserver(onCardIntersection, {
//     root: null,   // default is the viewport
//     threshold: .5 // percentage of taregt's visible area. Triggers "onIntersection"
//   });
  
//   document.querySelectorAll('.cards__container__card').forEach(element => cardObserver.observe(element));
// })()

