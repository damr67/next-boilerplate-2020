import App from 'next/app';
import React, { Component } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from '../lib/withApollo';

import Page from '../components/Page';

class MyApp extends App {
  static getInitialProps({ Component, ctx }) {
    console.log(ctx.query);
  }

  render() {
    const { Component, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Page>
          <Component />
        </Page>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
