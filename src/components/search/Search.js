import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import TextField from '@material-ui/core/TextField';
import MenuItem from 'material-ui/MenuItem';
import Loading from './Loading'
import axios from 'axios';
import ImageResult from '../image/image';


import './Search.css';



  

class Search extends Component {



    state = {
        searchText: '',
        amount: 15,
        apiurl: 'https://pixabay.com/api/',
        apiKey: '9860598-1c451c2f05fe07995ff85460b',
        images: []
    };

    onTextChange = e => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val }, () => {
            if (val === '') {
                this.setState({ images: [] });
            } else {
                axios
                    .get(`${this.state.apiurl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                    .then(res => this.setState({ images: res.data.hits }))
                    .catch(err => console.log(err))
            }
        });
    }
    onAmountChange = (e, index, value) => this.setState({ amount: value });
    

    

    render() {
        
        console.log(this.state.images)
        return (
            <div className="top">
                <TextField 
                    
                    id="outlined-basic"
                    label="Search-Image"
                    variant="outlined"
                    color="red"
                  
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Search Images"
                    floatingLabelStyle={{ color: "white" }}
                    fullWidth={true}

                    inputProps={{ style: {  color: '#800080',borderBottomColor: 'yellow'}}}
                   

                />

                <br />
                <SelectField
                    name="amount"
                    floatingLabelText="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                  
                     className="textfild"
                      
                >
                    <MenuItem value="" disabled>
                        Select-Number of Images
                     </MenuItem>
                    <MenuItem value={5} primaryText="5"/>
                    <MenuItem value={10} primaryText="10" />
                    <MenuItem value={20} primaryText="20" />
                    <MenuItem value={25} primaryText="25" />
                    <MenuItem value={50} primaryText="50" />
                    <MenuItem value={100} primaryText="100" />
                </SelectField>
                <br />
                {this.state.images.length > 0 ? (<ImageResult images={this.state.images} />) : <Loading/>}
            </div>
        )
    }
}

export default Search;