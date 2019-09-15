import React from 'react'

class SearchBar extends React.Component {

    state = { input: '' }

    onSearchSubmit = (event) => {
        event.preventDefault()
        
        this.props.func(this.state.input)
    }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onSearchSubmit} className='ui form'>
                    <div className='field'>
                        <input style={{'borderRadius': '8px'}} type='text' 
                        value={this.state.input}
                        onChange={ e => this.setState({input: e.target.value})}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar