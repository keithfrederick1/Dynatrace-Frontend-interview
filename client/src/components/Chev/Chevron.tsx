import React from 'react';
import './styles.css';

const routes = ['Accounts', 'Sales leads', 'Add sales lead'];

const Chevron = () => {
  return (
   <ul className="breadcrumb">
    {routes.map((r) => {
        return (
            <li><a href='#'>{r}</a></li>
        )
    })}
   </ul>
  )
}

export default Chevron