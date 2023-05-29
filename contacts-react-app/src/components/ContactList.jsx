import { useState } from "react";

const ContactList = ({
  contacts,
  handleUpdateContact,
  handleDeleteContact,
}) => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedPhone, setUpdatedPhone] = useState("");

  const handleEditClick = (contact) => {
    setSelectedContact(contact);
    setUpdatedName(contact.name);
    setUpdatedEmail(contact.email);
    setUpdatedPhone(contact.phoneNumber);
  };

  const handleCancelEdit = () => {
    setSelectedContact(null);
    setUpdatedName("");
    setUpdatedEmail("");
    setUpdatedPhone("");
  };

  const handleUpdateClick = () => {
    const updatedContact = {
      ...selectedContact,
      name: updatedName,
      email: updatedEmail,
      phoneNumber: updatedPhone,
    };

    handleUpdateContact(updatedContact);

    setSelectedContact(null);
    setUpdatedName("");
    setUpdatedEmail("");
    setUpdatedPhone("");
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-12 text-center">Contacts</h2>
      <ul>
        {contacts.length === 0 ? (
          <h3 className="text-center">No Contacts</h3>
        ) : (
          contacts.map((contact) => (
            <li key={contact.id} className="mb-10">
              {selectedContact === contact ? (
                <div>
                  <p>
                    <input
                      type="text"
                      value={updatedName}
                      onChange={(e) => setUpdatedName(e.target.value)}
                      className="p-2 text-sm rounded"
                    />
                  </p>
                  <p>
                    <input
                      type="text"
                      value={updatedEmail}
                      onChange={(e) => setUpdatedEmail(e.target.value)}
                      className="p-2 text-sm rounded my-2"
                    />
                  </p>
                  <p>
                    <input
                      type="text"
                      value={updatedPhone}
                      onChange={(e) => setUpdatedPhone(e.target.value)}
                      className="p-2 text-sm rounded"
                    />
                  </p>
                  <div className="flex">
                    <button
                      onClick={handleUpdateClick}
                      className="bg-custom-blue hover:bg-hover-blue next py-2 px-6 rounded text-white text-[14px] flex justify-end mt-2"
                    >
                      Update Contact
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="bg-custom-blue hover:bg-hover-blue next py-2 px-6 rounded text-white text-[14px] flex justify-end mt-2 ml-4"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-custom-blue flex font-bold">
                    Name:{" "}
                    <p className="text-gray font-light ml-4 capitalize">
                      {contact.name}
                    </p>
                  </div>
                  <div className="text-custom-blue flex font-bold">
                    Email:{" "}
                    <p className="text-gray font-light ml-4">{contact.email}</p>
                  </div>
                  <div className="text-custom-blue flex font-bold">
                    Phone:{" "}
                    <p className="text-gray font-light ml-2">
                      {contact.phoneNumber}
                    </p>
                  </div>
                  <div className="flex">
                    <button
                      onClick={() => handleEditClick(contact)}
                      className="bg-custom-blue hover:bg-hover-blue next py-2 px-6 rounded text-white text-[14px] flex justify-end mt-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteContact(contact.id)}
                      className="bg-custom-blue hover:bg-hover-blue next py-2 px-6 rounded text-white text-[14px] flex justify-end mt-2 ml-4"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ContactList;
