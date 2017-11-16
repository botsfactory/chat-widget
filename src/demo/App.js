import React, { Component } from 'react';
import cuid from 'cuid'
import { DirectLine } from 'botframework-directlinejs';
import update from 'immutability-helper';

import './App.scss';

import Widget from '../lib/components/Widget'
import MessageModel from '../lib/model/MessageModel'


class App extends Component {

  constructor(props) {
    super(props)

    this.state =
      {
        messages: [],
        user:
          {
            id: '1'
          }
      }
  }

  componentDidMount() {

    this.directLine = new DirectLine({
      secret: 'wD90LFoq4U4.cwA.qEU._aVTYUpSj51Vot0VBqNfdzba7KIyVCUToNZpFpCXZ7Q'
    });

    this.directLine.activity$
      .filter(activity => activity.type === 'message')
      .subscribe(message => {

        if (message.from.id !== this.state.user.id) {
          const model = new MessageModel({ from: message.from.id, id: message.id, text: message.text, attachments: message.attachments, sent: true })
          // const model = new MessageModel({ from: '1', id: cuid(), sent: true, text: 'Hello!' }),
          this.setState({ messages: this.state.messages.concat([model]) });
        }
      });
  }

  postActivity(message) {

    // TODO: this doens't work because of a bug in chrome debugger
    const self = this;

    this.directLine.postActivity({
      from: { id: this.state.user.id, name: this.state.user.name },
      type: 'message',
      text: message.text
    })
      .subscribe(
      id => {

        const index = self.state.messages.findIndex(m => m.id === message.id);
        const messages = update(self.state.messages, { [index]: { id: { $set: id }, sent: { $set: true } } });

        self.setState({ messages });
      },
      error => {

        console.log("Error posting activity", error)
      });
  }

  handleMessageEnter = (e) => {

    const message = new MessageModel({ from: this.state.user.id, id: Date.now().toString(), text: e.value, sent: false });

    this.setState({ messages: this.state.messages.concat([message]) });

    this.postActivity(message);
  }

  handleQuickReplyClick = (e) => {

    const message = new MessageModel({ from: this.state.user.id, id: cuid(), text: e.value, type: 'text', sent: true });

    this.setState({ messages: this.state.messages.concat([message]) });

    this.postActivity(message);
  }

  render() {

    return (
      <div className="App">
        <Widget 
          messages={this.state.messages} 
          user={this.state.user} 
          onMessageEnter={this.handleMessageEnter} 
          onQuickReplyClick={this.handleQuickReplyClick} 
          headerTitle='Welcome to Botsfactory' 
        />
      </div>
    );
  }
}

export default App;
