import React, { Component } from 'react'
import styled from 'styled-components'


const Container = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
  z-index: 1;
  display: ${props => props.visible ? 'block': 'none'};
  box-shadow: 0 12px 40px 0 rgba(0,0,0,.2);
  border-radius: 100%;
`
const Circle = styled.i`
  color: #FF1547;
`

export default class Trigger extends Component {

  render() {
    return (
      <Container {...this.props}>
        <span className={`fa-stack fa-2x`} >
          <Circle className="widget-circle fa fa-circle fa-stack-2x" />
          <i className="fa fa-commenting-o fa-stack-1x fa-inverse" />
        </span>
      </Container>
    )
  }
}