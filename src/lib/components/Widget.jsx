import React, { Component } from 'react'
import styled from 'styled-components'
import Chat from './Chat'
import Window from './Window'
import Trigger from './Trigger'
import PropTypes from 'prop-types';

export default class Widget extends Component {

  constructor(props) {
    super(props);

    this.state = { windowVisible: true };
  }

  onTriggerClick = () => {

    this.setState({windowVisible: true});
  }

  onCloseClick = () => {

    this.setState({windowVisible: false});
  }

  render() {
    return (
      <div className="widget">

        <Window visible={this.state.windowVisible}>
          <Chat {...this.props} onCloseClick={this.onCloseClick}/>
        </Window>

        <Trigger onClick={this.onTriggerClick} visible={!this.state.windowVisible}/>

      </div>
    )
  }
}

Widget.propTypes = {
  onMessageEnter: PropTypes.func.isRequired
}
