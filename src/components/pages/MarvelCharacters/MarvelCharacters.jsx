import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import md5 from 'md5';
import Pagination from 'react-paginating';
import { Link } from 'react-router-dom';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import styles from './styles.module.css';
import HeroCardMini from '../../atoms/HeroCardMini/HeroCardMini';

class MarvelCharacters extends Component {
    state = {
      loading: false,
      error: false,
      data: [],
      total: 0,
    };

    componentDidMount() {
      this.fetch();
    }

    componentDidUpdate(prevProps) {
      prevProps.location.search !== this.props.location.search ? this.fetch() : console.log('not update');
      window.scrollTo(0, 0);
    }

    getPage() {
      return qs.parse(this.props.location.search)['?page'];
    }

    fetch = () => {
      this.setState({
        loading: true,
        error: false,
      });
      const time = Date.now();
      axios
        .get('https://gateway.marvel.com:443/v1/public/characters', {
          params: {
            apikey: process.env.REACT_APP_MARVEL_PUBLIC_APIKEY,
            limit: 20,
            // offset: 20,
            offset: (this.getPage() - 1) * 20,
            ts: time,
            hash: md5(time + process.env.REACT_APP_MARVEL_PRIVATE_API_KEY + process.env.REACT_APP_MARVEL_PUBLIC_APIKEY),
          },
        })
        .then((response) => {
          this.setState({
            loading: false,
            data: [...response.data.data.results],
            total: response.data.data.total,
          });
        })
        .catch(() => {
          this.setState({
            loading: false,
            error: true,
          });
        });
    };


    numPages() {
      return Math.ceil(this.state.total / 10);
    }


    returnQueryString(page) {
      return qs.stringify({ page }, { addQueryPrefix: true });
    }


    render() {
      // const lastPage = this.numPages();
      return (
        <MainTemplate>
          <section className={styles.posts}>
            {this.state.data.map(elem => <HeroCardMini key={elem.id} props={elem} />)}
            {/* {this.state.data.map(elem => <MarvelCharacterCard key={elem.id} props={elem} />)} */}
            {console.log(this.getPage())}
            {console.log('state data', this.state)}
            <Pagination
              total={this.state.total}
              limit={10}
              pageCount={5}
              currentPage={parseInt(this.getPage())}
            >
              {({
                pages,
                currentPage,
                hasNextPage,
                hasPreviousPage,
                previousPage,
                nextPage,
                totalPages,
                getPageItemProps,
              }) => (
                <div className={styles.paginationLinks}>
                  <Link to="/heroes/?page=1">first</Link>

                  {hasPreviousPage && <Link to={`/heroes/?page=${previousPage}`}>{'<'}</Link>}

                  {pages.map(page => (
                    <Link
                      key={page}
                      style={currentPage === page ? { backgroundColor: 'rgba(0,0,0,.03)' } : null}
                      to={`/heroes/?page=${page}`}
                    >
                      {page}
                    </Link>
                  ))}

                  {hasNextPage && <Link to={`/heroes/?page=${nextPage}`}>{'>'}</Link>}

                  <Link to={`/heroes/?page=${totalPages}`}>last</Link>
                </div>
              )}
            </Pagination>

          </section>
        </MainTemplate>
      );
    }
}

export default MarvelCharacters;
