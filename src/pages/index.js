// import React, { Suspense } from "react";
// import { inject, observer } from "mobx-react";
// import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import Loading from "../components/shared/loading";
// import { routes } from "../routes";
// // import withLoadable from '../tools/loadable'
// import Layout from "./layout";

// function index(props) {
//   const { store } = props;
//   const { authStore } = store;
//   const { isAuth } = authStore;
//   return (
//     <Suspense fallback={<Loading />}>
//       <BrowserRouter>
//         <Switch>
//           {routes &&
//             routes.map(route =>
//               route.private ? (
//                 // Private
//                 <Route
//                   key={route.label}
//                   {...route}
//                   component={props1 => {
//                     // const MyComponent = withLoadable(
//                     // 	import(`./${route.component}`)
//                     // )
//                     const LazyComponent = React.lazy(() =>
//                       import(`./${route.component}`)
//                     );
//                     return isAuth ? (
//                       <Layout>
//                         {/* <MyComponent {...props1} {...route} /> */}
//                         <LazyComponent {...props1} {...route} />
//                       </Layout>
//                     ) : (
//                       <Redirect to="/login" />
//                     );
//                   }}
//                 />
//               ) : (
//                 // Not private
//                 <Route
//                   key={route.label}
//                   {...route}
//                   component={props1 => {
//                     // const MyComponent = withLoadable(
//                     // 	import(`./${route.component}`)
//                     // )
//                     const LazyComponent = React.lazy(() =>
//                       import(`./${route.component}`)
//                     );
//                     return !isAuth ? (
//                       // <MyComponent {...props1} {...route} />
//                       <LazyComponent {...props1} {...route} />
//                     ) : (
//                       <Redirect to="/" />
//                     );
//                   }}
//                 />
//               )
//             )}
//         </Switch>
//       </BrowserRouter>
//     </Suspense>
//   );
// }
// // export default index
// export default inject("store")(observer(index));

import React, { Suspense, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Loading from "../components/shared/loading";
import Layout from "./layout";
import { routes } from "../routes";

function index(props) {
  const [isAuth, setIsAuth] = useState(true);
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
                  component={props1 => {
                    // const MyComponent = withLoadable(
                    // 	import(`./${item.component}`)
                    // )
                    const LazyComponent = React.lazy(() =>
                      import(`./${item.component}`)
                    );
                    return isAuth ? (
                      <Layout>
                        {/* <MyComponent {...props1} {...item} /> */}
                        <LazyComponent {...props1} {...item} />
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
                  component={props1 => {
                    // const MyComponent = withLoadable(
                    // 	import(`./${item.component}`)
                    // )
                    const LazyComponent = React.lazy(() =>
                      import(`./${item.component}`)
                    );
                    return !isAuth ? (
                      // <MyComponent {...props1} {...item} />
                      <LazyComponent {...props1} {...item} />
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
