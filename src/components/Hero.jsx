
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Button from './button';
import { TiLocationArrow } from 'react-icons/ti';

const totalVideos = 4;

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isFrontA, setIsFrontA] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const videoA = useRef(null);
  const videoB = useRef(null);

  const getVidSrc = (index) => `/videos/hero-${index}.mp4`;
  const getNextIndex = (index) => (index % totalVideos) + 1;

  const playNext = () => {
    if (isTransitioning) return;

    const nextIndex = getNextIndex(currentIndex);
    setIsTransitioning(true);

    const frontVideo = isFrontA ? videoA.current : videoB.current;
    const backVideo = isFrontA ? videoB.current : videoA.current;

    backVideo.oncanplay = null;
    backVideo.src = getVidSrc(nextIndex);
    backVideo.load();

    backVideo.oncanplay = () => {
      backVideo.oncanplay = null;
      backVideo.play();

      const tl = gsap.timeline({
        onComplete: () => {
          setCurrentIndex(nextIndex);
          setIsFrontA(!isFrontA);
          setIsTransitioning(false);
        },
      });

      tl.to(frontVideo, {
        opacity: 0,
        duration: 0.5,
        ease: 'power1.inOut',
      });

      tl.fromTo(
        backVideo,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: 'power1.inOut',
        }
      );
    };
  };

  useGSAP(() => {
    gsap.set('#video-frame', {
      clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
      borderRadius: '0 0 40% 10%',
    });
    gsap.from('#video-frame', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className='relative w-screen h-dvh overflow-x-hidden'>
      <div
        id="video-frame"
        className='relative z-10 w-screen h-dvh overflow-hidden bg-black rounded-lg'
      >
        <video
          ref={videoA}
          src={getVidSrc(currentIndex)}
          autoPlay
          loop
          muted
          className='absolute top-0 left-0 size-full object-cover transition-opacity duration-500'
          style={{ opacity: isFrontA ? 1 : 0 }}
        />
        <video
          ref={videoB}
          src=""
          autoPlay
          loop
          muted
          className='absolute top-0 left-0 size-full object-cover transition-opacity duration-500'
          style={{ opacity: isFrontA ? 0 : 1 }}
        />

        <div className="absolute-center group z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div
            onClick={playNext}
            className={`opacity-0 scale-90 transition-all duration-300 ease-in-out group-hover:opacity-70 group-hover:scale-100 ${
              isTransitioning ? 'pointer-events-none' : ''
            }`}
          >
            <video
              src={getVidSrc(getNextIndex(currentIndex))}
              loop
              muted
              className='size-64 object-cover rounded-lg'
              playsInline
            />
          </div>
        </div>

        <h1 className='special-font hero-heading absolute bottom-5 right-10 text-blue-100 text-base sm:text-lg md:text-9xl lg:text-9xl'>
          D<b>A</b>WN FALLS
        </h1>

        <div className='absolute left-0 top-0 z-40 size-full'>
          <div className='mt-24 px-5 sm:px-10'>
            <h1 className='special-font text-blue-100 pt-8 hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.15] tracking-tight max-w-fit'>
              UNLEASH <b>R</b>AGE
            </h1>
          <p className="mb-5 max-w-64 font-robert-regular text-blue-50 leading-relaxed tracking-wide text-sm md:text-base">
  Flames burn brighter at night<br />
  Every breath could be your last
</p>
            <Button
              id="watch-trailer"
              title="Slay Now"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
          <h1 className='special-font hero-heading absolute bottom-5 right-10 text-black text-base sm:text-lg md:text-9xl lg:text-9xl'>
          D<b>A</b>WN FALLS
        </h1>
    </div>
  );
};

export default Hero;
