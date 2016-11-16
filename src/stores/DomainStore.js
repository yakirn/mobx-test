import {observable, action} from 'mobx';
import Campaign from './Campaign';

export default class DomainStore {
  static campaignsCount = 0;
  @observable campaigns = [];

  constructor(campaignAPI, uiStore) {
    this.campaignAPI = campaignAPI;
    this.uiStore = uiStore;
  }

  @action createCampaign(): Campaign {
    const campain = new Campaign(this.campaignAPI, this.uiStore, DomainStore.campaignsCount++);
    this.campaigns.push(campain);
    return campain;
  }
}
