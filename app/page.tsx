'use client'
import BlurText from "./comp/BlurText";
import AnimatedContent from "./comp/AnimatedContent";
import GradientWaves from './comp/GradientWaves';
import { ReactLenis} from 'lenis/react'
import { useState, useEffect } from 'react';

export default function Home() {
  const [hd, shd] = useState(false);
  const [da, sda] = useState('opacity-0');
  const [z, sz] = useState(0.7);
  useEffect(()=>{
    if (window.innerWidth <= 768){
      sz(0.5)
    }
  },[])
  const eto = `maito:me@squair.xyz`
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
      <ReactLenis root options={{ lerp: 0.05, duration: 2 }}>
      <section className='sec1 relative z-10 w-screen flex flex-col items-center justify-center min-h-screen'>
        <div className='w-[90vw] sm:max-w-[40vw] h-100 flex flex-col justify-center items-center text-center'>
          <BlurText delay={130} className='text-5xl sm:text-6xl' text="I'm Squair" direction='bottom' animateBy="words" onAnimationComplete={() => shd(true)}/>
          <BlurText delay={150} className='text-xl sm:text-2xl mt-5 flex justify-center items-center max-w-[50%] sm:max-w-full' text="Solo web dev & Apple enthusiast" direction='bottom' animateBy="words" ac={hd}/>
        </div>
        <AnimatedContent delay={0.5} distance={25} className='w-10 h-10 absolute bottom-50 flex flex-col justify-center items-center' onComplete={() => sda('opacity-100')}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff" className={da}><path d="M480-80 200-360l56-57 184 184v-287h80v287l184-183 56 56L480-80Zm-40-520v-120h80v120h-80Zm0-200v-80h80v80h-80Z"/></svg></AnimatedContent>
      </section>
      <section id='about' className='sec2 relative z-10 w-screen flex flex-col sm:flex-row sm:gap-5 items-center justify-center sm:justify-between h-full [&>div]:sm:mx-[12.5vw] text-center'>
        <div className='sm:w-[40vw] w-[90vw]'>
          <BlurText delay={130} className='text-4xl sm:text-5xl mb-5' text="Whoami?" direction='bottom' animateBy="words"/>
          <BlurText delay={85} className='font-medium text-lg sm:text-[23px] mb-5' text="I'm a solo web developer from Canada. I'm interested in all sorts of tech. turntables & vinyls, servers, iDevices, ... anything tech." direction='bottom' animateBy="words"/>
        </div>
        
        <div className='mt-13 sm:mt-0 sm:w-[40vw] w-[90vw]'>
          <BlurText delay={130} className='text-4xl sm:text-5xl mb-5' text="My work" direction='bottom' animateBy="words"/>
          <a href='#' className='mt-3'>
            <div className='flex gap-2 items-center'>
              <BlurText delay={130} className='text-2xl mb-2' text="Websites" direction='bottom' animateBy="words"/>
              <AnimatedContent delay={0.3} distance={25} title='TailwindCSS'><svg className='w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clipPath="url(#prefix__clip0)"><path fill="#38bdf8" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd"/></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs></svg></AnimatedContent>
              <AnimatedContent delay={0.4} distance={25} title='React'><svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg></AnimatedContent>
            </div>
            <BlurText delay={140} className='font-medium text-lg sm:text-xl mb-5' text="I've created multiple websites over the years, like squair.xyz and kittycat.boo. I focus on frontend design." direction='bottom' animateBy="words" />
          </a>
          <a href='https://squair.xyz/wallpapers' target='_blank'>
            <div className='flex gap-2 items-center'>
              <BlurText delay={150} className='text-2xl mb-2' text="Wallpapers" direction='bottom' animateBy="words"/>
              <AnimatedContent delay={0.5} distance={25}><img className='w-6' alt='Mica' title="Mica, Apple's internal .ca editor" src='./Mica.svg'/></AnimatedContent>
              </div>
            <BlurText delay={160} className='font-medium text-lg sm:text-xl mb-5' text="I make several custom moving wallpapers for iDevices with Apple's internal software, Mica." direction='bottom' animateBy="words" />
          </a>
          <a href='https://cobalt.squair.xyz' target='_blank'>
            <div className='flex gap-2 items-center'>
              <BlurText delay={170} className='text-2xl mb-2' text="Cobalt instances" direction='bottom' animateBy="words"/>
              <AnimatedContent delay={0.6} distance={25}><img alt='Linux' className='w-6' src='https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg'/></AnimatedContent>
              </div>
            <BlurText delay={180} className='font-medium text-lg sm:text-xl mb-5' text="I currently host multiple cobalt.tools instances (found at cobalt.directory), allowing downloading support for multiple platforms." direction='bottom' animateBy="words" />
          </a>
        </div>
      </section>
      <section id='contact' className='sec3 relative z-10 w-screen flex flex-col items-center justify-center min-h-screen'>
        <div className='w-[90vw] sm:max-w-[40vw] h-100 flex flex-col justify-center items-center text-center mt-auto'>
          <BlurText delay={130} className='text-4xl sm:text-5xl mb-5' text="Contact" direction='bottom' animateBy="words"/>
          <div className='flex flex-col sm:flex-row gap-2'>
            <a href='https://github.com/squairdev' target='_blank' className='hover:*:bg-black/40 *:transition-colors *:duration-300'><AnimatedContent delay={0.3} className='bg-black/25 border-2 border-[#3B82F6] p-3 text-xl'>GitHub</AnimatedContent></a>
            <a href='https://x.com/squairdev' target='_blank' className='hover:*:bg-black/40 *:transition-colors *:duration-300'><AnimatedContent delay={0.4} className='bg-black/25 border-2 border-[#3B82F6] p-3 text-xl'>Twitter</AnimatedContent></a>
            <a onClick={()=>window.location.href = eto} className='cursor-pointer hover:*:bg-black/40 *:transition-colors *:duration-300'><AnimatedContent delay={0.5} className='bg-black/25 border-2 border-[#3B82F6] p-3 text-xl'>Email</AnimatedContent></a>
          </div>
          
        </div>
        <div className='flex flex-col items-center justify-center mt-auto mb-10'>
          <div className='w-[90vw] sm:w-[70vw] flex flex-wrap gap-1 justify-center items-center text-center pb-3 mb-3 border-b-2 border-white [&>img]:w-25 [&>img]:sm:w-27.5'>
            <img src='./8831/squair.gif' alt='squair.xyz' title='squair.xyz' className='cursor-pointer' onClick={()=>navigator.clipboard.writeText("<a href='https://squair.xyz'><img src='https://squair.xyz/8831/squair.gif' alt='squair.xyz' title='squair.xyz'/></a>")}/>
            <p>Click to copy (pls hotlink)</p>
          </div>
          <div className='w-[80vw] sm:w-[60vw] flex flex-wrap gap-1 justify-center items-center text-center [&>img]:sm:w-27.5 [&>img]:w-25 [&>a>img]:w-25'>
            <img src='./8831/bestcanada.gif' alt='squair.xyz' title='squair.xyz'/>
            <img src='./8831/can.gif' alt='squair.xyz' title='squair.xyz'/>
            <img src='./8831/canada.gif' alt='squair.xyz' title='squair.xyz'/>
            <img src='./8831/canadab.gif' alt='squair.xyz' title='squair.xyz'/>
            <img src='./8831/cananow.gif' alt='squair.xyz' title='squair.xyz'/>
            <img src='./8831/cdaweb.gif' alt='squair.xyz' title='squair.xyz'/>
            <img src='./8831/cc-some.gif' alt='squair.xyz' title='squair.xyz'/>
            <img src='./8831/cc-somerights.gif' alt='squair.xyz' title='squair.xyz'/>
            <img src='./8831/ffmpeg.gif' alt='squair.xyz' title='squair.xyz'/>
            <img src='./8831/gnu-linux.gif' alt='squair.xyz' title='squair.xyz'/>
            <img src='./8831/linux-p.gif' alt='squair.xyz' title='squair.xyz'/>
            <img src='./8831/amd_powered.gif' alt='squair.xyz' title='squair.xyz'/>
            <img src='./8831/nocookie.gif' alt='squair.xyz' title='squair.xyz'/>
            <a href="https://roooot.dev/" title='roooot.dev'><img src="https://roooot.dev/buttons/btn.png" alt='roooot.dev'/></a>
          </div>
        </div>
      </section>
      </ReactLenis></section>


  );
  
}