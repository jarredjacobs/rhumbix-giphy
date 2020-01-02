import React from 'react';
import './App.css';
import fetchGiphy from './fetchGiphy';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '', imageUrl: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('A search was submitted: ' + this.state.value);
    event.preventDefault();
    fetchGiphy(this.state.value, this.updateImage.bind(this));
  }

  updateImage(imageData) {
    console.log("Data: ", imageData);
    console.log("url:", imageData.data[0].embed_url);
    this.setState({imageUrl: imageData.data[0].embed_url});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <form ref="form" onSubmit={this.handleSubmit}>
              <input type='text' name='Search' value={this.state.value} onChange={this.handleChange} />
              <input type='submit' name='submit' value='GO' />
            </form>
            <img src={this.state.imageUrl} className='giphyImage' alt="Result Giphy" />
        </header>
      </div>
    );
  }
}

export default App;
