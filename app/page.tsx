'use client'
import GradualBlur from './comp/GradualBlur';
import DotGrid from './comp/DotGrid';
import BlurText from "./comp/BlurText";
import FadeContent from "./comp/FadeContent";
import AnimatedContent from "./comp/AnimatedContent";
import { ReactLenis} from 'lenis/react'

interface dstat {
  art: string;
  artist: string;
  song: string;
  url: string;
  avatar: string;
  status: string;
  user: string;
  display: string;
}

async function fdstat(): Promise<dstat> {
  try {
    const response = await fetch('https://d.squair.xyz/');
    const data: dstat = await response.json();

    document.getElementById('avatar')?.setAttribute('src', data.avatar);

    let statcolor = '#84858d';
    if (data.status === 'online') statcolor = '#3f8557';
    else if (data.status === 'idle') statcolor = '#ffc04e';
    else if (data.status === 'dnd') statcolor = '#da3e44';

    document.getElementById('status')?.setAttribute('style', `background-color: ${statcolor};`);

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
  } catch {
    throw 'error fetching data';
  }
}
fdstat()
setInterval(() => {
  fdstat();
}, 15000);
export default function Home() {
  return (
    <section className="font relative h-[100vh]">
      
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
      <ReactLenis root options={{ lerp: 0.05, duration: 2 }}>
      <section className='z-0 w-[100vw] h-[100vh] flex flex-cols items-center justify-center'>
        <div className='max-w-2xl'>
          <FadeContent blur delay={0.3} duration={0.7}><img src={'squair.png'} className='mx-auto w-[4rem] rounded-full'/></FadeContent>
          <div className='text-5xl md:text-7xl font-bold mb-4 leading-20 mx-auto text-center'>
            <BlurText text="Hey, I'm Squair." direction="bottom" delay={70} className="justify-center" />
          </div>
          <div className='mx-auto text-center pt-5 text-[1.5rem] max-w-[80vw] lg:max-w-[30vw] text-[#ababab] pb-10'>
            <AnimatedContent direction="horizontal" distance={50} delay={0.3} scale={0.7}>
              <svg className='absolute' style={{transform: "translate(-100%, -100%)"}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M460-160v-300H160v-40h300v-300h40v300h300v40H500v300h-40Z"/></svg>
            </AnimatedContent>
            <FadeContent blur delay={0.6} duration={0.76}>{"I'm a solo dev. I enjoy making websites, messing around with servers, and modding Apple devices. On this website, you can view some of my projects, and get in contact with me."}</FadeContent>
            <div style={{flexGrow:"1"}}/>
            <AnimatedContent reverse direction="horizontal" distance={50} delay={0.3} scale={0.7}>
              <svg style={{transform: "translate(50%, -0%)", marginLeft: 'auto'}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M460-160v-300H160v-40h300v-300h40v300h300v40H500v300h-40Z"/></svg>
            </AnimatedContent>
          </div>
          <div className='gap-2 flex justify-center align-center flex-cols max-w-[80vw] mx-auto'>
            <AnimatedContent direction="vertical" duration={0.2} distance={50} delay={0.5} scale={0.9} className='flex items-center justify-center mx-auto w-[10rem] h-[3.5rem] bg-[#1c398e]/15 border-[#1c398e]/25 border-4 border-solid rounded-l-2xl hover:border-[#155dfc]/25 hover:bg-[#155dfc]/15 transition-all duration-300 ease-in-out text-lg cursor-pointer'>
              Projects<a href={"#projects"} className='absolute w-[10rem] h-[3.5rem]'></a>
            </AnimatedContent>
            <AnimatedContent direction="vertical" duration={0.2} distance={50} delay={0.7} scale={0.9} className='flex items-center justify-center mx-auto w-[10rem] h-[3.5rem] bg-[#1c398e]/15 border-[#1c398e]/25 border-4 border-solid hover:border-[#155dfc]/25 hover:bg-[#155dfc]/15 transition-all duration-300 ease-in-out text-lg cursor-pointer'>
              Contact<a href={"#contact"} className='absolute w-[10rem] h-[3.5rem]'></a>
            </AnimatedContent>
            <AnimatedContent direction="vertical" duration={0.2} distance={50} delay={0.9} scale={0.9} className='flex items-center justify-center mx-auto w-[10rem] h-[3.5rem] bg-[#6b6b6b]/15 border-[#808080]/25 border-4 border-solid rounded-r-2xl text-lg'>
              More
            </AnimatedContent>
          </div>
        </div>
      </section>
      <section id='projects' className='mt-[75vh] sm:mt-0 sm:pt-0 z-0 w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
        <div className='w-[80vw]  justify-center items-center'>
          <AnimatedContent reverse direction="horizontal" distance={50} delay={0.3} scale={0.7}>
            <svg style={{transform: "translate(-150%, -50%)"}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M460-160v-300H160v-40h300v-300h40v300h300v40H500v300h-40Z"/></svg>
          </AnimatedContent>
          <div className='flex grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 '>
            <div className='flex flex-col gap-6 sm:gap-10'>
              <FadeContent blur delay={0.3} duration={0.7} className='pb-5 bg-[#1c398e]/25 w-full rounded-t-3xl sm:rounded-tl-3xl sm:rounded-tr-none border-[#1c398e]/25 border-4 border-solid'>
                <h1 className='p-5 text-center text-2xl font-bold'>squair.xyz</h1>
                <AnimatedContent direction="vertical" distance={50} delay={0.3} scale={0.7}>
                <p className='px-10 text-xl pb-5'>squair.xyz is my portfolio. It lists some of my projects, about me, and contact information. Many updates over time, currently made with Next.js and TailwindCSS. Some of the visual effects (text animations, background) are made with the help of <a href="https://reactbits.dev/" className='text-sky-300' target='_blank'>ReactBits</a>.</p>
                </AnimatedContent><div className='p-2.5 w-45 flex mx-auto text-lg justify-center align-center bg-[#0c090e]/40 text-center rounded-3xl border-[#1c398e]/25 border-4 border-solid'>You're already here</div>
              </FadeContent>
              
              <FadeContent blur delay={0.7} duration={0.7} className='pb-5 bg-[#1c398e]/25 w-full rounded-none sm:rounded-bl-3xl border-[#1c398e]/25 border-4 border-solid'>
                <h1 className='p-5 text-center text-2xl font-bold'>My Hyprland dotfiles</h1>
                <AnimatedContent direction="vertical" distance={50} delay={0.3} scale={0.7}>
                <p className='px-10 text-xl pb-5'>My Hyprland config files. Currently experimental, though the script should work (use at your own risk). These dots are based off of <a href='https://github.com/elifouts/Dotfiles' className='text-sky-300' target='_blank'>elifout's dotfiles</a>, though with many changes. Contains nwg-dock-hyprland, ashell, pywal, and a few more.</p>
                </AnimatedContent><a className='p-2.5 w-45 flex mx-auto text-lg justify-center align-center bg-[#1c398e]/25 text-center rounded-3xl border-[#1c398e]/25 border-4 border-solid hover:border-[#155dfc]/25 hover:bg-[#155dfc]/15 transition-all duration-300 ease-in-out cursor-pointer' href='https://github.com/squairdev/dotfiles'>Go to GitHub</a>
              </FadeContent>
            </div>
            <div className='flex flex-col gap-6 sm:gap-10'>
              <FadeContent blur delay={0.5} duration={0.7} className='pb-5 bg-[#1c398e]/25 w-full rounded-none sm:rounded-tr-3xl border-[#1c398e]/25 border-4 border-solid'>
              <h1 className='p-5 text-center text-2xl font-bold'>Wallpapers</h1>
                <AnimatedContent direction="vertical" distance={50} delay={0.3} scale={0.7}>
                <p className='px-10 text-xl pb-5'>My custom wallpapers made for iOS. These wallpapers move, unlike stock-iOS wallpapers. You can apply the wallpapers using <a href='https://github.com/leminlimez/Nugget' className='text-sky-300' target='_blank'>Nugget.</a> You can also get other wallpapers (and mine!) <a href='https://cowabun.ga/wallpapers?sections=custom' className='text-sky-300' target='_blank'>here</a>. If you want to learn how to make these wallpapers, join <a href='https://discord.gg/FRuGJrbsPX' className='text-sky-300' target='_blank'>the Discord</a>.</p>
                </AnimatedContent><a className='p-2.5 w-45 flex mx-auto text-lg justify-center align-center bg-[#1c398e]/25 text-center rounded-3xl border-[#1c398e]/25 border-4 border-solid hover:border-[#155dfc]/25 hover:bg-[#155dfc]/15 transition-all duration-300 ease-in-out cursor-pointer' href='/wallpapers'>Go to Website</a>
              </FadeContent>
              <FadeContent blur delay={0.9} duration={0.7} className='pb-5 bg-[#1c398e]/25 w-full rounded-b-3xl sm:rounded-br-3xl sm:rounded-bl-none border-[#1c398e]/25 border-4 border-solid'>
                <h1 className='p-5 text-center text-2xl font-bold'>Cobalt Instance</h1>
                <p className='px-10 text-xl pb-5'>A <a href='https://cobalt.tools' className='text-sky-300' target='_blank'>cobalt.tools</a> community instance hosted on a... Chromebook. Chromebook is running Arch Linux, with the Frontend and Backend of Cobalt hosted. Backend is using <a href='https://git.canine.tools/canine.tools/cobalt' className='text-sky-300' target='_blank'>canine.tools/cobalt</a>'s codebase. This instance supports YouTube downloads.</p>
                <a className='p-2.5 w-45 flex mx-auto text-lg justify-center align-center bg-[#1c398e]/25 text-center rounded-3xl border-[#1c398e]/25 border-4 border-solid hover:border-[#155dfc]/25 hover:bg-[#155dfc]/15 transition-all duration-300 ease-in-out cursor-pointer' href='https://cobalt.squair.xyz'>Go to Website</a>
              </FadeContent>
            </div>
          </div>
          <AnimatedContent reverse direction="horizontal" distance={50} delay={0.3} scale={0.7}>
            <svg style={{transform: "translate(150%, 50%)", marginLeft: 'auto'}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M460-160v-300H160v-40h300v-300h40v300h300v40H500v300h-40Z"/></svg>
          </AnimatedContent>
        </div>
      </section>
      <section id='contact' className='mt-[75vh] sm:mt-0 gap-10 sm:pt-0 z-0 w-[100vw] h-[100vh] flex items-center justify-center'>
        <AnimatedContent reverse direction="horizontal" duration={0.5} distance={50} delay={0.5} scale={0.9}>
          <div id='card' className='p-2 text-center flex flex-col items-center z-100 bg-[#1c398e]/25 text-center rounded-l-3xl border-[#1c398e]/25 border-4 border-solid'>
          <div className='relative w-[6rem] h-[6rem] -top-15'>
            <img id='avatar' className='w-[6rem] h-[6rem] rounded-full'/>
            <div id='status' className='absolute top-0 left-0 w-[6.5rem] h-[6.5rem] rounded-full -translate-x-[0.25rem] -translate-y-[0.25rem] -z-10'/>
            <p className='pt-1 text-xl'>Squair</p>
            <p className='text-md'>squair.dev</p>
          </div>
          <div id='spotify' className='flex items-center gap-3 z-10 p-2 mt-2 bg-green-600/40 border-4 border-solid border-green-400/25 rounded-l-2xl cursor-pointer hover:border-green-600/25 hover:bg-green-800/50 transition-all duration-300 ease-in-out'>
            <img id='art' className='w-[4rem] h-[4rem] rounded-2xl'/>
            <div className='flex flex-col'>
              <p id='song' className='text-lg'>error load</p>
              <p id='artist' className='text-md'>error load</p>
            </div>
          </div>
        </div>
        </AnimatedContent>
        <div className='flex flex-col gap-6 w-[10rem] h-[13.75rem] text-center justify-center items-center z-100'>
          <AnimatedContent direction="horizontal" duration={0.4} distance={50} delay={0.5} scale={0.9} className='flex items-center justify-center mx-auto w-[10rem] h-[3.5rem] bg-[#1c398e]/15 border-[#1c398e]/25 border-4 border-solid rounded-r-2xl hover:border-[#155dfc]/25 hover:bg-[#155dfc]/15 transition-all duration-300 ease-in-out text-lg cursor-pointer'>
              GitHub<a href='https://github.com/squairdev/' target='_blank' className='absolute w-[10rem] h-[3.5rem]'></a></AnimatedContent>
          <AnimatedContent direction="horizontal" duration={0.6} distance={50} delay={0.5} scale={0.9} className='flex items-center justify-center mx-auto w-[10rem] h-[3.5rem] bg-[#1c398e]/15 border-[#1c398e]/25 border-4 border-solid rounded-r-2xl hover:border-[#155dfc]/25 hover:bg-[#155dfc]/15 transition-all duration-300 ease-in-out text-lg cursor-pointer'>
              X / Twitter<a href='https://x.com/squairdev' target='_blank' className='absolute w-[10rem] h-[3.5rem]'></a></AnimatedContent>
          <AnimatedContent direction="horizontal" duration={0.8} distance={50} delay={0.5} scale={0.9} className='flex items-center justify-center mx-auto w-[10rem] h-[3.5rem] bg-[#1c398e]/15 border-[#1c398e]/25 border-4 border-solid rounded-r-2xl hover:border-[#155dfc]/25 hover:bg-[#155dfc]/15 transition-all duration-300 ease-in-out text-lg cursor-pointer'>
              Email<a href='mailto:me@squair.xyz' target='_blank' className='absolute w-[10rem] h-[3.5rem]'></a></AnimatedContent>
        </div>
      </section>
      <div className='relative flex align-center justify-center -top-5'>
      <p>SquairCode, 2026. All rights reserved. (v1.0.2)</p>
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