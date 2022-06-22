import axios from 'axios';
import * as React from 'react';
import {
  createContext, useState
} from 'react';

interface SalesLeadTypes {
  id?: number;
  name: string;
  value: number;
  date: Date | null;
  clientName: string;
  ownerName: string;
}

interface ContextTypes {
  showLeads: boolean;
  setShowLeads: React.Dispatch<React.SetStateAction<boolean>>;
  leadsList?: Array<SalesLeadTypes>;
  setLeadsList: React.Dispatch<React.SetStateAction<Array<SalesLeadTypes>>>;
  chosenLead?: SalesLeadTypes;
  setChosenLead: React.Dispatch<React.SetStateAction<SalesLeadTypes>>;
  handleLeadSubmit: (lead : SalesLeadTypes) => Promise<void>;
  handleDelete: (id : number | undefined ) => Promise<void>;
  handleUpdate: (id : number | undefined ) => Promise<void>;
  getLeads: () => Promise<void>;

}

interface Props {
  children?: React.ReactNode;
}

export const Context = createContext({} as ContextTypes);

export const ContextProvider = ({ children }: Props) => {
  const [showLeads, setShowLeads] = useState<boolean>(true);
  const [leadsList, setLeadsList] = useState<Array<SalesLeadTypes>>([]);
  const [chosenLead, setChosenLead] = useState<SalesLeadTypes>({} as SalesLeadTypes);

  const handleLeadSubmit = (lead : SalesLeadTypes)  => {
    return axios.post('http://localhost:3000/api/leads ', lead)
      .then(({ data }) => {
        //append lead to top of leadsList
        setLeadsList([data, ...leadsList]);
      })
      .then(() => {
        setShowLeads(!showLeads);
      })
      .catch((err) => {
        console.error(`Error in POST req: ${err}`);
      })
  }

  const handleDelete = ( id : number | undefined ) => {
    return axios.delete(`http://localhost:3000/api/leads/${id}`)
      .then(() => {
        getLeads();
      })
      .catch((err) => {
        console.error(`Error in DELETE req: ${err}`);
      })

  }

  const handleUpdate = (id : number | undefined ) => {
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

