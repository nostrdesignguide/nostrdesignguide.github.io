import React from 'react';
import styles from './styles.module.css';

function Vision({ image, title, description, link }) {
  const columns = [
    {
      image: require("@site/static/img/home/considerations.png").default,  // Use require to import the image
      title: "Product Considerations",
      description: "Know before you build. Is your client solving a real problem? What opportunities exist? How do you turn a side project into a business?",
      link: "https://nostrdesign.org/docs/category/product-design-considerations/"  // Add your link here
    },
    {
      image: require("@site/static/img/home/approach.png").default,  // Use require to import the image
      title: "Practical Approaches",
      description: "Nostr is a paradigm shift and requires some thought out design decisions that can make or break user experience.",
      link: "https://nostrdesign.org/docs/category/how-to/"  // Add your link here
    },
    {
      image: require("@site/static/img/home/referencedesigns.png").default,  // Use require to import the image
      title: "Reference Designs",
      description: "A bit of inspiration can go a long way! Check out some of the ways in which you can design your client, or use designs as a starting point.",
      link: "https://nostrdesign.org/docs/category/reference-designs/"  // Add your link here
    }
  ];

  return (
    <section className={styles.vision}>
      <div className={styles.container}>
        <h3>Design & build your vision</h3>
        <span>
          Nostr is a blank canvas. It’s a chance to impart your vision on the new, open internet. A chance to <b>impact the next billion users</b>.
        </span>
        <div className={styles.actions}>
          {columns.map((col, index) => (
            <div className={styles.col} key={index}>
              <img className={styles.imgvision} src={col.image} alt={col.title} role='img' />
              <h4>{col.title}</h4>
              <p>{col.description}</p>
              <a href={col.link} title={col.title}>Explore {col.title.toLowerCase()}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Vision;