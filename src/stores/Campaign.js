import {observable, action, computed, reaction} from 'mobx';
import CampaignDetails from './CampaignDetails';

export default class Campaign {
  @observable name = 'New campaign';
  @observable _fromDate = Date.now();
  @observable _toDate = Date.now();
  @observable details = new CampaignDetails(this);

  constructor(api, id) {
    this.id = id;
    this.setToDate(this.fromDate.getDate() + 5);
    reaction(() => this.asJSON, api.update);
  }

  @action setName(value) {
    this.name = value;
  }

  @action setToDate(value: number) {
    this._toDate = new Date(this._toDate).setDate(value);
  }

  @computed get toDate() {
    return new Date(this._toDate);
  }

  @computed get fromDate() {
    return new Date(this._fromDate);
  }

  @computed get asJSON() {
    return Object.assign({
      id: this.id,
      name: this.name,
      fromDate: this._fromDate,
      toDate: this._toDate
    },
    this.details.asJSON
    );
  }
  dispose() {

  }
}
