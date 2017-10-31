import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

import 'font-awesome/css/font-awesome.css'

const Container = styled.div`
  display: flex;
  box-shadow: 0px -3px 11px -5px rgba(0,0,0,0.25);
`
const TextField = styled.input`
  flex-grow: 1;
  padding: 10px;
  font-size: 14px;
  margin: 10px;
  outline: none;
  border: none;
`

const Send = styled.span`
  flex: 0 0 50px;
  margin: 13px 0;
  opacity: .5;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #ff1547;

  ${props => props.enabled && `
    cursor: pointer;
    opacity: 1;
  `}
`

const SendCircle = styled.i`
  color: #FF1547;
`

export default class Input extends Component {

  constructor(props) {

    super(props);
    this.state = { value: '' };
  }

  send() {

    if (this.state.value != '') {
      this.props.onMessageEnter(this.state);
      this.setState({ value: '' });
      this.input.value = '';
    }
  }

  onSendClick = (e) => {

    this.input.focus();
    this.send();
  }

  onKeyDown = (e) => {

    if (e.keyCode == 13) {
      this.send();
    }
  }

  onChange = (e) => {

    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Container {...this.props}>

        <TextField innerRef={comp => this.input = comp} type="text" placeholder="Type your message..." value={this.state.value} onChange={this.onChange} onKeyDown={this.onKeyDown} />
        <Send className={`send`} onClick={this.onSendClick} enabled={this.state.value !== ''}>
          <i className="fa fa-paper-plane"></i>
        </Send>
      </Container>
    )
  }
}

Input.propTypes = {
  onMessageEnter: PropTypes.func.isRequired
}
