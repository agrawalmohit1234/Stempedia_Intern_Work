import React from 'react';

class ChildA extends React.Component {
  state = {
    title: ''
  };

  handleInputChange = e => {
    this.props.onAddPost(e.target.value);
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Text ......"
              className="form-control"
              name="title"
              onChange={this.handleInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
};

export default ChildA;
