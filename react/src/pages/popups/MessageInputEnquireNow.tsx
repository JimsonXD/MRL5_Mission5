import React, { Component, ChangeEvent, FormEvent } from 'react';

interface MessageInputState {
  message: string;
  rows: number;
}

class MessageInput extends Component<{}, MessageInputState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      message: '',
      rows: 4, // Initial number of rows
    };
  }

  handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textareaLineHeight = 24; // Adjust this value based on your textarea's line-height
    const minRows = 4; // Minimum number of rows
    const maxRows = 10; // Maximum number of rows

    const previousRows = e.target.rows;
    e.target.rows = minRows; // Reset to the minimum rows to calculate scroll height

    const currentRows = Math.floor((e.target.scrollHeight - textareaLineHeight) / textareaLineHeight) + 1;

    if (currentRows === previousRows) {
      e.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      e.target.rows = maxRows;
      e.target.scrollTop = e.target.scrollHeight;
    }

    this.setState({
      message: e.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows,
    });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { message } = this.state;
    // Do something with the message, like sending it to a server or displaying it.
    console.log('Message submitted:', message);

    // Clear the input field after submission
    this.setState({ message: '', rows: 4 });
  };

  render() {
    const { message, rows } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea
            rows={rows}
            placeholder="Type your message here"
            value={message}
            onChange={this.handleChange}
          />
        
        </form>
      </div>
    );
  }
}

export default MessageInput;
