const menu=document.querySelector('#site-menu');
document.querySelector('[data-open-menu]')?.addEventListener('click',()=>menu.showModal());
document.querySelector('[data-close-menu]')?.addEventListener('click',()=>menu.close());
menu?.addEventListener('click',event=>{if(event.target===menu){const r=menu.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)menu.close();}});
const quote=document.querySelector('#quote-dialog');
document.querySelector('[data-open-quote]')?.addEventListener('click',event=>{event.preventDefault();if(event.currentTarget.querySelector('img')?.naturalWidth)quote.showModal();});
document.querySelector('[data-close-quote]')?.addEventListener('click',()=>quote.close());

// Keep the saved code readable before the optional photo files are uploaded.
function markMissingImage(img){
  if(img.closest('#quote-dialog'))return;
  img.hidden=true;
  const link=img.closest('a');
  if(link){link.removeAttribute('data-open-quote');link.removeAttribute('href');}
  if(!img.parentElement.querySelector('.asset-note')){
    const note=document.createElement('p');note.className='asset-note';
    note.textContent='Quote artwork will appear here when the original image is added.';
    img.after(note);
  }
}
document.querySelectorAll('img').forEach(img=>{
  img.addEventListener('error',()=>markMissingImage(img));
  if(img.complete&&img.naturalWidth===0)markMissingImage(img);
});
