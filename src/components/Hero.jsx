// Make a hero component with a title subtitle and a button, with a little blur effect on the background image
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Hero = ({
  title,
  subtitle,
}) => {
  return (
    // Make the hero text only take 50% of entire widht, so it aligns to the left with the image blurred on the right
    <div className="mx-auto flex flex-col justify-center items-center xl:items-baseline w-full xl:max-w-7xl h-screen"
    >
        <h1 className="font-bold uppercase text-4xl xl:text-8xl text-center bg-gradient-to-r from-red-600 via-yellow-400 to-green-600 bg-clip-text text-transparent leading-tight sm:leading-snug xl:max-w-1/2">
          {title}
        </h1>
        <p className="text-2xl xl:text-4xl mt-7 leading-10 text-center">
          {subtitle}
        </p>

    </div>
  );
}
export default Hero;