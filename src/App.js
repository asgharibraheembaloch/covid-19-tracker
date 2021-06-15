import {Cards, Charts, CountryPicker } from './components'
import styles from './App.module.css'
import React from 'react';
import {fetchData} from './api'

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
  }
  render() {
    const {data} = this.state;
    return (
      <div className={styles.container}>
        <CountryPicker />
        <Cards data = {data}/>
        <Charts />
      </div>
    );
  }
}

export default App;