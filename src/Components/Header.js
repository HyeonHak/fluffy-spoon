import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const Header = styled.header`
  top: 0;
  left: 0;
  margin: 0 15px;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
`;

const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  width: 50px;
  height: 50px;
  &:not(last-child) {
    margin-right: 15px;
  }
  border-bottom: 1px solid ${(props) => (props.current ? 'red' : 'transparent')};
  transition: border-bottom 0.5s ease-in-out;
`;

const Slink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === '/'}>
        <Slink to="/">Home</Slink>
      </Item>
      <Item current={pathname === '/tv'}>
        <Slink to="/tv">TV</Slink>
      </Item>
      <Item current={pathname === '/search'}>
        <Slink to="/search">Search</Slink>
      </Item>
    </List>
  </Header>
));
