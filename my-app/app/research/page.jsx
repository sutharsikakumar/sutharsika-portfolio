import styles from './research.module.css';


export default function Projects() {
    return (
      <div>
        <div>
          <strong></strong>
        </div>
        <div className={styles.box}>
                <strong>Zero-shot Autonomous Microscopy for Scalable and Intelligent Characterization of 2D Materials</strong>
                <p>More information coming soon.
                </p>
        </div>
        <div className={styles.box}>
                <strong>Band Structure Modeling of Perovskite Materials with Quantum ESPRESSO for Multijunction Photovoltaic Cell Optimization </strong>
                <a href="https://arxiv.org/abs/2501.07760" target="_blank"> https://arxiv.org/abs/2501.07760</a>
                <p>Abstract: Increasing photovoltaic conversion efficiency, or PCE, has proven to be a critical factor in the transition to renewable energy. There exist strong interdependencies between the perovskite crystals and multijunction architectures within photovoltaic cell research. In present literature, there is a lack of intersection in investigating crystallographic geometry and compositional engineering with representation of computational modeling systems. In this paper, we propose a novel method for the rapid discovery of high-efficiency perovskite-based multijunction cells, specifically with silicon as the low band gap absorbing semiconductor material. We model the spatial geometries of potential perovskite candidates for high-efficiency cells using the Schrodinger Material Science Maestro, optimizing the periodic boundary conditions on the unit cell to minimize edge-bound errors. Band structure calculations using density functional theory become effective to approximate the PCE. After careful adjustments to the ibrav lattice parameter and parallelization, Quantum ESPRESSO was optimized for perovskite multijunction band structure calculations. Computational results on the six test-perovskite configurations demonstrate the effectiveness and superiority of our proposed representation and method, with a calculated efficiency of about 46% for one of the modeled perovskites, placing it at the top of high-efficiency perovskite-Si multijunction cells. With this method, the potential exists to bring forth a new generation of photovoltaic cells that are easily manufacturable, highly efficient, and economical.
                </p>
        </div>
        <div className={styles.box}>
                <strong>Implementing machine learning to establish a relationship between coal ash spread and lined vs. unlined sites using publicly available data</strong>
                <a href="https://eartharxiv.org/repository/view/7238/" target="_blank"> https://eartharxiv.org/repository/view/7238/</a>
                <p>The fuel combustion process within coal power plants causes a significant amount of waste, called coal ash, often stored in slush basins. Due to low maintenance and lack of proper regulations, coal ash ponds have a high tendency to contaminate nearby groundwater sources. Without a simple way to ascertain whether the drinking water and soil near a private residential area is contaminated, citizens are unaware of the environmental risk surrounding them. To resolve this issue, this study aims to establish a correlation between the heavy metal concentrations in soil that are publicly available and the locations of coal ash plants. Thereafter, a user-friendly map will be created to determine the risk levels of their locations. To establish the correlation, four regression models and two classification models were implemented. Out of these models, the Support Vector Machine (SVM) proved to be the most accurate model in risk prediction, and the Mean Squared Error (MSE) reached the value of 0.01 in some cases. By running the models to compare the risks between the lined and unlined coal ash ponds, it was evident that the contamination levels surrounding unlined ponds were significantly greater than those near lined ponds. The results of this study will make a direct and positive impact on the community.</p>
        </div>
        <div className={styles.box}>
                <strong>Understanding the Importance of Stellar Birth and Evolution for a Comprehensive Understanding of the Sun and Other Stars</strong>
                <a href="https://eartharxiv.org/repository/view/7638/" target="_blank"> https://eartharxiv.org/repository/view/7638/</a>
                <p>Abstract: Stars are massive, luminous celestial bodies that are primarily composed of hydrogen and helium gas, as well as other trace elements. Considered as the building blocks of galaxies, including our own Milky Way, and play a crucial role in the formation and evolution of the universe. In the context of the solar system, the Sun is the most important star. It is the center of the solar system, around which all the planets orbit, and provides the energy and heat necessary for life on Earth to exist. The Sun is a G-type main-sequence star, which means that it is relatively stable and will remain in this state for billions of years. However, other types of stars have different life cycles and characteristics, and studying them can help us better understand the universe and our place in it. Overall, stars are important in the context of the solar system because they provide the energy and gravitational pull necessary to keep planets in orbit, and studying them can help us better understand the formation and evolution of our solar system and the universe as a whole.</p>
        </div>
      </div>
    );
  }


  