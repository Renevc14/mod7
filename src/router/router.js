import { createBrowserRouter } from "react-router-dom";
import Default from "../screens/Default";
import Product from "../screens/Product";
import LandingPage from "../screens/LandingPage/LandingPage";

import App from "../App";
import LoginForm from "../screens/Forms/LoginForm";
import DictionaryPage from "../screens/Dictionary/DictionaryPage";

const basename = process.env.NODE_ENV === 'production' ? '/React_Dictionary' : '/';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/default",
                element: <Default />,
            },
            {
                path: "/product",
                element: <Product />,
            },
            {
                path: "/loginForm",
                element: <LoginForm />
            },
            {
                path: "/dictionary",
                element: <DictionaryPage />
            }
        ],
    },
],
{
    basename: basename
}
);

export default router;