import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faXing,
} from '@fortawesome/free-brands-svg-icons';

import LinkExternal from '../components/LinkExternal';
import Page from '../components/Page';
import Profile from '../components/Profile';
import Title from '../components/Title';

const Index: React.FC = () => (
  <Page>
    <div className="flex flex-col items-center space-y-12 lg:flex-row lg:space-y-0 lg:space-x-10">
      <Profile />
      <Title primary="Kevin Porten" secondary="Web Developer" />
    </div>
    <div className="flex flex-col items-center mt-8 space-y-6 lg:mt-2 lg:flex-row lg:justify-end lg:space-y-0 lg:space-x-5">
      <LinkExternal
        href="mailto:hello@kevinporten.dev"
        className="text-xl"
        hasUnderline
      >
        hello@kevinporten.dev
      </LinkExternal>
      <span className="flex space-x-5 text-2xl">
        <LinkExternal href="https://github.com/kporten">
          <span className="sr-only">GitHub</span>
          <FontAwesomeIcon icon={faGithub} />
        </LinkExternal>
        <LinkExternal
          href="https://twitter.com/KevinPorten"
          className="hover:text-blue-400 dark:hover:text-twitter"
        >
          <span className="sr-only">Twitter</span>
          <FontAwesomeIcon icon={faTwitter} />
        </LinkExternal>
        <LinkExternal
          href="https://www.xing.com/profile/Kevin_Porten/cv"
          className="hover:text-green-600 dark:hover:text-xing"
        >
          <span className="sr-only">Xing</span>
          <FontAwesomeIcon icon={faXing} />
        </LinkExternal>
      </span>
    </div>
  </Page>
);

export default Index;
