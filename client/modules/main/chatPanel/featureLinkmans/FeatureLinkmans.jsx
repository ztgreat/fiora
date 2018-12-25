import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LinkmanGroup from './LinkmanGroup';
import Feature from './Feature';
import './FeatureLinkmans.less';

class FeatureLinkmans extends Component {
    static propTypes = {
        isLogin: PropTypes.bool.isRequired,
        close: PropTypes.bool.isRequired,
    }

    renderContent =() => {
        const { close, isLogin } = this.props;
        if (close || !isLogin) {
            return (<div />);
        }
        return (
            <div className="module-main-feature">
                { isLogin ? <Feature /> : null}
                <LinkmanGroup />
            </div>
        );
    }

    render() {
        return (
            this.renderContent()
        );
    }
}

export default connect(state => ({
    isLogin: !!state.getIn(['user', '_id']),
    close: !!state.getIn(['ui', 'showGroup']),
}))(FeatureLinkmans);
