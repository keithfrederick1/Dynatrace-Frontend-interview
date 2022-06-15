import axios from 'axios';
import * as React from 'react';
import {
  createContext, useState
} from 'react';

interface SalesLeadTypes {
  id?: number;
  name: string;
  value: number;
  date: string | undefined;
  clientName: string;
  ownerName: string;
}

interface ContextTypes {
  showLeads: boolean;
  setShowLeads: React.Dispatch<React.SetStateAction<boolean>>;
  leadsList?: Array<object>;
  setLeadsList: React.Dispatch<React.SetStateAction<Array<object>>>;
  chosenLead?: SalesLeadTypes;
  setChosenLead: React.Dispatch<React.SetStateAction<SalesLeadTypes>>;
  handleLeadSubmit: (lead : SalesLeadTypes) => Promise<void>;
  handleDelete: ({ id } : SalesLeadTypes) => Promise<void>;
  handleUpdate: ({ id }: SalesLeadTypes) => Promise<void>;
  getLeads: () => Promise<void>;

}

interface Props {
  children?: React.ReactNode;
}

export const Context = createContext({} as ContextTypes);

export const ContextProvider = ({ children }: Props) => {
  const [showLeads, setShowLeads] = useState<boolean>(true);
  const [leadsList, setLeadsList] = useState<Array<object>>([]);
  const [chosenLead, setChosenLead] = useState<SalesLeadTypes>({} as SalesLeadTypes);

  const handleLeadSubmit = (lead : SalesLeadTypes)  => {
    return axios.post('http://localhost:3000/api/leads ', lead)
      .then(({ data }) => {
        //append lead to top of leadsList
        setLeadsList([data, ...leadsList]);
      })
      .catch((err) => {
        console.error(`Error in POST req: ${err}`);
      })
  }

  const handleDelete = ({ id } : SalesLeadTypes) => {
    return axios.delete(`http://localhost:3000/api/leads/${id}`)
      .then(() => {
        alert('Successfully Deleted!');
      })
      .catch((err) => {
        console.error(`Error in DELETE req: ${err}`);
      })

  }

  const handleUpdate = ({ id }: SalesLeadTypes) => {
    return axios.put('')
      .then(() => {

      })
      .catch((err) => {
        console.error(`Error in UPDATE req: ${err}`);
      })
  }

  const getLeads = () => {
    return axios.get('http://localhost:3000/api/leads')
      .then(({ data }) => {
        setLeadsList(data);
      })
      .catch((err) => {
        console.error(err);
      })
  }



  const leadProps : ContextTypes = {
    showLeads,
    setShowLeads,
    leadsList,
    setLeadsList,
    chosenLead,
    setChosenLead,
    handleLeadSubmit,
    handleDelete,
    handleUpdate,
    getLeads

  }



  return (
   <><Context.Provider value={leadProps}>{children}</Context.Provider></>
  );
};

