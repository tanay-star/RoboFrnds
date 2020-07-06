import React from 'react';
import { connect } from 'react-redux';
import CardArray from '../components/CardArray';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'; //importing a component that will add the functionality of scrolling
import './App.css';
//importing the action
import { setSearchField,requestRobots } from '../actions';


const mapStateToProps = (state) => {  //this function takes the state/store and onverts it into props.
    return{
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.isPending
    }
}

const mapDispatchToProps= (dispatch) => { //this func will return an obj whose property is a func that will dispatch the action to the reducer and this property will be sent as props to the connected Component
    return{
        onSearchChange: (event)=> dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}


class App extends React.Component{ //the component that contains the state is known as 'smart component'
    
    componentDidMount(){
        this.props.onRequestRobots();
       
    }

    
    render(){

        const { searchField,onSearchChange,robots,isPending } = this.props; //destructuring
        const filteredRobots = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ?
            <h1>loading...</h1> :
        
        (
            <div className="tc">
               <h1 className="f1">ROBOFRIENDS</h1>
               <SearchBox searchChange = {onSearchChange}/>
               <Scroll>
               <CardArray robots={filteredRobots}/>
               </Scroll>
            </div>
        )
    }
}


export default connect( mapStateToProps, mapDispatchToProps ) (App);

//connect is connecting the App component to the Redux store. That is, App component will react to any changes in the redux store.
//connect is passing the state as props that is returnd by the 'mapStateToProps' to App component.
//connect is passing the 'onSearchChange' property as props to the App copnt.