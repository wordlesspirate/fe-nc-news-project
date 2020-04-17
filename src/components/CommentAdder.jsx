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
      <div className="field">
        <form onSubmit={this.handleSubmit}>
          <label className="label">Comment</label>
          <div className="control">
            <textarea
              className="textarea"
              type="text"
              placeholder="a penny for your thoughts?"
              required
              id="body"
              value={this.state.comment}
              onChange={this.handleChange}
            />
          </div>
          <div className="control">
            <button className="button is-info">Submit Comment</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentAdder;
