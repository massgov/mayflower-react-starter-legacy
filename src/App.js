import React, { Component } from 'react';
import { Header, Footer, ButtonFixedFeedback } from '@massds/mayflower-react';
import UtilityNavData from './data/UtilityNav.data';
import MainNavData from './data/MainNav.data';
import HeaderSearchData from './data/HeaderSearch.data';
import FooterData from './data/Footer.data';
import SocialLinksLiveData from './data/SocialLinksLive.json';

import './index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.footerProps = {
      footerLinks: FooterData.footerLinks,
      socialLinks: SocialLinksLiveData.socialLinks
    };
    this.headerProps = {
      utilityNav: UtilityNavData,
      headerSearch: HeaderSearchData,
      mainNav: MainNavData,
      hideHeaderSearch: true,
      hideBackTo: true,
      siteLogoDomain: { url: { domain: 'https://www.mass.gov/' } }
    };
  }

  render() {
    return(
      <div className="App">
        <Header {...this.headerProps} />
        <main className="main-content">
          <section className="main-content--two">
            <div className="ma__page-header__content">
              <h1 className="ma__page-header__title">Mayflower Starter Template</h1>
            </div>
          </section>
          <ButtonFixedFeedback href="https://www.mass.gov/feedback" />
        </main>
        <Footer {...this.footerProps} />
      </div>
    );
  }
}

export default App;
