import React, { Component } from 'react';
import './App.css';
import ReactPagination from './components/ReactPagination';
// import Pagination from './components/PaginationComponent'
// import Pagination from './components/PaginationComp'


class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="App-header">
          {/* <Pagination /> */}
          <ReactPagination />
        </div>
        
      </div>
    );
  }
  
}

export default App;
