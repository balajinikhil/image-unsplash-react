import React from 'react'
import SearchBar from './SearchBar'
import Unsplash from './../api/Unsplash'
import ImageCard from './ImageCard'

class App extends React.Component{

    state = {imageArr:[]}

searchSubmitResult = async (target)=>{

    const response = await Unsplash.get('/search/photos',{
        params:{query:target, per_page:50}
    })

    this.setState({imageArr:response.data.results})
    
    
    
}


render(){
    return (
        <div className="ui container" style={{marginTop:"10px"}}>
            <SearchBar searchSubmit={this.searchSubmitResult} />
            <ImageCard image={this.state.imageArr} />
        </div>
    )
} 

}



export default App