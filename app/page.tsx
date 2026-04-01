'use client'
import GradualBlur from './comp/GradualBlur';
import BlurText from "./comp/BlurText";
import FadeContent from "./comp/FadeContent";
import AnimatedContent from "./comp/AnimatedContent";
import { ReactLenis} from 'lenis/react'
import { useState,useRef, useEffect } from 'react';

interface dstat {
  art: string;
  artist: string;
  song: string;
  url: string;
  avatar: string;
  banner: string;
  status: string;
  user: string;
  display: string;
}

async function fdstat(): Promise<dstat> {
  try {
    const response = await fetch('https://d.squair.xyz/');
    const data: dstat = await response.json();

    document.getElementById('avatar')?.setAttribute('src', data.avatar);
    document.getElementById('banner')?.setAttribute('src', data.banner);

    let statcolor = '#84858d';
    if (data.status === 'online') statcolor = '#3f8557';
    else if (data.status === 'idle') statcolor = '#ffc04e';
    else if (data.status === 'dnd') statcolor = '#da3e44';

    document.getElementById('avatar')?.setAttribute('style', `border-color: ${statcolor};`);

    if (data.song) {
      document.getElementById('spotify')?.setAttribute('style', 'display: flex;');
      document.getElementById('card')?.setAttribute('style', 'width: unset;');
      document.getElementById('art')?.setAttribute('src', data.art);
      document.getElementById('spotify')?.setAttribute('onclick', `window.open('${data.url}', '_blank')`);

      const song = document.getElementById('song');
      if (song) song.innerHTML = data.song;

      const artist = document.getElementById('artist');
      if (artist) artist.innerHTML = data.artist;
    } else {
      document.getElementById('spotify')?.setAttribute('style', 'display: none;');
      document.getElementById('card')?.setAttribute('style', 'width: 10rem;');
    }

    return data;
  } catch (error){
    throw 'error fetching data';
  }
}
fdstat()

export default function Home() {

  useEffect(() => {
    fdstat();
    const int = setInterval(fdstat, 15000);
    return () => clearInterval(int);
  }, []);
  return (
    <section className="font relative h-[100vh]">
      <div className='absolute inset-x-0 top-0 h-[300vh] z-[10] pointer-events-none overflow-hidden'>
        <div className='z-[10] absolute h-[100rem] w-[100rem] top-[50vh] left-0 -translate-x-1/2 -translate-y-1/2'>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800" opacity="0.3"><defs><filter id="bbblurry-filter-1" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="130" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter-1)"><ellipse rx="150" ry="150" cx="400" cy="400" fill="#00a6f4"></ellipse></g></svg>
        </div>
        <div className='z-[1000] absolute h-[100rem] w-[100rem] top-[130vh] left-0 -translate-x-1/2 -translate-y-1/2'>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800" opacity="0.2"><defs><filter id="bbblurry-filter-2" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="130" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter-2)"><ellipse rx="150" ry="150" cx="400" cy="400" fill="#00a6f4"></ellipse></g></svg>
        </div>
        <div className='z-[1000] absolute h-[100rem] w-[100rem] top-[200vh] sm:top-[250vh] left-0 -translate-x-1/2 -translate-y-1/2'>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800" opacity="0.3"><defs><filter id="bbblurry-filter-3" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="130" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter-3)"><ellipse rx="150" ry="150" cx="400" cy="400" fill="#00a6f4"></ellipse></g></svg>
        </div>
        <div className='z-[1000] absolute h-[100rem] w-[100rem] top-[200vh] sm:top-[250vh] right-0 translate-x-1/2 -translate-y-1/2'>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800" opacity="0.3"><defs><filter id="bbblurry-filter-3" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="130" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter-3)"><ellipse rx="150" ry="150" cx="400" cy="400" fill="#00a6f4"></ellipse></g></svg>
        </div>
      </div>
      <ReactLenis root options={{ lerp: 0.05, duration: 2 }}>
      <section className='z-10 w-[100vw] h-[100vh] flex items-center justify-start px-6 sm:ml-10'>
        <div className='w-full max-w-[25rem] px-2 z-10'>
          <AnimatedContent distance={10} direction='vertical' delay={0.1} ease='power3.out' className='text-xl'>Solo dev</AnimatedContent>
          <AnimatedContent distance={10} direction='vertical' delay={0.2} ease='power3.out' className='w-full h-[2px] bg-sky-500 mb-7'><></></AnimatedContent>
            <div className='text-[5rem] sm:text-[6rem] leading-none overflow-visible'>
              <AnimatedContent distance={10} direction='vertical' threshold={0} delay={0.2} ease='power3.out'>Hey,</AnimatedContent>
              <div className='mt-[3.5px] flex gap-7'>
              <AnimatedContent distance={10} direction='vertical' delay={0.4} ease='power3.out'>I'm</AnimatedContent>
              <AnimatedContent distance={10} direction='vertical' delay={0.6} ease='power3.out' className='text-sky-500'>Squair<span className='text-white'>.</span></AnimatedContent>
            </div>
          </div>
          <AnimatedContent distance={10} direction='vertical' delay={0.7} ease='power3.out' className='[&>span]:text-xl [&>span]:text-gray-500 mt-7 mb-12'>
          <span>I <span className='text-white'>make websites</span>, mess around with <span className='text-white'>home servers</span>, and <span className='text-white'>mod Apple devices</span>.</span>
          </AnimatedContent>
          <div className='flex gap-7'>
            <AnimatedContent distance={10} direction='vertical' delay={0.8}><a aria-label='Projects by Squair' className='p-4 bg-transparent hover:bg-sky-500 text-white hover:text-black border-sky-500 border-2 text-xl transition-all duration-200 ease-in-out' href='#projects'>View Projects</a></AnimatedContent>
            <AnimatedContent distance={10} direction='vertical' delay={0.9}><a aria-label='Contact Squair' className='p-4 bg-transparent hover:bg-sky-500 text-white hover:text-black border-sky-500 border-2 text-xl transition-all duration-200 ease-in-out' href='#contact'>Contact me</a></AnimatedContent>
          </div>
          
        </div>
        <AnimatedContent distance={10} direction='vertical' delay={1.5} threshold={0} ease='power3.out' className='absolute bottom-20 left-[80px] z-[2000] flex'>
          <p>scroll</p>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-80 200-360l56-57 184 184v-287h80v287l184-183 56 56L480-80Zm-40-520v-120h80v120h-80Zm0-200v-80h80v80h-80Z"/></svg>
        </AnimatedContent>
      </section>
      <div className='w-full h-[0.5px] bg-gray-500/25'></div>
      <section id='projects' className='z-10 w-[100vw] sm:h-[100vh] flex flex-col items-start justify-center px-6 sm:px-16 py-24'>
        <AnimatedContent distance={10} direction='vertical' delay={0.2} className='z-[1000]'><p className='text-4xl sm:text-6xl mb-12'>Projects</p></AnimatedContent>
        <AnimatedContent distance={10} direction='vertical' delay={0.4} className='z-[1000] w-full grid grid-cols-1 sm:grid-cols-2 border border-white/10 overflow-hidden' style={{gap: '1px', background: 'rgba(255,255,255,0.06)'}}>
          <a aria-label='Cobalt Instance' href='https://cobalt.squair.xyz' target='_blank' className='group relative bg-black p-8 flex flex-col gap-4 hover:bg-sky-500/25 hover:[&>p]:text-white transition-all duration-300 no-underline text-white '>
            <div className='flex justify-end'>
              <span className='text-gray-500 group-hover:text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200'>↗</span>
            </div>
            <p className='text-2xl'>Cobalt Instance</p>
            <p className='text-sm text-gray-500 leading-relaxed'>A cobalt.tools community instance. Supports downloading for multiple platforms, and <i>sometimes</i> youtube.<br></br><br></br>
            Using the canine.tools/cobalt fork of the Cobalt API.</p>
          </a>
          <a aria-label='kittycat.boo services' href='https://kittycat.boo' target='_blank' className='group relative bg-black p-8 flex flex-col gap-4 hover:bg-sky-500/25 hover:[&>p]:text-white transition-all duration-300 no-underline text-white'>
            <div className='flex justify-end'>
              <span className='text-gray-500 group-hover:text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200'>↗</span>
            </div>
            <p className='text-2xl'>kittycat.boo</p>
            <p className='text-sm text-gray-500 leading-relaxed'>Multiple services hosted by me.<br></br><br></br>
            Ranging from Zipline to Forgejo, and even more cobalt instances.</p>
          </a>
          <a aria-label='Wallpapers by Squair' href='/wallpapers' className='group relative bg-black p-8 flex flex-col gap-4 hover:bg-sky-500/25 transition-all hover:[&>p]:text-white duration-300 no-underline text-white'>
            <div className='flex justify-end'>
              <span className='text-gray-500 group-hover:text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200'>↗</span>
            </div>
            <p className='text-2xl'>iOS Wallpapers</p>
            <p className='text-sm text-gray-500 leading-relaxed'>Custom animated wallpapers for iOS applied via Nugget.<br></br><br></br>
            Made with Apple's internal software, Mica, on MacOS.</p>
          </a>
          <a aria-label='squair.xyz' href='#' className='group relative bg-black p-8 flex flex-col gap-4 hover:bg-sky-500/25 transition-all hover:[&>p]:text-white duration-300 no-underline text-white'>
            <div className='flex justify-end'>
              <span className='text-gray-500 group-hover:text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200'>↗</span>
            </div>
            <p className='text-2xl'>squair.xyz</p>
            <p className='text-sm text-gray-500 leading-relaxed'>This portfolio. Built with Next.js and Tailwind. View my projects and contact info.<br></br><br></br>
            Not much else to say, you're already here!</p>
          </a>
        </AnimatedContent>
      </section>
      <div className='w-full h-[1.5px] bg-gray-500/25'></div>
      <section id='contact' className='z-10 w-[100vw] h-[100vh] flex flex-col items-start justify-center px-6 sm:px-16 py-24 overflow-y-hidden'>
        <div className='flex flex-col sm:flex-row gap-10 sm:gap-0 w-full h-full justify-center items-center z-[1000]'>
          <div className='w-full justify-self-start'>
            <AnimatedContent distance={10} direction='vertical' delay={0.2}><p className='text-4xl sm:text-6xl'>Let's</p><p className='text-4xl sm:text-6xl'>get <span className='text-sky-500'>in touch</span>.</p></AnimatedContent>
            <AnimatedContent distance={10} direction='vertical' delay={0.7} ease='power3.out' className='[&>span]:text-xl [&>span]:text-gray-500 mt-7 mb-12'><span><span className='text-white'>Questions</span>, <span className='text-white'>Comments</span> or just want to get hold of me? <span className='text-white'>Contact me</span>.</span></AnimatedContent>
            <div className='flex sm:gap-7 gap-14 flex-col sm:flex-row sm:w-auto'>
              <AnimatedContent distance={10} direction='vertical' delay={0.8}>c<a aria-label='Email Squair' className='p-4 bg-transparent hover:bg-sky-500 text-white hover:text-black border-sky-500 border-2 text-xl transition-all duration-200 ease-in-out' href='mailto:me@squair.xyz'>me@squair.xyz</a></AnimatedContent>
              <div className='flex gap-7 sm:w-auto'>
                <AnimatedContent distance={10} direction='vertical' delay={1.2}><a aria-label='GitHub Profile' className='p-4 bg-transparent hover:bg-sky-500 text-white hover:text-black border-sky-500 border-2 text-xl transition-all duration-200 ease-in-out' href='https://github.com/squairdev'>GitHub</a></AnimatedContent>
                <AnimatedContent distance={10} direction='vertical' delay={1.4}><a aria-label='Twitter/X: Squair' className='p-4 bg-transparent hover:bg-sky-500 text-white hover:text-black border-sky-500 border-2 text-xl transition-all duration-200 ease-in-out' href='https://x.com/squairdev'>X / Twitter</a></AnimatedContent>
              </div>
            </div>
            
          </div>
          <AnimatedContent distance={10} direction='vertical' delay={1.0} className='group w-[15rem] sm:w-[20rem] h-100 justify-self-center flex flex-col justify-center items-center'>
            <span className='-translate-x-8 translate-y-12 text-2xl mb-4 text-gray-500 group-hover:text-sky-400 group-hover:-translate-x-7 group-hover:translate-y-11 transition-all duration-200 self-end'>↗</span>
            <a aria-label='Discord User Profile' href='https://discord.com/users/1039340580012036106' className='w-7/8 border-t border-l border-r border-white/10'><img id='banner' alt='My Discord Banner'/></a>
            <a aria-label='Discord User Profile' className='w-7/8 flex flex-col items-center border-b border-l border-r border-white/10 relative bg-black p-8 flex flex-col gap-4 group-hover:bg-sky-500/25 transition-all hover:[&>p]:text-white duration-300 no-underline text-white text-center' href='https://discord.com/users/1039340580012036106'>
              <img id='avatar' className='justify-center align-center w-30 rounded-full border-6' alt='My Discord Avatar'/>
              <p className='mt-2 text-2xl'>Squair</p>
              <p className='-mt-2 text-lg'>squair.dev</p>
            </a>
            
          </AnimatedContent>
        </div>
      </section>
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
      />
      </ReactLenis></section>


  );
  
}