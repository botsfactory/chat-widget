import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Bubble from './Bubble'
import styled from 'styled-components'

const Container = styled.div`
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
`

const ScrollWrapper = styled.div`
  overflow-y: scroll;
  padding: 10px;
  height: 100%;
`

export default class Conversation extends Component {

  constructor(props){
    super(props);
    this.scrollWrapperNode = null;
  }

  scrollToBottom() {

    this.scrollWrapperNode.scrollTop = this.scrollWrapperNode.scrollHeight - this.scrollWrapperNode.clientHeight;
  }

  componentDidUpdate() {

    this.scrollToBottom()
  }  

  render() {

    return (
      <Container {...this.props}>
        <ScrollWrapper innerRef={c => this.scrollWrapperNode = c}>
          {this.props.messages.map(message => {

            return <Bubble key={message.id} who={message.from == this.props.user.id ? "me" : "other"} sent={message.sent} > {message.text}</Bubble>
          })}
        </ScrollWrapper>
      </Container>
    )
  }
}

Conversation.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
}