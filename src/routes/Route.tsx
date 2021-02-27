import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  component: Component,

  ...rest
}) => {
  const myComponent = () => {
    return <Component />;
  };

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return <>{myComponent()}</>;
      }}
    />
  );
};

export default Route;
