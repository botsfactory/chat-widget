
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MessageModel } from '../model/MessageModel';

const Img = styled.div`
  background-size: contain;
`

const Wrapper = styled.div`
    display: inline-block;
    flex-direction: row;
    cursor: pointer;
`

const Text = styled.div`
    border-radius: 25px;
    border: 1px solid #0084ff;
    font-size: 14px;
    font-weight: normal;
    margin: 6px 4px;
    padding: 8px 18px;
    line-height: 1.4;
    opacity: ${props => props.sent ? 1 : .7};
    background: #fff;
    color: #0084ff;
`

export default class QuickReplyButton extends Component {

  constructor(props) {
    super(props);
  }

  onClickQuickReplyButton = (e) => {
    this.props.onQuickReplyClick({ value: this.props.title });
  }
  1
  render() {
    return (
      <Wrapper onClick={this.onClickQuickReplyButton}>
        <Img className='QuickReplyImg'>{this.props.image_url}</Img>
        <Text>{this.props.title}</Text>
      </Wrapper >
    )
  }
}

QuickReplyButton.propTypes = {
  title: PropTypes.string.isRequired,
}