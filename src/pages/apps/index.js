import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "../../components/shared/loading";

import User from "../user";

export default function Root(props) {
  const { routes } = props;

  console.log(props);
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {routes &&
          routes.map(route => (
            <Route
              key={route.label}
              {...route}
              component={() => {
                const LazyComponent = React.lazy(() =>
                  import(`../${route.component}`)
                );
                return (
                  <LazyComponent {...props} {...route} routes={route.routes} />
                );
              }}
            />
          ))}
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
}
