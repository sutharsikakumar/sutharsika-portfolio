import styles from "./about.module.css";
import TypingEffect from "../components/typingeffect";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8">
      {/* Fixed container class name */}
      <div className={styles.aboutContainer}>
        <div className={styles.introductionTitle}>About Me!</div>
        <div className={styles.introductionBody}>
        Hi! I am currently studying Computer Science and Statistics at the University of North Carolina at Chapel Hill. I'm passionate about exploring innovative solutions to solve problems, which has inspired my involvement in projects like AI-based prompt optimization and energy usage tracking. I'm also engaged in research at Duke University, where I'm pursuing research in the AI for Science space. In my free time, I enjoy activities like rock climbing, running, dancing, and drawing, which help me stay active and creative. Below are some pictures of me doing things I love!
        </div>
      </div>

      <h2 className="mt-8 text-2xl font-bold"> </h2>
      <div className={styles.imageScroller}>
        <div className={styles.imageScrollWrapper}>
          <img 
            src="/assets/dance1.jpg" 
            alt="Cake" 
            className={styles.image}
            style={{ aspectRatio: '1/1' }}
          />
           <img 
            src="/assets/robotics.jpg" 
            alt="Cake" 
            className={styles.image}
            style={{ aspectRatio: '1/1' }}
          />
          <img 
            src="/assets/mit.jpg" 
            alt="Cake" 
            className={styles.image}
            style={{ aspectRatio: '1/1' }}
          />
          <img 
            src="/assets/rockclimb.jpg" 
            alt="Cake" 
            className={styles.image}
            style={{ aspectRatio: '1/1' }}
          />
          <img 
            src="/assets/robotics2.jpg" 
            alt="Cake" 
            className={styles.image}
            style={{ aspectRatio: '1/1' }}
          />
          <img 
            src="/assets/robotics3.jpg" 
            alt="Cake" 
            className={styles.image}
            style={{ aspectRatio: '1/1' }}
          />
          <img 
            src="/assets/rockclimb2.jpg" 
            alt="Cake" 
            className={styles.image}
            style={{ aspectRatio: '1/1' }}
          />
          <img 
            src="/assets/dance1.jpg" 
            alt="Cake" 
            className={styles.image}
            style={{ aspectRatio: '1/1' }}
          />
           <img 
            src="/assets/robotics.jpg" 
            alt="Cake" 
            className={styles.image}
            style={{ aspectRatio: '1/1' }}
          />
          <img 
            src="/assets/mit.jpg" 
            alt="Cake" 
            className={styles.image}
            style={{ aspectRatio: '1/1' }}
          />
          <img 
            src="/assets/robotics2.jpg" 
            alt="Cake" 
            className={styles.image}
            style={{ aspectRatio: '1/1' }}
          />
          <img 
            src="/assets/robotics3.jpg" 
            alt="Cake" 
            className={styles.image}
            style={{ aspectRatio: '1/1' }}
          />
          <img 
            src="/assets/rockclimb2.jpg" 
            alt="Cake" 
            className={styles.image}
            style={{ aspectRatio: '1/1' }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;