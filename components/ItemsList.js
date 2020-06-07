import styled from 'styled-components';
import Router from 'next/router';
import Link from 'next/link';

import Title from './styles/Title';

const List = styled.ul``;

const ListItem = styled.li`
  margin-bottom: 2rem;
  &:hover {
    transform: translateY(-2px);
    cursor: pointer;
  }
`;

const itemList = ({ items }) => {
  const handleClick = (id) => {
    Router.push({
      pathname: '/character',
      query: { id: id }
    });
  };
  const listItems = items.map((item) => {
    return (
      <ListItem key={item.id} onClick={() => handleClick(item.id)}>
        <Title>{item.name}</Title>
        <img src={item.image} alt={item.name} />
        <span>{item.status}</span>
        <p>{item.description}</p>
      </ListItem>
    );
  });

  return <List>{listItems}</List>;
};

export default itemList;
