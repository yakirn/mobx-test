import React from 'react';
import {computed} from 'mobx';
import {observer, inject} from 'mobx-react';
import CampaignDetails from './CampaignDetails';
import style from './style.css';


@inject('uiStore')
@observer
export default class Campaign extends React.Component {

  handleNameClick = () => {
    this.props.model.setName(`New ${this.props.model.name.toLowerCase()}`);
  };

  handlePlusClick = e => {
    const {toDate} = this.props.model;
    this.props.model.setToDate(toDate.getDate() + 1);
    e.stopPropagation();
  };

  handleMinusClick = e => {
    const {toDate} = this.props.model;
    this.props.model.setToDate(toDate.getDate() - 1);
    e.stopPropagation();
  };

  @computed get isCampaignUpdating() {
    return this.props.uiStore.isCampaignUpdating(this.props.model.id);
  }

  render() {
    const {name, fromDate, toDate} = this.props.model;
    return (
      <div className={style.container}>
        <div className={style.curtain} style={{display: this.isCampaignUpdating ? 'block' : 'none'}}/>
        <div className={style.propertiesRow}>
          <div onClick={this.handleNameClick}>{name}</div>
          <div>{fromDate.toDateString()}</div> - <div onClick={this.handleToDateClick}>{toDate.toDateString()}</div>
        </div>
        <div className={style.buttonsRow}>
          <button type="button" onClick={this.handleMinusClick}>-</button>
          <button type="button" onClick={this.handlePlusClick}>+</button>
        </div>
        <CampaignDetails details={this.props.model.details}/>
      </div>
    );
  }
}
