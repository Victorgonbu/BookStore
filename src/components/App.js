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
  min-height: calc(100vh - 8rem);
  margin: auto;
  border: 1px solid white;
  border-radius: 4px;
  box-shadow: 15px 15px 40px 0 var(--gray);
  background-color: var(--background-white);
`;

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat:bold,regular', 'Roboto Slab:regular, bold'],
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
          </MainContainer>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
