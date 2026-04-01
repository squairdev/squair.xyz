'use client'
import GradualBlur from '../comp/GradualBlur';
import DotGrid from '../comp/DotGrid';
import BlurText from "../comp/BlurText";
import AnimatedContent from "../comp/AnimatedContent";
import { ReactLenis} from 'lenis/react'
import { useEffect } from 'react';

interface walls {
  name: string;
  path: string;
  preview: string;
}

interface res {
  wallpapers: walls[];
}

async function fetchWalls(): Promise<void> {
  try {
    const response = await fetch('wallpapers.json');
    const json: res = await response.json();
    const wallpapers = json.wallpapers;
    const container = document.getElementById('wallpapers-container');
    wallpapers.forEach(wallpaper => {
      const div = document.createElement('div');
      div.className = 'w-7/8 flex flex-col items-center border border-white/10 relative bg-black px-8 py-4 flex flex-col gap-4 group-hover:bg-sky-500/25 transition-all hover:[&>p]:text-white duration-300 no-underline text-white text-center';
      
      div.innerHTML = `
        <h3 class='text-2xl'>${wallpaper.name}</h3>
        <img class='-mt-2' src="${wallpaper.preview}" alt="${wallpaper.name}" />
        <a aria-label='${wallpaper.name} Wallpaper by Squair' href="${wallpaper.path}" class='p-4 bg-transparent hover:bg-sky-500 text-white hover:text-black border-sky-500 border-2 text-xl transition-all duration-200 ease-in-out' download>Download</a>
      `;
      
      container?.appendChild(div);
    });
    
  } catch (error) {
    console.error('Error fetching wallpapers:', error);
  }
}

export default function Home() {
  useEffect(() => {
    fetchWalls();
  }, []);
  return (
    <section className="font relative h-[150vh]">
      <div style={{ width: '100%', height: '100%', position: 'fixed', overflow: 'auto', zIndex: 0 }}>
      </div>
      <section className='z-0 w-[100vw] min-h-[100vh] flex flex-col items-center justify-start pt-20'>
        <p className="font-bold justify-center text-4xl mb-10">My Custom iOS Wallpapers</p>
        <div className="justify-center text-xl mb-10 text-center">
          <p>These wallpapers use the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International license. See <a aria-label='CC-BY-ND-NC License' href='/wallpapers/LICENSE.txt' target='_blank' className='text-sky-300'>LICENSE.txt</a>.</p>
        </div>
        <div id='wallpapers-container' className='pb-24 z-[100] grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3 justify-center'>

        </div>
      </section>
      
      <div className='relative flex align-center justify-center -top-5'>
      <p>SquairCode, 2026. All rights reserved.</p>
      <div className='h-25'></div>
      </div>
      <GradualBlur
        target="page"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={0.7}
      />
      <GradualBlur
        target="page"
        position="top"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={0.7}
      /></section>


  );
  
}