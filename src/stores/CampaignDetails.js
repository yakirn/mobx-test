import {observable, action, computed} from 'mobx';

export default class CampaignDetails {
  @observable domain = 'www.domain.com';
  @observable targetedUsers = 5;

  @computed get asJSON() {
    return {
      domain: this.domain,
      targetedUsers: this.targetedUsers
    };
  }
}
