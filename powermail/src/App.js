import React from 'react';
import './css/ComposeStyle.css';
import './css/PowerStyles.css';

import { InboxHeader, InboxBody } from './Components/Inbox.js';

function App() {
  return (
    <div className="container">
      {/* <Inbox />   */}
      <InboxHeader />
      <InboxBody />
    </div>
  );
}

export default App;
