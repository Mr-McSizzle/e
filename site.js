'use strict';
document.documentElement.classList.add('js-enabled');
const navToggle=document.getElementById('nav-toggle'),nav=document.getElementById('site-navigation');
if(navToggle&&nav){
 const close=()=>{nav.classList.remove('is-open');navToggle.setAttribute('aria-expanded','false');navToggle.setAttribute('aria-label','Open navigation')};
 navToggle.addEventListener('click',()=>{const open=navToggle.getAttribute('aria-expanded')!=='true';nav.classList.toggle('is-open',open);navToggle.setAttribute('aria-expanded',String(open));navToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!navToggle.contains(e.target))close()});
}
const stages={observe:{id:'I / PERCEPTION',title:'Understand the environment.',description:'Interpret signals, information and changing context across the system.'},reason:{id:'II / REASONING',title:'Connect what matters.',description:'Build context, explore possibilities and examine relationships between them.'},coordinate:{id:'III / COORDINATION',title:'Move as one system.',description:'Bring people, knowledge and operational systems into a more coherent flow.'},act:{id:'IV / EXECUTION',title:'Translate intent into action.',description:'Help bridge the distance between human direction and the work that follows.'}};
const display=document.querySelector('.engine-display'),id=document.getElementById('stage-id'),title=document.getElementById('stage-title'),description=document.getElementById('stage-description');
document.querySelectorAll('.engine-tab').forEach(button=>button.addEventListener('click',()=>{const stage=stages[button.dataset.stage];if(!stage||!display)return;display.dataset.stage=button.dataset.stage;id.textContent=stage.id;title.textContent=stage.title;description.textContent=stage.description;document.querySelectorAll('.engine-tab').forEach(b=>{b.classList.toggle('is-active',b===button);b.setAttribute('aria-pressed',String(b===button))})}));
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced&&'IntersectionObserver'in window){const observer=new IntersectionObserver((entries)=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}},{threshold:.1,rootMargin:'0px 0px 30px 0px'});document.querySelectorAll('[data-reveal]').forEach(el=>observer.observe(el))}else{document.querySelectorAll('[data-reveal]').forEach(el=>el.classList.add('visible'))}
const year=document.getElementById('copyright-year');if(year)year.textContent=String(new Date().getFullYear());