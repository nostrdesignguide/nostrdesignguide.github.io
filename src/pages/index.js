import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Vision from '@site/src/components/Vision';

import styles from './index.module.css';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.container}>
        <span className={styles.pretitle}>Brand Spakin' New!</span>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx(styles.button, styles.buttonSecondary, styles.buttonLg)}
            to="/docs/intro">
            Explore the Guide
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.64582 19.2518C3.69175 19.8139 3.79031 20.3306 4.0376 20.816C4.4211 21.5686 5.03302 22.1805 5.78567 22.564C6.271 22.8113 6.78771 22.9099 7.3498 22.9558C7.89099 23 8.55535 23 9.3603 23H17.4402C17.9673 23 18.4221 23 18.7967 22.9694C19.192 22.9371 19.5852 22.8658 19.9636 22.673C20.5281 22.3854 20.987 21.9265 21.2746 21.362C21.4674 20.9836 21.5388 20.5904 21.5711 20.195C21.5985 19.8593 21.6016 19.4593 21.6016 19C21.6016 14.3871 21.6016 9.77429 21.6016 5.16144C21.6016 4.6343 21.6017 4.17954 21.5711 3.80497C21.5388 3.40963 21.4674 3.01641 21.2746 2.63803C20.987 2.07354 20.5281 1.6146 19.9636 1.32698C19.5852 1.13419 19.192 1.06287 18.7967 1.03057C18.4221 0.999969 17.9673 0.999984 17.4402 1H9.36033C8.55539 0.999989 7.89099 0.99998 7.3498 1.0442C6.78771 1.09012 6.271 1.18869 5.78567 1.43598C5.03302 1.81947 4.4211 2.43139 4.0376 3.18404C3.79031 3.66938 3.69175 4.18608 3.64582 4.74818C3.60161 5.28937 3.60162 5.95372 3.60163 6.75869V17.2413C3.60162 17.9123 3.59121 18.5835 3.64582 19.2518ZM19.5777 20.0322C19.5555 20.3038 19.5178 20.4045 19.4926 20.454C19.3968 20.6422 19.2438 20.7951 19.0556 20.891C19.0062 20.9162 18.9055 20.9539 18.6338 20.9761C18.3505 20.9992 17.9782 21 17.4016 21H9.40163C8.54505 21 7.96276 20.9992 7.51267 20.9625C7.07425 20.9266 6.85005 20.8617 6.69365 20.782C6.31732 20.5903 6.01136 20.2843 5.81962 19.908C5.64044 19.5563 5.55184 19.2518 5.61842 18.7397C5.74602 17.7581 6.58529 17 7.60163 17H19.6016C19.6016 18.005 19.6596 19.0295 19.5777 20.0322Z" fill="black" />
            </svg>

          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A comprehensive resource for designers and developers to build successful nostr products | TD#001 ">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Vision />
      </main>
    </Layout>
  );
}
