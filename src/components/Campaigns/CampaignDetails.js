import {observer} from 'mobx-react';
import React, {Component} from 'react';
import style from './style.css';

@observer
class CampaignDetails extends Component {

  handleTagetedUsersAdd = e => {
    this.props.details.targetedUsers++;
  };

  handleTagetedUsersSub = e => {
    this.props.details.targetedUsers--;
  };

  render() {
    const {domain, targetedUsers} = this.props.details;

    return (
      <div>
        <div className={style.detailsRow}>
          <div>{domain}</div>
          <div>{targetedUsers}</div>
        </div>
        <div className={style.detailsButtonsRow}>
          <button type="button" onClick={this.handleTagetedUsersSub}>-</button>
          <button type="button" onClick={this.handleTagetedUsersAdd}>+</button>
        </div>
      </div>
    );
  }
}

export default CampaignDetails;
