import * as React from 'react';
import { useContext, useEffect } from 'react';
import { Context } from '../Context';
import PermanentDrawerLeft from './SideDrawer';


export default function App() {
 const { getLeads } = useContext(Context);

  useEffect(() => {
   getLeads();
  })

  return (
    <div className="App">
      <PermanentDrawerLeft />
      {/* <Chevron /> */}
    </div>
  );
}