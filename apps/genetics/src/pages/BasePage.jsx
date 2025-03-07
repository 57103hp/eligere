import React from 'react';
import { Helmet } from 'react-helmet';

import { Footer, GlobalSearch, Page } from 'ui';

import NavBar from '../components/NavBar/NavBar';
import { externalLinks, mainMenuItems } from '../constants';

const BasePage = ({ children }) => (
  <Page
    header={
      <NavBar name="Genetics" items={mainMenuItems} search={<GlobalSearch />} />
    }
    // footer={<Footer externalLinks={externalLinks} />}
  >
    <Helmet
      defaultTitle="Eligere Genetics"
      titleTemplate="%s | Eligere Genetics"
    />
    {children}
  </Page>
);

export default BasePage;
