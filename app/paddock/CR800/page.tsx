'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  FaCog,
  FaCarSide,
  FaShapes,
  FaCar,
  FaCompressArrowsAlt,
  FaWrench,
  FaRoad,
} from 'react-icons/fa';
import { GiCarWheel } from 'react-icons/gi';

export default function CR800Page() {
  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='relative min-h-screen overflow-hidden bg-white text-black'>
      <main className='container mx-auto max-w-7xl px-4 py-12 md:py-24'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='flex flex-col items-center justify-center gap-8 md:gap-12'
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mb-4 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-center text-3xl font-extrabold text-transparent md:mb-8 md:text-4xl lg:text-6xl'
          >
            CR800 (2010)
          </motion.h1>

          <div
            className={`flex w-full ${isSmallScreen ? 'flex-col' : 'flex-row'} gap-8 md:gap-12`}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className={isSmallScreen ? 'w-full' : 'w-1/2'}
            >
              <BackgroundGradient className='rounded-3xl p-1'>
                <div className='rounded-3xl border-none bg-white shadow-lg'>
                  <div className='p-0'>
                    <div
                      className='relative aspect-video overflow-hidden rounded-3xl'
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <Image
                        src='/images/CR800.jpg'
                        alt='CR800 Prototype'
                        fill
                        style={{ objectFit: 'cover' }}
                        className='transition-transform duration-300 hover:scale-110'
                        priority
                      />
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'
                          >
                            <p className='text-xl font-bold text-white md:text-3xl'>
                              CR800 Prototype
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>

            <div className={`${isSmallScreen ? 'w-full' : 'w-1/2'} space-y-6`}>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='text-justify text-lg'
              >
                Since we had no earlier experience of manufacturing a race car,
                we first decided to get that out of the way by coming up with a
                prototype vehicle. We wanted to avoid the situation of turning
                up at the competition with the first car we collectively built.
                Thus came into existence the CR800, our first prototype. This
                was a car which was built from whatever scrap material we could
                find in and around the University. The team went down to brass
                tacks and we entered the vast ocean that is motorsport
                engineering! The CR800 was the first big success we had and we
                unveiled it publically at SRM University&apos;s biggest national
                cultural fest &apos;Milan 2011&apos; in March in front of 2000+
                people. We generated a lot of interest during this event post
                the launch.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='flex flex-wrap gap-2'
              >
                <Badge
                  variant='outline'
                  className='border-red-500 text-red-500'
                >
                  First Prototype
                </Badge>
                <Badge
                  variant='outline'
                  className='border-red-500 text-red-500'
                >
                  Scrap Material Build
                </Badge>
                <Badge
                  variant='outline'
                  className='border-red-500 text-red-500'
                >
                  Milan 2011 Launch
                </Badge>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='w-full'
          >
            <h3 className='mb-4 text-center text-lg font-bold text-red-500 md:mb-6 md:text-xl'>
              Specifications
            </h3>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6'>
              {[
                ['Engine', 'Three-cylinder engine, Suzuki F8B', FaCog],
                ['Gearbox', '5 Speed (4+1) Synchromesh Gearbox', FaWrench],
                [
                  'Chassis',
                  'Arc Welded Tubular Space Frame Chassis',
                  FaCarSide,
                ],
                ['Body', 'Glass fibre Reinforced Plastic Body', FaShapes],
                ['Suspension', 'Double A-arm suspension', FaCar],
                [
                  'Dampers',
                  'Direct Actuated Spring Damper units both front & rear',
                  FaCompressArrowsAlt,
                ],
                ['Tires', '185/60 R13 JK Tyre Ultima', FaRoad],
                ['Brakes', '4 outboard brake disks', GiCarWheel],
              ].map(([title, spec, Icon], index) => (
                <motion.div
                  key={title as string}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className='rounded-lg border border-red-500 bg-red-50 p-3 transition-all duration-300 hover:shadow-lg'
                >
                  <div className='mb-2 flex items-center'>
                    {Icon && typeof Icon === 'function' && (
                      <Icon className='mr-2 text-red-500' />
                    )}
                    <h4 className='text-sm font-semibold text-red-600 md:text-base'>
                      {title as string}
                    </h4>
                  </div>
                  <p className='text-xs text-gray-700 md:text-sm'>
                    {spec as string}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
