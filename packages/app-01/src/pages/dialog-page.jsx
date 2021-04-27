import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import DialogMarkdown from "../docs/Dialog.md";
import Markdown from "markdown-to-jsx";
import Page from "../Page";
import React from "react";
import { loadFromRemote } from "fm-loader";

const Dialog = React.lazy(loadFromRemote({ remote: { url: 'http://localhost:3002/remoteEntry.js', name: 'app_02' }, component: 'Dialog' }));

const DialogPage = () => (
  <div >
    {/* <Markdown>{DialogMarkdown}</Markdown> */}
    <h1>app 2</h1>
    <React.Suspense fallback="Loading Dialog...">
      <Dialog />
    </React.Suspense>
  </div>
);

export default DialogPage;
