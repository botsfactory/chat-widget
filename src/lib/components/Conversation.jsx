import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Bubble from './Bubble'
import styled from 'styled-components'
import QuickReplies from './QuickReplies'

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

  constructor(props) {
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

            let messageArr = [];

            if (message.text && message.text != "") {
              messageArr.push(
                <Bubble key={message.id} who={message.from === this.props.user.id ? "me" : "other"} sent={message.sent} >
                  {message.text}
                </Bubble>
              );
            }

            if (message.attachments && message.attachments.length > 0) {

              for (let attachment of message.attachments) {

                switch (attachment.contentType) {

                  case 'application/vnd.microsoft.card.hero':
                    messageArr.push(<QuickReplies key={message.id} message={attachment.content} onQuickReplyClick={this.props.onQuickReplyClick} />);
                    break;

                  case 'video/mp4':
                    messageArr.push(
                      <iframe width="300" height="215"
                        src={attachment.contentUrl}>
                      </iframe>)
                    break;

                  default:
                    break;
                }
              }
            }

            return messageArr;
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