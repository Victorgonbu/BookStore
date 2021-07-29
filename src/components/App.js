import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import WebFont from 'webfontloader';
import BooksForm from '../container/BooksForm';
import BooksList from '../container/BooksList';
import Navbar from '../container/Navbar';

library.add(faUser);

const MainContainer = styled.div`
  display: block;
  width: 90%;
  height: calc(100vh - 8rem);
  padding: 1rem 3rem;
  margin: 4rem auto;
  border: 1px solid red;
`;

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat:bold,regular'],
      },
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainContainer>
            <Navbar />
            <BooksList />
            <BooksForm />
          </MainContainer>
        </Route>

        <Route exact path="/categories">
          <MainContainer>
            <Navbar />
            <BooksList showFilter />
            <BooksForm />
          </MainContainer>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
