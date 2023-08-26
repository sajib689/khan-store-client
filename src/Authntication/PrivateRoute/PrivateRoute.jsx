import React, {useContext} from 'react';
import { AuthContext } from "../../Providers/AuthProviders";
import { Navigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading) {
    return <ThreeDots 
    height="80" 
    width="80" 
    radius="9"
    color="#4fa94d" 
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
     />
    }
   if(user) {
    return children
   }
   return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;