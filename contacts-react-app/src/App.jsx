import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import ContactList from "./components/ContactList";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CircularProgress } from "@mui/material";

function App() {
  const [contactData, setContactData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/contacts");
      setContactData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(contactData);

  const handleCreateContact = (newContact) => {
    setContactData((prevApiResponse) => ({
      ...prevApiResponse,
      data: [...prevApiResponse.data, newContact],
    }));
  };

  const handleUpdateContact = async (updatedContact) => {
    try {
      await axios.put(
        `http://localhost:8080/api/contact/${updatedContact.id}`,
        updatedContact,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      fetchData();
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteContact = async (contactId) => {
    try {
      await axios.delete(`http://localhost:8080/api/contact/${contactId}`);

      setContactData((prevApiResponse) => ({
        ...prevApiResponse,
        data: prevApiResponse.data.filter(
          (contact) => contact.id !== contactId
        ),
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (name, email, phone) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/contact",
        {
          name,
          email,
          phoneNumber: phone,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const newContact = response.data;
      handleCreateContact(newContact.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="bg-white-bck flex items-center justify-between rounded-lg p-12 wrapper">
        <div className="bg-custom-blue left text-white rounded-lg p-4">
          <div className="flex items-center mt-14">
            <p className="border w-4 h-4 rounded-full flex justify-center items-center p-5">
              <ArrowForwardIcon />
            </p>
            <p className="pl-4">CONTACT INFO</p>
          </div>
          <div className="flex items-center mt-6">
            <p className="border w-4 h-4 rounded-full flex justify-center items-center p-5 ">
              <ArrowDownwardIcon />
            </p>
            <p className="pl-4">CONTACTS</p>
          </div>
        </div>
        <div className="mr-8">
          <h2 className="text-3xl font-bold text-center">Contact Info</h2>
          <p className="text-gray mb-8">
            Please provide your name, email address, and phone number.
          </p>
          <PersonalInfo handleSubmit={handleSubmit} />
        </div>
      </div>
      <div className="bg-white-bck flex items-center justify-center rounded-lg p-12 wrapper mt-10">
        {contactData && contactData.data && Array.isArray(contactData.data) ? (
          <ContactList
            contacts={contactData.data}
            handleUpdateContact={handleUpdateContact}
            handleDeleteContact={handleDeleteContact}
          />
        ) : (
          <CircularProgress />
        )}
      </div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </>
  );
}

export default App;
