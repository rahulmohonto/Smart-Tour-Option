import React from 'react';
import { Redirect, Route } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loginInfo] = useContext(UserContext)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loginInfo.email || loginInfo.name ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;