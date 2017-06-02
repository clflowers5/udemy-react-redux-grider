import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDmETH7zuuvbZzWsedsD64tLYBh7EFmXGw';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos});
    });
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <p>YO</p>
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

// Take component's generated HTML and put it on the page.
ReactDOM.render(<App />, document.querySelector('.container'));
