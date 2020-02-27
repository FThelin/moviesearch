import React from 'react';
import Nav from './Nav'
import SearchArea from './SearchArea'
import MovieList from './MovieList'

interface Props {
  
}

interface State {
  movies: Object[],
  searchTerm: string
}

interface App {
  apiKey: string | undefined
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      movies: [],
      searchTerm: ''
    }
    this.apiKey = process.env.REACT_APP_API
  }

  handleSubmit = (e: any) => {
    e.preventDefault()

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {      
      this.setState({ movies: [...data.results] })
    })
  }

  handleChange = (e: any) => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    return(
      <div className="App">
        <Nav />
        <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }
}

export default App;
