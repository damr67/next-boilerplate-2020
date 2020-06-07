import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

import { BACKEND_ENDPOINT } from '../config';

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: BACKEND_ENDPOINT,
      cache: new InMemoryCache()
    })
);
