import React, { Component } from 'react';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './imageGallery/ImageGallery';

import { Loader } from './loader/Loader';
import { Modal } from './modal/Modal';
import axios from 'axios';

export class App extends Component {
  state = {
    search: '',
    imageList: [],
    currentPage: 1,
  };

  key = '39408745-32e39ba950214e66e33847e97';

  searchChange = value => {
    this.setState(() => {
      return {
        imageList: [],
        search: value,
        currentPage: 1,
        totalHitsValue: 0,
      };
    });
  };

  setCurrentPage = () => {
    this.setState(prev => {
      return {
        currentPage: prev.currentPage + 1,
      };
    });
  };

  searchSubmit = async () => {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${this.state.search}&page=1&key=${this.key}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const array = response.data.hits;
    const total = response.data.totalHits;
    const newArray = array.map(item => {
      return {
        id: item.id,
        imgUrl: item.webformatURL,
        largeImgUrl: item.largeImageURL,
      };
    });

    this.setState(prev => {
      return {
        imageList: prev.imageList.concat(newArray),
        totalHitsValue: total,
      };
    });
  };

  getMoreImages = async page => {
    const current = page + 1;
    const response = await axios.get(
      `https://pixabay.com/api/?q=${this.state.search}&page=${current}&key=${this.key}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const array = response.data.hits;
    const newArray = array.map(item => {
      return {
        id: item.id,
        imgUrl: item.webformatURL,
        largeImgUrl: item.largeImageURL,
      };
    });

    this.setState(prev => {
      return {
        imageList: prev.imageList.concat(newArray),
      };
    });
  };

  render() {
    const { search, imageList, currentPage, totalHitsValue } = this.state;
    console.log(this.state);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar
          onSubmit={this.searchSubmit}
          change={this.searchChange}
          inputValue={search}
        />
        <ImageGallery
          list={imageList}
          load={this.setCurrentPage}
          more={this.getMoreImages}
          page={currentPage}
          total={totalHitsValue}
        />

        <Loader />
        <Modal />
      </div>
    );
  }
}
