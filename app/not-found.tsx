'use client'
import GradualBlur from './comp/GradualBlur';
import DotGrid from './comp/DotGrid';
import BlurText from "./comp/BlurText";
import FadeContent from "./comp/FadeContent";
import AnimatedContent from "./comp/AnimatedContent";
import { ReactLenis} from 'lenis/react'

export default function Home() {
  return (
    <section className="font relative h-[100vh] sm:overflow-hidden">
      <ReactLenis root>
      <section className='z-10 w-[100vw] h-[93vh] flex flex-col items-center justify-center'>
        <div className='absolute h-[100vh]'>
          <div className='absolute w-[100rem] right-0 translate-x-1/2 -translate-y-1/2'>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800" opacity="0.3"><defs><filter id="bbblurry-filter-3" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="130" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter-3)"><ellipse rx="150" ry="150" cx="400" cy="400" fill="#00a6f4"></ellipse></g></svg>
          </div>
          <div className='absolute w-[100rem] right-0 bottom-0 translate-x-1/2 translate-y-1/2'>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800" opacity="0.3"><defs><filter id="bbblurry-filter-3" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="130" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter-3)"><ellipse rx="150" ry="150" cx="400" cy="400" fill="#00a6f4"></ellipse></g></svg>
          </div>
        </div>
        <div className='max-w-2xl flex flex-col items-center justify-center'>
          <div className='text-5xl md:text-7xl font-bold mb-4 leading-20 mx-auto text-center'>
            <BlurText text="404" direction="bottom" delay={70} className="justify-center" />
          </div>
          <div className='mx-auto text-center pt-5 text-[1.5rem] max-w-[80vw] lg:max-w-[30vw] text-[#ababab] pb-10'>
            <FadeContent blur delay={0.6} duration={0.76}>{"Either this page doesn't exist, or I removed it in a newer version of this website."}</FadeContent>
            <div style={{flexGrow:"1"}}/>
          </div>
          <AnimatedContent distance={10} direction='vertical' delay={0.9} className='z-[1000]'><a aria-label='Go back home' className='p-4 bg-transparent hover:bg-sky-500 text-white hover:text-black border-sky-500 border-2 text-xl transition-all duration-200 ease-in-out' href='/'>Go Home</a></AnimatedContent>

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
      /></ReactLenis></section>


  );
  
}