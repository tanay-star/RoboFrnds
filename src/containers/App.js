import React from 'react';
import CardArray from '../components/CardArray';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'; //importing a component that will add the functionality of scrolling
import './App.css';

class App extends React.Component{ //the component that contains the state is known as 'smart component'
    constructor(){
        super();
        this.state = {
            searchField:'',
            robots:[]
        }//this is the state which will usually be in the parent component
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users=>this.setState({robots:users}));
    }

    onSearchChange = (event)=>{// custom function/method
      this.setState({searchField:event.target.value}); //updating the state
      
    }
    render(){
        const { robots,searchField } = this.state; //desstructuring
        const filteredRobots = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !robots.length ?
            <h1>loading...</h1> :
        
        (
            <div className="tc">
               <h1 className="f1">ROBOFRIENDS</h1>
               <SearchBox searchChange = {this.onSearchChange}/>
               <Scroll>
               <CardArray robots={filteredRobots}/>
               </Scroll>
            </div>
        )
    }
}


export default App;