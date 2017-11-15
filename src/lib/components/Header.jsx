import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #ff1547;
  z-index: 1;
  color: #fff;
  box-shadow: 0px 3px 11px -5px rgba(0,0,0,0.75);
`

const Avatar = styled.div`
    flex: 0 0 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const AvatarCircle = styled.div`
    border-radius: 100%;
    background: #fff;;
    display: flex;
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
`

const Description = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.h4`
    margin: 0;
    font-weight: 300;
`

const Controls = styled.div`
    flex: 0 0 40px;
    font-size: 8px;
    justify-content: center;
    display: flex;
`

const Close = styled.span`
    cursor: pointer;
    color: #fff;
`

export default class Header extends Component {

    render() {

        return (
            <Container {...this.props}>
                <Avatar>
                    <AvatarCircle className="avatar-circle">
                        <img src={this.props.logo} alt= 'Chatbot Avatar' style={{ maxHeight: '80%' }} />
                    </AvatarCircle>
                </Avatar>
                <Description>
                    <Title>Welcome to Botsfactory</Title>
                </Description>
                <Controls>
                    <Close className={`fa-stack fa-2x`} onClick={this.props.onCloseClick} >
                        <i className="fa fa-close fa-stack-1x" />
                    </Close>
                </Controls>
            </Container>
        )
    }
}

Header.propTypes = {
}