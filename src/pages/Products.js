import { Link } from 'react-router-dom';

function ProductsPage() {
    return (
        <>
          <h1>Products Page</h1>
          <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
          </ul>
          <p>Go to <Link to='/'>homepage</Link>.</p>
        </>
      );
}

export default ProductsPage;