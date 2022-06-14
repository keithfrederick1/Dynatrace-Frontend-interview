import * as React from 'react';
import PermanentDrawerLeft from "./SideDrawer";

export default function App() {
  // const { getLeads } = useContext(Context);

  // useEffect(() => {
  //   return getLeads();
  // })

  return (
    <div className="App">
      <PermanentDrawerLeft />
    </div>
  );
}