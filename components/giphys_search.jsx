import React from 'react';
import {fetchSearchGiphys} from '../util/api_util';
import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({searchTerm: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = this.state.searchTerm.split(' ').join('+');
    this.props.fetchSearchGiphys(searchTerm);
    this.setState({searchTerm: ''});
  }

  render() {
    return (
      <form >
        <input onChange={this.handleChange}value={this.state.searchTerm}></input>
        <button onSumbit={this.handleSubmit} type="submit" > Search Giphy</button>
    </form>
    );
  }
}
