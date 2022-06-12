import * as React from 'react';
import BreadCrumbs from './Navigation/BreadCrumbs';
import DrawerContainer from './Navigation/DrawerContainer';
//complete

const App = () => {

  const [showLeads, setShowLeads] = React.useState<boolean>(true);
 
  return (
    <div>
      <BreadCrumbs />
      <DrawerContainer showLeads={showLeads} setShowLeads={setShowLeads}/>
      
    </div>
  )
}

export default App
