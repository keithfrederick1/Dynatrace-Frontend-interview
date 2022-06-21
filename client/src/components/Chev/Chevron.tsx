import React, { useContext } from 'react';
import { Context } from "../../Context";
import './styles.css';

let routes = ['Accounts', 'Sales leads', 'Add sales lead'];

const Chevron = () => {
  const { setShowLeads, showLeads } = useContext(Context);

  return (
   <ul className="breadcrumb">
    {routes.map((r) => {
        return (
            <li><a href='#' onClick={() => setShowLeads(true)}>{r}</a></li>
        )
    })}
   </ul>
  )
}

export default Chevron