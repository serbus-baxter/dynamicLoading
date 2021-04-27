import { Route, Switch } from "react-router-dom";

import DialogPage from "./pages/dialog-page";
import IndexPage from "./pages/index-page";
import React from "react";
import RoutingPage from "./pages/routing-page";
import UiLibraryPage from "./pages/ui-library-page";
import { loadFromRemote } from "fm-loader";

var appsList = [ {name: 'app_02', url: 'http://localhost:3002/remoteEntry.js'}, 
                 {name: 'app_03', url: 'http://localhost:3003/remoteEntry.js'},    
               ];

var dynamicComponent = [];

var componentType = ['Dialog', 'Button'];


appsList.map((item, index) => {
              var componentLazy = React.lazy(loadFromRemote({ remote: { url: item.url, name: item.name }, component: componentType[index] }));
              dynamicComponent.push({ myComponent: componentLazy,
                                      name: item.name,
              });
  }
);

// var DynamicButton = dynamicComponent[1].myComponent;
// var Button = <React.Suspense fallback={<div>Loading...</div>}>
//                 <DynamicButton>&#128133; Button</DynamicButton>
//               </React.Suspense>;
// dynamicComponent[1].myComponent = Button;

const Routes = () => (
  <Switch>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Route path="/" exact={true}>
        <IndexPage />
      </Route>

      {
        dynamicComponent.map((item, index) => (
          <Route key={index} path={"/" + item.name} component={item.myComponent} />
        ))}
    </React.Suspense>    
    

    {/* <Route path={"/" + dynamicComponent.name} component={DialogPage} />
    <Route path="/ui-library" component={UiLibraryPage} />
    <Route path="/routing" component={RoutingPage} /> */}
  </Switch>
);

export default Routes;
