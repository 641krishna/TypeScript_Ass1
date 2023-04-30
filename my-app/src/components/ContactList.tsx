import React from "react";
import { Contact } from "../models/models";
import SingleContact from "./SingleContact";

interface props {
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
}

const ContactList: React.FC<props> = ({ contacts, setContacts }) => {
  return (
    <div className="contact">
      {contacts?.map((contact) => (
        <SingleContact
          contacts={contacts}
          contact={contact}
          key={contact.id}
          setContacts={setContacts}
        />
      ))}
    </div>
  );
};

export default ContactList;
