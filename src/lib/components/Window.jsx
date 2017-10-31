import React, { Component } from 'react'
import styled from 'styled-components'
import Chat from './Chat'

const Container = styled.div`
  position: fixed;
  width: 350px;
  height: 500px;
  right: 10px;
  bottom: 10px;
  box-shadow: 0 12px 40px 0 rgba(0,0,0,.2);
  border-radius: 10px;
  display: none;
  z-index: 2;
  overflow: hidden;

  ${props => props.visible && `
    display: block;
  `}
`
export default class Window extends Component {

  render() {
    return (
      <Container visible={this.props.visible}>
        {this.props.children}
      </Container>
    )
  }
}

Window.propTypes = {
}
