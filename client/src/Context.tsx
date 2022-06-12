import axios from 'axios';
import * as React from 'react';
import {
  createContext, useState
} from 'react';

interface SalesLeadTypes {
  id?: number;
  name: string;
  value: number;
  date: Date;
  clientName: string;
  ownerName: string;
}

interface ContextTypes {
  showLeads: boolean;
  setShowLeads: React.Dispatch<React.SetStateAction<boolean>>;
  leadsList?: Array<object>;
  setLeadsList: React.Dispatch<React.SetStateAction<Array<object>>>;
  chosenSalesLead?: SalesLeadTypes;
  setChosenSalesLead: React.Dispatch<React.SetStateAction<SalesLeadTypes>>;
  handleLeadSubmit: (lead : SalesLeadTypes) => void;
  handleDelete: ({ id } : SalesLeadTypes) => void;
  handleUpdate: ({ id }: SalesLeadTypes) => void;

}

interface Props {
  children: React.ReactNode;
}

const Context = createContext({} as ContextTypes);

const ContextProvider = ({ children }: Props) => {
  const [showLeads, setShowLeads] = useState<boolean>(true);
  const [leadsList, setLeadsList] = useState<Array<object>>([]);
  const [chosenSalesLead, setChosenSalesLead] = useState<SalesLeadTypes>();
  
  const handleLeadSubmit = (lead : SalesLeadTypes)  => {
    axios.post('', lead)
      .then(({ data }) => {
        //append lead to top of leadsList
        setLeadsList([data, ...leadsList]);
      })
      .catch((err) => {
        console.error(`Error in POST req: ${err}`);
      })
  }

  const handleDelete = ({ id } : SalesLeadTypes) => {
    axios.delete('')
      .then(() => {
        alert('Successfully Deleted!');
      })
      .catch((err) => {
        console.error(`Error in DELETE req: ${err}`);
      })

  }

  const handleUpdate = ({ id }: SalesLeadTypes) => {
    axios.put('')
      .then(() => {

      })
      .catch((err) => {
        console.error(`Error in UPDATE req: ${err}`);
      })
  }





  const LeadProps : ContextTypes = {
    showLeads,
    setShowLeads,
    leadsList,
    setLeadsList,
    chosenSalesLead,
    setChosenSalesLead,
    handleLeadSubmit,
    handleDelete,
    handleUpdate

  }


  return (
    <Context.Provider value={LeadProps}>{children}</Context.Provider>
  );
};

export default { ContextProvider, Context };