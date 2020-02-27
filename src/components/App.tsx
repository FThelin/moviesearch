import React from 'react';
import Nav from './Nav'
import SearchArea from './SearchArea'
import MovieList from './MovieList'
import Pagination from './Pagination'

interface Props {
  
}

interface State {
  movies: Object[]
  searchTerm: string
  totalResults: number
  currentPage: number
}

interface App {
  apiKey: string | undefined
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      movies: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1
    }
    this.apiKey = process.env.REACT_APP_API
  }

  handleSubmit = (e: any) => {
    e.preventDefault()

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {      
      this.setState({ movies: [...data.results], totalResults: data.total_results })
    })
  }

  handleChange = (e: any) => {
    this.setState({ searchTerm: e.target.value })
  }

  goToNextPage = (pageNumber: number) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {      
      this.setState({ movies: [...data.results], currentPage: pageNumber })
    })
  }

  render() {
    const numberOfPages = Math.floor(this.state.totalResults / 20)

    return(
      <div className="App">
        <Nav />
        <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        { this.state.totalResults > 20 ? <Pagination pages={numberOfPages} nextPage={this.goToNextPage} currentPage={this.state.currentPage}/> : '' }
        <MovieList movies={this.state.movies}/>
        { this.state.totalResults > 20 ? <Pagination pages={numberOfPages} nextPage={this.goToNextPage} currentPage={this.state.currentPage}/> : '' }
      </div>
    )
  }
}

export default App;
