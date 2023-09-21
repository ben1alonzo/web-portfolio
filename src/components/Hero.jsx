import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#17b81f]" />
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}
          text-white`}>
            Hello&nbsp;
            <span className="text-[#17b81f]">World</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Welcome to my life! <br className="sm:block hidden" /> Explore to your heart's content.
          </p>
        </div>
      </div>
      
      <ComputersCanvas />
    </section>
  )
}

export default Hero