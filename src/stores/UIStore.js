import {observable, computed, action} from 'mobx';

export default class UIStore {

  @observable updatingCampaignIds = [];

  @action startCampaignUpdate(campaignId) {
    if (this.isCampaignUpdating(campaignId)) {
      return;
    }

    this.updatingCampaignIds.push(campaignId);
  }
  @computed get hasPendingRequest() {
    this.updatingCampaignIds.length > 0;
  }

  isCampaignUpdating(campaignId) {
    return this.updatingCampaignIds.includes(campaignId);
  }

  @action endCampaignUpdate(id) {
    const index = this.updatingCampaignIds.indexOf(id);
    this.updatingCampaignIds.splice(index, 1);
  }
}
