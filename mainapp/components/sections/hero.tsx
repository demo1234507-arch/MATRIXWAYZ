// "use client";

// import React, { useRef, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';



// const Hero = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let stars: { x: number; y: number; radius: number; alpha: number; twinkling: boolean; twinkleSpeed: number, vy: number }[] = [];
//     let animationFrameId: number;

//     const createStars = () => {
//       stars = [];
//       const numStars = window.innerWidth > 768 ? 800 : 300;
//       for (let i = 0; i < numStars; i++) {
//         stars.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           radius: Math.random() * 1.1 + 0.5,
//           alpha: Math.random(),
//           twinkling: Math.random() > 0.5,
//           twinkleSpeed: Math.random() * 0.05,
//           vy: Math.random() * 0.1 - 0.05,
//         });
//       }
//     };
    
//     const resizeCanvas = () => {
//       if(canvas.parentElement){
//         canvas.width = canvas.parentElement.offsetWidth;
//         canvas.height = canvas.parentElement.offsetHeight;
//         createStars();
//       }
//     };

//     const render = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       stars.forEach(star => {
//         if (star.twinkling) {
//           star.alpha += star.twinkleSpeed;
//           if (star.alpha > 1 || star.alpha < 0) {
//             star.twinkleSpeed = -star.twinkleSpeed;
//           }
//         }
        
//         ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
//         ctx.fill();
        
//         star.y += star.vy;
//         if (star.y > canvas.height + star.radius) {
//             star.y = -star.radius;
//             star.x = Math.random() * canvas.width;
//         } else if (star.y < -star.radius) {
//             star.y = canvas.height + star.radius;
//             star.x = Math.random() * canvas.width;
//         }
//       });
//       animationFrameId = requestAnimationFrame(render);
//     };

//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);
//     render();

//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <header className="relative flex h-screen min-h-[900px] w-full flex-col items-center justify-center overflow-hidden bg-[#080808] px-4 pb-20 pt-24 text-white">
//       <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full opacity-70" />
      
//       <div className="absolute inset-0 z-10 bg-[radial-gradient(40%_40%_at_20%_20%,rgba(255,107,26,0.3)_0%,transparent_100%)]"></div>
//       <div className="absolute inset-0 z-10 bg-[radial-gradient(30%_30%_at_80%_30%,rgba(156,85,33,0.3)_0%,transparent_100%)]"></div>
//       <div className="absolute inset-0 z-10 bg-[radial-gradient(35%_35%_at_50%_100%,rgba(255,107,26,0.25)_0%,transparent_100%)]"></div>
      
//       <div className="absolute inset-0 z-20 h-full w-full bg-[url('https://framerusercontent.com/images/rRgbCFyGcbBEF3D2s392s3O2g.png')] bg-repeat opacity-[0.03]"></div>

//       <div className="relative z-30 mt-[-5%] flex flex-grow flex-col items-center justify-center text-center">
//         <h1 className="font-inter text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
//           Transform your business with
//           <br />
//           <span className="bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
//             AI-Powered Solutions
//           </span>
//         </h1>
//         <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
//           MATRIXWAYZ delivers innovative product-based and service-based solutions powered by cutting-edge Artificial Intelligence. We build and release our own products while providing custom AI solutions tailored to your business needs.
//         </p>
//         <div className="mt-10 flex flex-wrap justify-center gap-4">
//           <Link
//             href="/#services"
//             className="group relative inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-medium text-black transition-shadow duration-300"
//           >
//              <div className="absolute -inset-0.5 rounded-lg bg-white opacity-75 blur transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 20px 4px rgba(255, 140, 58, 0.3), 0 0 8px 0 rgba(255, 140, 58, 0.5) inset' }}></div>
//             <span className='relative'>Explore Solutions</span>
//           </Link>
//           <Link
//             href="#contact"
//             className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary bg-transparent px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-primary/10"
//           >
//             Contact Us
            
//           </Link>
//         </div>
//       </div>
      
//     </header>
//   );
// };

// export default Hero;


"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: { x: number; y: number; radius: number; alpha: number; twinkling: boolean; twinkleSpeed: number, vy: number }[] = [];
    let animationFrameId: number;

    const createStars = () => {
      stars = [];
      const numStars = window.innerWidth > 768 ? 800 : 300;
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.1 + 0.5,
          alpha: Math.random(),
          twinkling: Math.random() > 0.5,
          twinkleSpeed: Math.random() * 0.05,
          vy: Math.random() * 0.1 - 0.05,
        });
      }
    };
    
    const resizeCanvas = () => {
      if(canvas.parentElement){
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
        createStars();
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        if (star.twinkling) {
          star.alpha += star.twinkleSpeed;
          if (star.alpha > 1 || star.alpha < 0) {
            star.twinkleSpeed = -star.twinkleSpeed;
          }
        }
        
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        
        star.y += star.vy;
        if (star.y > canvas.height + star.radius) {
            star.y = -star.radius;
            star.x = Math.random() * canvas.width;
        } else if (star.y < -star.radius) {
            star.y = canvas.height + star.radius;
            star.x = Math.random() * canvas.width;
        }
      });
      animationFrameId = requestAnimationFrame(render);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <header className="relative flex h-screen min-h-[900px] w-full flex-col items-center justify-center overflow-hidden bg-[#080808] px-4 pb-20 pt-24 text-white">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full opacity-70" />
      
      <div className="absolute inset-0 z-10 bg-[radial-gradient(40%_40%_at_20%_20%,rgba(255,107,26,0.3)_0%,transparent_100%)]"></div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(30%_30%_at_80%_30%,rgba(156,85,33,0.3)_0%,transparent_100%)]"></div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(35%_35%_at_50%_100%,rgba(255,107,26,0.25)_0%,transparent_100%)]"></div>
      
      <div className="absolute inset-0 z-20 h-full w-full bg-[url('https://framerusercontent.com/images/rRgbCFyGcbBEF3D2s392s3O2g.png')] bg-repeat opacity-[0.03]"></div>

      <div className="relative z-30 mt-[-5%] flex flex-grow flex-col items-center justify-center text-center">
        <h1 className="font-inter text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
          Transform your business with
          <br />
          <span className="bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            AI-Powered Solutions
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          MATRIXWAYZ delivers innovative product-based and service-based solutions powered by cutting-edge Artificial Intelligence. We build and release our own products while providing custom AI solutions tailored to your business needs.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/#services"
            className="group relative inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-medium text-black transition-shadow duration-300"
          >
             <div className="absolute -inset-0.5 rounded-lg bg-white opacity-75 blur transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 20px 4px rgba(255, 140, 58, 0.3), 0 0 8px 0 rgba(255, 140, 58, 0.5) inset' }}></div>
            <span className='relative'>Explore Solutions</span>
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary bg-transparent px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-primary/10"
          >
            Contact Us
          </Link>
        </div>

        {/* Clutch Rating Badge */}
        <div className="mt-12 animate-fade-in-up">
          <Link 
            href="https://clutch.co/profile/matrixwayz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="flex items-center justify-center rounded-2xl bg-white/95 px-6 py-3 shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,140,58,0.2)]">
              <Image
                src="/clutch-rating.png" 
                alt="Reviewed on Clutch - 5.0 Rating"
                width={200}
                height={50}
                className="h-auto w-[160px] object-contain md:w-[200px]"
                priority
              />
            </div>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Hero;