import React, { Component } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import ItemsList from '../components/ItemsList';

export const ALL_CHARACTERS_QUERY = gql`
  query ALL_CHARACTERS_QUERY {
    characters {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        image
      }
    }
  }
`;

const characters = () => {
  const { error, loading, data } = useQuery(ALL_CHARACTERS_QUERY);

  if (loading) return <p>Loading ...</p>;

  if (error) return <p>Error ...</p>;

  return (
    <div>
      <h1>Items in Api</h1>
      <ItemsList items={data.characters.results || []} />
    </div>
  );
};

export default characters;
