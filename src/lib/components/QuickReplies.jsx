import React, { Component } from 'react'
import styled from 'styled-components'
import QuickReplyButton from './QuickReplyButton'

const Container = styled.div`
  display: block;
  left: 0;
  position: relative;
  transition: left 500ms ease-out;
  white-space: nowrap;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const Buttons = styled.div`
    display: flex;
    justify-content: center;
`

const Text = styled.div`
    border-radius: 25px;
    font-size: 14px;
    font-weight: normal;
    margin: 4px 0px;
    padding: 8px 18px;
    line-height: 1.4;
    background: #D8D8D8;
    color: #2B2B2B;
`

export default class QuickReplies extends Component {

    render() {

        const buttons = this.props.message.buttons.map((button) =>
            <QuickReplyButton
                key={button.title.replace(' ', '_')}
                title={button.title}
                onQuickReplyClick={this.props.onQuickReplyClick}
            />
        );

        return (
            <div>
                <Wrapper>
                    <Text>{this.props.message.title}</Text>
                </Wrapper>
                <Container className="quickreplies" >
                    <Buttons>
                        {buttons}
                    </Buttons>
                </Container>
            </div>
        )
    }
}