import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Campaign from './Campaign';

@inject('store')
@observer
class Campaigns extends Component {

  render() {
    const {campaigns} = this.props.store;

    return (
      <div>
        {
          campaigns.map((campaign, index) => (<Campaign key={campaign.id} model={campaign}/>))
        }
      </div>
    );
  }
}

export default Campaigns;
