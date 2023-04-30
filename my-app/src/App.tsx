import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import ContactList from "./components/ContactList";
import { Contact } from "./models/models";

const App: React.FC = () => {
  const [contact, setContact] = useState<string>("");
  const [contacts, setContacts] = useState<Contact[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (contact) {
      setContacts([...contacts, { id: Date.now(), contact, isDone: false }]);
      setContact("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild contact={contact} setContact={setContact} handleAdd={handleAdd} />
      <ContactList contacts={contacts} setContacts={setContacts} />
    </div>
  );
};

export default App;
