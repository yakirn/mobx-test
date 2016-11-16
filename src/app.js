import 'babel-polyfill';
import 'isomorphic-fetch';
import 'es6-promise/auto';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'mobx-react';
import Root from './components/Root/Root';
import {clientFetchUtils} from 'wix-fetch-utils';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';
import DomainStore from './stores/DomainStore';
import UIStore from './stores/UIStore';
import DevTools from 'mobx-react-devtools';

class CampaignAPI {
  update(campaignJson) {
    return new Promise(resolve => {
      setTimeout(resolve, 3000);
      console.log(`PUT: /campaigns/${campaignJson.id}`, campaignJson);
    });
  }
}

clientFetchUtils();
const uiStore = new UIStore();
const store = new DomainStore(new CampaignAPI(), uiStore);
store.createCampaign();
store.createCampaign();
store.createCampaign();
const rootEl = document.getElementById('root');
const locale = window.__LOCALE__;
const baseUrl = window.__STATICS_BASE_URL__;

render(
  <Provider store={store} uiStore={uiStore}>
    <I18nextProvider i18n={i18n({locale, baseUrl})}>
      <div>
        <Root/>
        <DevTools/>
      </div>
    </I18nextProvider>
  </Provider>,
  rootEl
);


