import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "../../components/shared/loading";
// import withLoadable from '../../tools/loadable'

export default function Root(props) {
  const { routes } = props;
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {routes &&
          routes.map(route => (
            <Route
              key={route.label}
              {...route}
              component={props1 => {
                // const MyComponent = withLoadable(import(`../${route.component}`))
                const LazyComponent = React.lazy(() =>
                  import(`../${route.component}`)
                );
                return (
                  // <MyComponent
                  // {...props}
                  // {...props1}
                  // {...route}
                  // routes={route.routes}
                  // />
                  <LazyComponent
                    {...props}
                    {...props1}
                    {...route}
                    routes={route.routes}
                  />
                );
              }}
            />
          ))}
        <Redirect to="/🥢" />
      </Switch>
    </Suspense>
  );
}
