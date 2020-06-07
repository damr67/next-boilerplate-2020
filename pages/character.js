import React, { Component } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useRouter } from 'next/router';
import Error from '../components/styles/ErrorMessage';
import SingleItem from '../components/SingleItem';

export const SINGLE_CHARACTER_QUERY = gql`
  query SINGLE_CHARACTER_QUERY($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      image
    }
  }
`;

const item = () => {
  // our query that defines the attributes we want to get.

  const router = useRouter();
  const { query } = router;

  const { error, loading, data } = useQuery(SINGLE_CHARACTER_QUERY, {
    variables: { id: query.id }
  });

  if (loading) return <p>Loading ...</p>;

  if (error) return <Error error={error} />;

  return (
    <div>
      <h1>Single Item</h1>
      <SingleItem item={data.character} />
    </div>
  );
};

export default item;
