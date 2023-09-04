import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    pretitle: 'Feathers, Unite!',
    title: 'Join the Herd',
    Svg: require('@site/static/img/home/nostrich.svg').default,
    description: (
      <>
        Just use the hashtag <b>#nostrdesign</b> and pixel-obsessed nostriches will flock to your notes!
      </>
    ),
  },
  {
    pretitle: 'Push the boundaries',
    title: 'Why nostr?',
    Svg: require('@site/static/img/home/whynostr.svg').default,
    description: (
      <>
        Nostr presents <b>unique challenges for designers</b> who enjoy absorbing complex new interactions and distilling them to simple experiences. It’s a place to grow and to pave a new future!
      </>
    ),
  },
];


function Feature({ Svg, pretitle, title, description }) {
  return (
    <div className={styles.item}>
      <div className={styles.col}>
        <span className={styles.pretitle}>{pretitle}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.col}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.features}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
