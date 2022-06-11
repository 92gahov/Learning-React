import './App.css';
import Display from './Components/Date';
import Intro from './Components/Intro';
import Heading from './Components/Heading';
// import Series from './Components/Series';
import 'whatwg-fetch';
import { Component } from "react";
import SeriesList from './Components/SeriesList';
import Loader from './Components/Loader';

class Series extends Component {
  state = {
    series: [],
    seriesName: "",
    isFetching: false
  }

  // componentDidMount() {
  //   // const series = ["Vikings", "Game of Thrones"];
  //   // setTimeout(() => {
  //   //   this.setState({ series: series })
  //   // }, 2000)
  //   fetch("https://api.tvmaze.com/shows?page=1")
  //     .then((response) => response.json())
  //     // .then(json => console.log(json))
  //     .then(json => this.setState({ series: json }))
  // }

  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true });

    fetch(`https://api.tvmaze.com/shows?page=${e.target.value}`)
      .then((response) => response.json())
      // .then(json => console.log(json))
      .then(json => this.setState({ series: json, isFetching: false }))
    console.log(e);
    console.log(e.target.value)
  }

  render() {
    const { series, seriesName, isFetching } = this.state;
    return (
      <div>
        {/* <h3>The length of series array - {this.state.series.length}</h3> */}
        <div>
          <input value={seriesName} type="text" onChange={this.onSeriesInputChange} />
        </div>
        {
          !isFetching && series.length === 0 && seriesName.trim() === ""
          &&
          <p>Please enter series name into the input.</p>
        }
        {
          !isFetching && series.length === 0 && seriesName !== ""
          &&
          <p>No Tv series have been found.</p>
        }
        {
          // isFetching && <p>Loading...</p>
          isFetching && <Loader />
        }
        {
          !isFetching && <SeriesList List={this.state.series} />
        }
        {/* <SeriesList List={this.state.series} /> */}
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <Heading />
      <Display />
      <Intro message="Here you can find all of your series." />
      <Series />
    </div>
  );
}

export default App;
