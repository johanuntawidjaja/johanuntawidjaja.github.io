document.querySelectorAll('[data-expand]').forEach(button=>button.addEventListener('click',()=>{const dialog=document.querySelector('.lightbox');const source=button.querySelector('img');dialog.querySelector('img').src=source.src;dialog.querySelector('img').alt=source.alt;dialog.querySelector('p').textContent=button.closest('figure')?.querySelector('figcaption')?.textContent||source.alt;dialog.showModal();}));
document.querySelectorAll('[data-tour]').forEach(tour=>{
 const controls=tour.querySelector('.tour-controls');
 const buttons=[...controls.querySelectorAll('button')];
 const panels=[...tour.querySelectorAll('.tour-panel')];
 const select=index=>{buttons.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===index)));panels.forEach((p,i)=>p.hidden=i!==index);};
 controls.hidden=false;select(0);
 buttons.forEach((button,index)=>button.addEventListener('click',()=>select(index)));
});
const dialog=document.querySelector('.lightbox');dialog?.querySelector('button').addEventListener('click',()=>dialog.close());dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){const obs=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){e.target.classList.add('in-view');obs.unobserve(e.target);}},{threshold:0.08});document.querySelectorAll('.feature-card,.wide-project,.story-section,.note-card').forEach(el=>{el.classList.add('reveal');obs.observe(el);});}
