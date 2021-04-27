import Markdown from "../Markdown";
import Page from "../Page";
import React, {useState, useEffect} from "react";
import Welcome from "../docs/Welcome.md";
import { loadFromRemote, loadVarFromRemote} from "fm-loader";
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core/styles";
//import Icon_two from 'app_02/array';
import SideNav from "../SideNav";


//const IconApp2 = React.lazy(loadFromRemote({ remote: { url: 'http://localhost:3002/remoteEntry.js', name: 'app_02' }, component: 'Icon' }));
//const IconApp3 = React.lazy(loadFromRemote({ remote: { url: 'http://localhost:3003/remoteEntry.js', name: 'app_03' }, component: 'Icon' }));

const useStyles = makeStyles(theme =>
  createStyles({
    button: {
      margin: 20,
    },
  })
);
var manifestArr= [];
var IconComp=[];

export default function IndexPage() {
  const classes = useStyles();

  const history = useHistory();

  const [icon, setIcon] = useState([]);

  var appsList = [ {name: 'app_02', url: 'http://localhost:3002/remoteEntry.js'}, 
                 {name: 'app_03', url: 'http://localhost:3003/remoteEntry.js'},    
               ];

  //var icon = [];

  // initiation effect
  useEffect(() => {
    var arrApp2 = loadFromRemote({ remote: { url: 'http://localhost:3002/remoteEntry.js', name: 'app_02' }, component: "./manifestArr" });

    arrApp2().then(factory=> {
      console.log(factory);
        var ss = 2;
        manifestArr = factory.default;
        console.log(manifestArr);

        manifestArr.map((item) =>{
            if (item.Type === "Application")
            {
              IconComp.push(item.Icon);
            }
          }
        );

        appsList.map((item) => {
        var componentLazy = React.lazy(loadFromRemote({ remote: { url: item.url, name: item.name }, component: IconComp[0] }));
        // icon.push({ componentIcon: componentLazy,
        //             appName: item.name,
        //         });
        
        setIcon((prevItems) => {
          //if (parameterItems.find((item) => newItem.type === item.type))
          // return [...prevItems];
          const newItem =  { componentIcon: componentLazy,
                          appName: item.name,
          }
          return [...prevItems, newItem];
        });
        
        }
      );
    });
  }, []); // empty dependency array --> initiation
  

  function handleClickApp(name) {
      history.push("/" +name);
  }
  
  return (
  <div>
     {
      icon.map((item, index) => {
          var Component = item.componentIcon;
          return <button key={index} className={classes.button} onClick={() => handleClickApp(item.appName)}>
            <React.Suspense fallback="Loading Icon...">
              <Component />
            </React.Suspense>
          </button>
    })} 
    {/* <button className={classes.button} onClick={handleClickApp2}>
      <React.Suspense fallback="Loading Icon...">
        <IconApp2 />
      </React.Suspense>
    </button>
    <button className={classes.button} onClick={handleClickApp3}>
      <React.Suspense fallback="Loading Icon...">
        <IconApp3 />
      </React.Suspense>
    </button> */}
    {/* <Markdown>{Welcome}</Markdown> */}
    {manifestArr ? console.log("manifestArr: " + manifestArr): console.log("manifestArr: empty" )}
    <h3>manifest: </h3>
     {
      manifestArr.map(function(item, i){
        console.log('test');
        return (<li key={item.Name}>{item.Name}, {item.Type}, {item.Component}, {item.Icon}</li>);
        
      })
    }    
  </div>
 );
}
