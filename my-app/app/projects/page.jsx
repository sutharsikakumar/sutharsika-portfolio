import styles from './projects.module.css';


export default function Projects() {
    return (
      <div>
        <div className={styles.box}>
                <strong>baXter</strong>
                <p>Access the github repository here: https://github.com/sutharsikakumar/baXter.git. A personalized speech training agent that provides various tools such as tongue-twister generation and feedback based on audio. There is also a presenter mode where a user is able to record their speech and generate personalized slides for their speech. Additionally, I am currently working on making the algorithm for the speech analysis and feedback more robust. 
                </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
            <img 
            src="/assets/presenter.png" 
            alt="JUST HURRY" 
            className={styles.imagetwo}
            style={{ aspectRatio: '1/1' }}
          />
            <img 
            src="/assets/twister.png" 
            alt="JUST HURRY" 
            className={styles.imagetwo}
            style={{ aspectRatio: '1/1' }}
          />
          </div>
        </div>
        <div className={styles.box}>
                <strong>JustHurry Hurricane Relief Tool</strong>
                <p>Access the github repository here: https://github.com/AnandVishesh1301/just-hurry.git. JustHurry is a comprehensive tool that connects those in need with relief organizations ready to provide timely aid. At its core is a custom ML model that calculates a real-time risk factor for communities based on their socioeconomic vulnerability and historical hurricane data. It uses critical variables like air pressure, wind speed, income, and population density to predict impact zones and determine which regions require the most attention. Created as a part of the HackHarvard Competition.</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
            <img 
            src="/assets/JUSTHURRY3.png" 
            alt="JUST HURRY" 
            className={styles.image}
            style={{ aspectRatio: '1/1' }}
          />
            <img 
            src="/assets/JUSTHURRY2.png" 
            alt="JUST HURRY" 
            className={styles.image}
            style={{ aspectRatio: '1/1' }}
          />
            <img 
            src="/assets/JUSTHURRY1.png" 
            alt="JUST HURRY" 
            className={styles.image}
            style={{ aspectRatio: '1/1' }}
          />
          </div>
        </div>
      </div>
    );
  }


  