import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <Link to='/'>Home</Link>
        </ul>
        <ul>
          <Link to='/products'>Products</Link>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
