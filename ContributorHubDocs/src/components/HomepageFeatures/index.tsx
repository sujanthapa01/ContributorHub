import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Contributor Powered',
    Svg: require('@site/static/img/undraw_personal-information_h7kf.svg').default,
    description: (
      <>
        Contributor Cash Splash makes open-source rewarding. Each contribution helps you earn recognition and grow.
      </>
    ),
  },
  {
    title: 'Focus on Contribution',
    Svg: require('@site/static/img/undraw_pair-programming_9jyg.svg').default,
    description: (
      <>
        Focus on creating value—we’ll handle tracking, badges, and contributor profiles. Just push and shine!
      </>
    ),
  },
  {
    title: 'React First',
    Svg: require('@site/static/img/undraw_react_ytu4.svg').default,
    description: (
      <>
        Built with React and TypeScript to give you the flexibility to extend and customize your contributor hub.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
