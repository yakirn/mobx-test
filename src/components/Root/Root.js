import React, {PropTypes, Component} from 'react';
import {translate} from 'react-i18next';
import Campaigns from '../Campaigns/Campaigns';

class Root extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    value: PropTypes.number,
    t: PropTypes.func
  }

  render() {
    const {value, dispatch, t} = this.props;
    return (
      <div>
        <h1>{t('root.title')}</h1>
        <Campaigns/>
      </div>
    );
  }
}

export default translate(null, {wait: true})(Root);
