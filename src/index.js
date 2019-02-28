import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component{
    //constructors are good for data loading
  
   // This is the only time we do direct assignment to this.state 
       // when we want to update the state we have to use setState

   state = {lat: null , errorMessage: ''}


 //To update the state of the lat we use set state
 //This method is a good place to data-loading 
  componentDidMount(){ 
     window.navigator.geolocation.getCurrentPosition(
        (position) =>  this.setState({ lat: position.coords.latitude }),
        (err) => 
            this.setState({errorMessage: err.message}) 
        )
    }
    render(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay  lat={this.state.lat}/>
        }

        return <div>Loading....</div>
    }
}

ReactDOM.render(
    <App /> ,
    document.querySelector('#root')
)

