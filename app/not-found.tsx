'use client'
import BlurText from "./comp/BlurText";
import FadeContent from "./comp/FadeContent";
import AnimatedContent from "./comp/AnimatedContent";
import { useEffect, useState } from 'react';
import GradientWaves from './comp/GradientWaves';

export default function Home() {
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
      <section className='z-10 w-full h-[93vh] flex flex-col items-center justify-center'>
        <div className='max-w-2xl flex flex-col items-center justify-center'>
          <div className='text-5xl md:text-7xl font-bold mb-4 leading-20 mx-auto text-center'>
            <BlurText text="404" direction="bottom" delay={70} className="justify-center" />
          </div>
          <div className='mx-auto text-center pt-5 text-[1.5rem] max-w-[80vw] lg:max-w-[30vw] pb-10'>
            <FadeContent blur delay={0.6} duration={0.76}>{"Either this page doesn't exist, or I removed it in a newer version of this website."}</FadeContent>
          </div>
          <AnimatedContent distance={10} direction='vertical' delay={0.9}><a aria-label='Go back home' className='hover:bg-black/40 transition-colors duration-300 bg-black/25 border-2 border-[#3B82F6] p-3 text-xl' href='/'>Go Home</a></AnimatedContent>

        </div>
      </section>
    </section>


  );
  
}