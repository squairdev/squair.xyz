'use client'
import { useEffect, useState } from 'react';
import GradientWaves from '../comp/GradientWaves';

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
    const container = document.getElementById('wc');
    wallpapers.forEach(wallpaper => {
      const div = document.createElement('div');
      div.className = 'max-w-[90vw] flex flex-col items-center relative bg-black/25 px-8 py-4 flex flex-col gap-4 group-hover:bg-sky-500/25 transition-all hover:[&>p]:text-white duration-300 no-underline text-white text-center';
      
      div.innerHTML = `
        <h3 class='text-2xl'>${wallpaper.name}</h3>
        <img class='-mt-2' src="${wallpaper.preview}" alt="${wallpaper.name}" />
        <a aria-label='${wallpaper.name} Wallpaper by Squair' href="${wallpaper.path}" class='hover:bg-black/40 transition-colors duration-300 bg-black/25 border-2 border-[#3B82F6] p-3 text-xl' download>Download</a>
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
  const [z, sz] = useState(0.7);
  useEffect(()=>{
    if (window.innerWidth <= 768){
      sz(0.5)
    }
  },[])
  return (
    <section className="font relative h-screen">
      <div className="fixed inset-0 z-0 pointer-events-none bg-black w-full h-full">
        <GradientWaves
          horizonColor="#3B82F6"
          waveColor="#ffffff"
          crestColor="#FFFFFF"
          speed={0.2}
          amplitude={1.6}
          waveScale={0.6}
          waveRatio={0.9}
          swell={22.5}
          turbulence={20}
          tilt={0.2}
          zoom={z}
          height={5.2}
          fogDepth={15}
          detail="low"
          brightness={1}
          opacity={0.74}
          mouseInteraction={false}
          parallaxStrength={0.5}
          grain={false}
          grainIntensity={0.05}
        />
      </div>
      <section className='z-0 w-full min-h-screen flex flex-col items-center justify-center pt-20 *:z-10'>
        <p className="font-bold justify-center text-4xl mb-10">My Wallpapers</p>
        <div className="justify-center text-xl mb-10 text-center">
          <p>These wallpapers use the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International license. See <a aria-label='CC-BY-ND-NC License' href='/wallpapers/LICENSE.txt' target='_blank' className='text-sky-300'>LICENSE.txt</a>.</p>
        </div>
        <div id='wc' className='pb-24 z-100 grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3 self-center'>
        </div>
      </section>
    </section>


  );
  
}

// ffmpeg command for video to gif:
// ffmpeg -i {video} -vf "fps=15,scale=320:-1:flags=lanczos" -c:v gif {gif}
// :3