import { Link } from 'react-router-dom';

function ProductsPage() {
    return (
        <>
          <h1>Products Page</h1>
          <p>Go to <Link to='/'>homepage</Link>.</p>
        </>
      );
}

export default ProductsPage;