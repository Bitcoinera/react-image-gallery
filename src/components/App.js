import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImagesList from './ImagesList'


class App extends React.Component {

    state = { images: [] }

    async onSearchSubmit(input) {
        console.log(input)

        let response = await unsplash.get(`search/photos`, {
            params: { query: input}, 
        })
        .catch( (error) => {
            console.log(error);
        });

        console.log(this)
        this.setState({
            images: response.data.results
        })
    }

    render() {
        return (
            <div className='ui segment' style={{'marginTop': '20px'}}>
                <h1 className='ui header'>Image Search</h1>
                <SearchBar func={this.onSearchSubmit.bind(this)}/>
                <ImagesList images={this.state.images}/>
            </div>
        )
    }
}

export default App