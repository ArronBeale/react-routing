import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  // Navigate programmatically
  function navigateHandler() {
    navigate('products');
  }

  return (
    <>
      <h1>Homepage</h1>
      <p>
        Go to <Link to='products'>the list of products</Link>.
      </p>
      <p>
        <button onClick={navigateHandler}>navigate</button>
      </p>
    </>
  );
}

export default HomePage;
