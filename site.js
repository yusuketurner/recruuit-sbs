
document.querySelectorAll('[data-menu-btn]').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelector('[data-mobile-menu]')?.classList.toggle('hidden');
}));
const counters=document.querySelectorAll('[data-counter]');
if(counters.length){
  const io=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){
    const el=entry.target;const target=Number(el.dataset.counter);let cur=0;const step=Math.max(1,Math.ceil(target/60));
    const t=setInterval(()=>{cur+=step;if(cur>=target){cur=target;clearInterval(t);}el.textContent=cur.toLocaleString();},25);
    io.unobserve(el);
  }})},{threshold:.4});
  counters.forEach(c=>io.observe(c));
}

document.querySelectorAll('[data-tab]').forEach(btn=>btn.addEventListener('click',()=>{
  const key=btn.dataset.tab;
  document.querySelectorAll('[data-tab]').forEach(b=>b.classList.remove('bg-blue-900','text-white'));
  btn.classList.add('bg-blue-900','text-white');
  document.querySelectorAll('[data-schedule]').forEach(s=>s.classList.toggle('hidden',s.dataset.schedule!==key));
}));