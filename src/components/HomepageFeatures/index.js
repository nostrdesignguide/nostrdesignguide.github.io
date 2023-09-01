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
        Just use the hashtag <span className='highlight'>#nostrdesign</span> and pixel-obsessed nostriches will flock to your notes!
      </>
    ),
  },
  {
    pretitle: 'Push the boundaries',
    title: 'Why nostr?',
    Svg: require('@site/static/img/home/whynostr.svg').default,
    description: (
      <>
        Nostr presents <span className='highlight'>unique challenges for designers</span> who enjoy absorbing complex new interactions and distilling them to simple experiences. It’s a place to grow and to pave a new future!
      </>
    ),
  },
  {
    pretitle: 'Make it yours',
    title: 'Your Vision. Alive.',
    Svg: require('@site/static/img/home/flag-2.svg').default,
    description: (
      <>
        Nostr is a blank canvas. It’s a chance to impart your vision on the new, open internet. A chance to <span className='highlight'>impact the next billion users</span>.
      </>
    ),
  },
];

function Feature({ Svg, pretitle, title, description }) {
  return (
    <div className={clsx('item')}>
      <div className="col-half feature">
        <span className="pretitle">{pretitle}</span>
        <h3>{title}</h3>
        <p className='description'>{description}</p>
      </div>
      <div className="col-half">
        <Svg className={styles.featureSvg} role="img" />
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="features">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
