import React from "react";

class CommentAdder extends React.Component {
  state = {
    comment: ""
  };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.comment);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Comment:
            <input
              type="text"
              required
              id="body"
              value={this.state.comment}
              onChange={this.handleChange}
            />
          </label>
          <button>Submit Comment</button>
        </form>
      </div>
    );
  }
}

export default CommentAdder;
