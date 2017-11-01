import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Conversation from './Conversation'
import Input from './Input'
import Header from './Header'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`

const StyledConversation = styled(Conversation) `
  flex: 1;
`

const StyledInput = styled(Input) `
  flex: 0 0 60px;
`

const StyledHeader = styled(Header) `
  flex: 0 0 80px;
`

export default class Chat extends Component {

  render() {

    return (
      <Container>
        <StyledHeader className="header-color" onCloseClick={this.props.onCloseClick} />
        <StyledConversation messages={this.props.messages} user={this.props.user} />
        <StyledInput onMessageEnter={this.props.onMessageEnter} />
      </Container>
    )
  }
}

Chat.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  onMessageEnter: PropTypes.func.isRequired
}