'use client'
import GradualBlur from '../comp/GradualBlur';
import DotGrid from '../comp/DotGrid';
import BlurText from "../comp/BlurText";
import AnimatedContent from "../comp/AnimatedContent";
import { ReactLenis} from 'lenis/react'

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
      div.className = 'w-80 wallpaper-item bg-[#1c398e]/25 rounded-3xl border-[#1c398e]/25 border-4 border-solid justify-center items-center flex flex-col gap-5 p-2';
      
      div.innerHTML = `
        <h3 class='text-2xl'>${wallpaper.name}</h3>
        <img class='rounded-2xl -mt-2' src="${wallpaper.preview}" alt="${wallpaper.name}" />
        <a href="${wallpaper.path}" class='flex items-center justify-center mx-auto w-[10rem] h-[3.5rem] bg-[#1c398e]/15 border-[#1c398e]/25 border-4 border-solid rounded-2xl hover:border-[#155dfc]/25 hover:bg-[#155dfc]/15 transition-all duration-300 ease-in-out text-lg cursor-pointer' download>Download</a>
      `;
      
      container?.appendChild(div);
    });
    
  } catch (error) {
    console.error('Error fetching wallpapers:', error);
  }
}
fetchWalls();

export default function Home() {
  return (
    <section className="font relative h-[150vh]">
      <div style={{ width: '100%', height: '100%', position: 'fixed', overflow: 'auto', zIndex: 0 }}>
        <DotGrid
          baseColor="#222222"
          activeColor="#60a5fa"
          proximity={120}
          shockStrength={3}
          resistance={1000}
          dotSize={6}
          gap={16}
        />
      </div>
      <ReactLenis root>
      <section className='z-0 w-[100vw] min-h-[100vh] flex flex-col items-center justify-start pt-20'>
        <BlurText text="My custom iOS Wallpapers" direction="bottom" delay={70} className="font-bold justify-center text-4xl mb-10" />
        <AnimatedContent initialOpacity={0.1} direction='vertical' delay={0.0} duration={0.5} className="justify-center text-xl mb-10 text-center">
          <p>These wallpapers use the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International license. See <a href='/wallpapers/LICENSE.txt' target='_blank' className='text-sky-300'>LICENSE.txt</a>.</p>
        </AnimatedContent>
        <AnimatedContent children initialOpacity={0.1} direction='vertical' delay={0.1} duration={0.4} id='wallpapers-container' className='pb-24 z-[100] grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3 justify-center'>

        </AnimatedContent>
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
      /></ReactLenis></section>


  );
  
}