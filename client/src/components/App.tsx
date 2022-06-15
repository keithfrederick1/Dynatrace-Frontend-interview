import * as React from 'react';
import { useContext, useEffect } from 'react';
import PermanentDrawerLeft from "./SideDrawer";

import { Context } from '../Context';

export default function App() {
 const { getLeads } = useContext(Context);

  useEffect(() => {
   getLeads();
  })

  return (
    <div className="App">
      <PermanentDrawerLeft />
    </div>
  );
}