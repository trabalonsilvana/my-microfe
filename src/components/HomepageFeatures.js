import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Decision tree',
    Svg: require('../../static/img/decision.svg').default,
    description: (
      <>
        We work in build a quick way that will help you to select the better option for your product.
      </>
    ),
  },
  {
    title: 'Accelerator repository (coming soon)',
    Svg: require('../../static/img/fast.svg').default,
    description: (
      <>
        Create your Micro Front-End using <code>Single SPA</code> framework.
      </>
    ),
  },
  {
    title: 'Powered by Studio UI engineering',
    Svg: require('../../static/img/team.svg').default,
    description: (
      <>
        We work to give you quick solutions for your product's big decisions.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
