import React, { Component } from 'react';
import axios from 'axios';
import md5 from 'md5';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import MarvelCharacterCard from '../../organisms/MarvelCharacterCard';
import styles from './styles.module.css';

class MarvelCharacterPage extends Component {
    state = {
      loading: false,
      error: false,
      data: null,
    };

    id = this.props.match.params.id;

    componentDidMount() {
      setTimeout(() => {
        this.fetch();
      }, 1000);
    }

    fetch = () => {
      this.setState({
        loading: true,
        error: false,
        data: null,
      });
      // console.log(`api_key: ${process.env.REACT_APP_MARVEL_PRIVATE_API_KEY}`);
      const time = Date.now();
      axios
        .get(`https://gateway.marvel.com:443/v1/public/characters/${this.id}`, {
          // .get(`${process.env.REACT_APP_MARVEL_PATH}/v1/public/characters/${this.id}`, {
          params: {
            apikey: process.env.REACT_APP_MARVEL_PUBLIC_APIKEY,
            ts: time,
            hash: md5(time + process.env.REACT_APP_MARVEL_PRIVATE_API_KEY + process.env.REACT_APP_MARVEL_PUBLIC_APIKEY),
            // apikey: process.env.REACT_APP_MARVEL_API_KEY,
          },
        })
        .then((response) => {
          this.setState({
            loading: false,
            error: false,
            data: response.data.data.results[0],
          });
        })
        .catch(() => {
          this.setState({
            loading: false,
            error: true,
          });
        });
    };

    render() {
      return (
        <MainTemplate>
          {this.state.loading && 'loading'}
          {!this.state.loading && !this.state.error && this.state.data === null && 'Hero not found :('}
          {this.state.error && (
            <div>
              <p>error</p>
              <button type="button" onClick={this.fetch}>reload</button>
            </div>
          )}
          {this.state.data !== null
                && (
                <div key={this.state.data.id} className={styles.posts}>
                  <MarvelCharacterCard props={this.state.data} />
                  {/* <p>{this.state.data.name}</p> */}
                  {/* <p>{this.state.data.description}</p> */}
                </div>
                )
                }
          {/* {console.log(this.state.data)} */}

        </MainTemplate>
      );
    }
}

export default MarvelCharacterPage;
