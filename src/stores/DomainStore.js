import {observable, action} from 'mobx';
import Campaign from './Campaign';

export default class DomainStore {
  static campaignsCount = 0;
  @observable campaigns = [];

  constructor(campaignAPI) {
    this.campaignAPI = campaignAPI;
  }

  @action createCampaign(): Campaign {
    const campain = new Campaign(this.campaignAPI, DomainStore.campaignsCount++);
    this.campaigns.push(campain);
    return campain;
  }
}
