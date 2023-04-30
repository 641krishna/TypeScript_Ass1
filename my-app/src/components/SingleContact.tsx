import React, { useEffect, useState } from "react";
import { useRef } from "react";
// import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
// import { MdDone } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { Contact } from "../models/models";

const Singlecontact: React.FC<{
  contact: Contact;
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
}> = ({ contact, contacts, setContacts }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editContact, setEditContact] = useState<string>(contact.contact);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setContacts(
      contacts.map((contact) => (contact.id === id ? { ...contact, contact: editContact } : contact))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };
  // contact
  const handleDone = (id: number) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === id ? { ...contact, isDone: !contact.isDone } : contact
      )
    );
  };

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, contact.id)}>
      {edit ? (
        <input
          value={editContact}
          onChange={(e) => setEditContact(e.target.value)}
          className="contacts__single--text"
          ref={inputRef}
        />
      ) : contact.isDone ? (
        <s className="contacts__single--text">{contact.contact}</s>
      ) : (
        <span className="contacts__single--text">{contact.contact}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !contact.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(contact.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(contact.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default Singlecontact;
