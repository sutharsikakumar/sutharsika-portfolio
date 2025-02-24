import styles from './projects.module.css';


export default function Projects() {
    return (
      <div>
        <div className={styles.box}>
                <strong>Brewmail.ai</strong>
                <p>A customized email generator to create personable emails to land your next coffee 
                  chat in Investment Banking, Big Tech, or Consulting! Currently working on the beta launch, coming soon!
                </p>
        </div>
        <div className={styles.box}>
                <h2>Project Box</h2>
                <p>Details about the project go here...</p>
        </div>
        <div className={styles.box}>
                <h2>Project Box</h2>
                <p>Details about the project go here...</p>
        </div>
      </div>
    );
  }


  