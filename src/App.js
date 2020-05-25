import React, { useState, useEffect } from 'react';
import './App.scss';

import ContactsApi from './services/ContactsApi';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';


function App () {
  const [originalContactsList, setOriginalContactsList] = useState([]);
  const [contacts, setContacts] = useState({isLoading:true, data:[]});
  const [filterCriteria, setFilterCriteria] = useState('');

  useEffect(() => {
    ContactsApi.get('/v1/contacts')
    .then((resolvedValue) => {
      setOriginalContactsList(resolvedValue.data)
      setContacts({ isLoading:false, data: resolvedValue.data});

    })
    .catch(rejectReason => {
      console.log(rejectReason);

    });

  }, []);


  function filterContactsByName(name) {
    if(name.length === 0) {
      // TO-DO: Resetar a lista com a opção de ordenação definida pelo usuário.
      setContacts({data: originalContactsList});
      return;
    }

    const filteredArray = originalContactsList.filter(contact => {
      return contact['name'].toLocaleLowerCase().includes(name.toLocaleLowerCase());
    });
    
    setContacts({data:filteredArray});
  }


  function orderContactsByAttribute({ attribute, isDate=false}) {
    let orderedArray;

    if(isDate) {
      orderedArray = contacts['data'].sort((a, b) => {
        if(new Date(a[attribute]) > new Date(b[attribute])) return 1;
        if(new Date(a[attribute]) < new Date(b[attribute])) return -1;
        return 0;
      });
    }
    else {
      orderedArray = contacts['data'].sort((a, b) => {
        if(a[attribute] > b[attribute]) return 1;
        if (a[attribute] < b[attribute]) return -1;
        return 0;
      });
    }

    setContacts({ data:orderedArray});
  }


  return (
    <React.Fragment>
      <Topbar />
      <Filters 
        orderContactsByAttribute={orderContactsByAttribute}
        filterContactsByName={filterContactsByName}
        filterCriteria={filterCriteria}
        setFilterCriteria={setFilterCriteria}
      />
      <Contacts isLoading={contacts.isLoading} contactsList={contacts.data}/>
    </React.Fragment>
  );

}

export default App;
