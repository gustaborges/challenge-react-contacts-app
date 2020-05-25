import React from "react";
import Contact from "./Contact";
import ContactsHeader from "./ContactsHeader"


function Contacts({isLoading, contactsList=[]}) {

    return (
      <div className="container" data-testid="contacts">
        <section className="contacts">
          <ContactsHeader/>

          {
            isLoading ? <h2>Carregando...</h2> : null
          }
          {
            !isLoading &&
            contactsList.map((contact) => {
              return (
                <Contact
                  key={contact.id}
                  avatarUrl={contact.avatar}
                  name={contact.name}
                  phone={contact.phone}
                  country={contact.country}
                  admissionDate={new Date(contact.admissionDate).toLocaleDateString()}
                  company={contact.company}
                  department={contact.department}
                />
              );
            })
          }
        </section>
      </div>
    );
}



export default Contacts;
