import React, { Suspense, useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { CTX } from "../tools/context";

import Loading from "../components/shared/loading";
import Layout from "./layout";
import { routes } from "../routes";

function index(props) {
  const authContext = useContext(CTX);
  const { isAuth } = authContext;

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          {routes &&
            routes.map(item =>
              item.private ? (
                <Route
                  key={item.label}
                  {...item}
                  component={props => {
                    const LazyComponent = React.lazy(() =>
                      import(`./${item.component}`)
                    );
                    return isAuth ? (
                      <Layout>
                        <LazyComponent {...props} {...item} />
                      </Layout>
                    ) : (
                      <Redirect to="/login" />
                    );
                  }}
                />
              ) : (
                <Route
                  key={item.label}
                  {...item}
                  component={props => {
                    const LazyComponent = React.lazy(() =>
                      import(`./${item.component}`)
                    );
                    return !isAuth ? (
                      <LazyComponent {...props} {...item} />
                    ) : (
                      <Redirect to="/" />
                    );
                  }}
                />
              )
            )}
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default index;
