import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //onFormSubmit 是一个独立的方程，没有state, 所以this.state会出现error, 用arrow function 可以解决binding this 的问题
  onFormSubmit = event => {
    event.preventDefault();
    // console.log(this.state.term);
    this.props.onSubmit(this.state.term)
  };

  // these are React controled input
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
