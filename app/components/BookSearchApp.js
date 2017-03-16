import React, { Component } from 'react';
import ResultSearchItem from './ResultSearchItem';
import SearchLoadingBar from './SearchLoadingBar';
import ResultSearchList from './ResultSearchList';
import SearchInputNavigation from './SearchInputNavigation';
import BookApiFetcher from '../services/BookApiFetcher';

export class BookSearchComponent extends Component {
    constructor (props) {
        super();
        this.state = {
            books: [],
            searchedText: '',
            isLoading: false
        };
    }

    componentDidMap() {
        BookApiFetcher.searchBooks(this.state.searchedText).then((books) => {
            this.setState({books: books});
        });
    };

    performChange() {
        return (value) => { 
            this.setState(
                {searchedText: value},
                this.componentDidMap()
            );
        };
    }

    render() {
        return ( 
            <div> 
                <SearchInputNavigation initialPhrase={this.state.searchedText} onPhraseChanged={this.performChange()}/>
                <SearchLoadingBar isLoading={this.state.isLoading}/>
                <ResultSearchList items={this.state.books}/>
            </div>
        );
    }
}

export default BookSearchComponent