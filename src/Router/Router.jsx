import { createBrowserRouter } from 'react-router-dom';
import Home from './../Pages/Home/Home';
import Main from './Main/Main';
import CategoryCard from './../Pages/CategoryCard/CategoryCard';
import Products from '../Pages/Products/Products';
import Cart from '../Pages/Cart/Cart';
import SingleCategory from './SingleCategory/SingleCategory';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category',
                element: <CategoryCard></CategoryCard>,
                loader: () => fetch(`http://localhost:3000/categories`)
            },
            {
                path: '/category/:id',
                element: <SingleCategory></SingleCategory>,
                loader: ({params}) => fetch(`http://localhost:3000/categories/${params.id}`)
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch(`http://localhost:3000/products`)
            },
            {
                path: '/products/:id',
                element: <Products></Products>,
                loader: ({params}) => fetch(`http://localhost:3000/products/${params.id}`)
            },
            {
                path: '/cart/:id',
                element: <Cart></Cart>,
                loader: ({params}) => fetch(`http://localhost:3000/products/${params.id}`)
            }
        ],
        
    }
])
export default router;