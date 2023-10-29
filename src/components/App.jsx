import React, { Component } from 'react';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './imageGallery/ImageGallery';
import { Button } from './button/Button';
import { Loader } from './loader/Loader';
import { Modal } from './modal/Modal';
import axios from 'axios';

export class App extends Component {
  state = {
    search: '',
    imageList: [],
  };

  key = '39408745-32e39ba950214e66e33847e97';

  searchChange = value => {
    this.setState(() => {
      return {
        search: value,
      };
    });
  };

  searchSubmit = async () => {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${this.state.search}&page=1&key=${this.key}&image_type=photo&orientation=horizontal&per_page=12`
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
    const { search, imageList } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
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
        <ImageGallery list={imageList} />
        <Button />
        <Loader />
        <Modal />
      </div>
    );
  }
}
