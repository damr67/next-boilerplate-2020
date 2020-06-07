import React, { Component } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Title from './styles/Title';

const SingleItemStyles = styled.div`
  max-width: 600px;
  box-shadow: ${(props) => props.theme.bs};
  display: block;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default class SingleItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <SingleItemStyles>
        <Head>
          <title>App | {item.name}</title>
        </Head>
        <Title>{item.name}</Title>
        <img src={item.image} alt={item.name} />
        <span>{item.status}</span>
        <p>{item.description}</p>
      </SingleItemStyles>
    );
  }
}
