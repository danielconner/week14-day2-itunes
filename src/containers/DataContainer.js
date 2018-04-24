import React from 'react';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import DataList from '../components/DataList.js'
import DataDetail from '../components/DataDetail.js'

class DataContainer extends React.Component {
  constructor(props){
    super(props)
    this.handleSongSelected = this.handleSongSelected.bind(this)
    this.state={
      songs: [],
      selectedSong: ""
    };
  }

  componentDidMount(){
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(response => response.json())
    .then(json => this.setState({songs:json.feed.entry}));
  }

  handleSongSelected(song){
    const selectedSong = this.state.songs[song];
    this.setState({selectedSong: selectedSong})
  }

  render(){
    return(
      <React.Fragment>
        <Header />
        <DataList
          songs={this.state.songs}
          onSongSelected ={this.handleSongSelected}
        />
        <DataDetail song={this.state.selectedSong} />
        <Footer />
      </React.Fragment>
    )
  }

}



export default DataContainer;
