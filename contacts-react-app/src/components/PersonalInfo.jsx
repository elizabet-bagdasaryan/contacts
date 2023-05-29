import { useState } from "react";

const PersonalInfo = ({ handleSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleSpaces = (event) => {
    const value = event.target.value;
    const trimmedValue = value.replace(/\s/g, "");
    setPhone(trimmedValue);
  };

  const resetValues = () => {
    setName("");
    setEmail("");
    setPhone("");

    setNameError(false);
    setEmailError(false);
    setPhoneError(false);
  };

  const validateInputs = () => {
    let isValid = true;

    if (!name.trim() || name.trim().length < 2) {
      setNameError(true);
      isValid = false;
    } else {
      setNameError(false);
    }

    if (
      !email.trim() ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    ) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (
      !phone.trim() ||
      phone.length < 8 ||
      phone.length > 15 ||
      isNaN(phone)
    ) {
      setPhoneError(true);
      isValid = false;
    } else {
      setPhoneError(false);
    }

    return isValid;
  };

  const handleSubmitClick = async () => {
    if (validateInputs()) {
      await handleSubmit(name, email, phone);
      resetValues();
    }
  };

  return (
    <div>
      <div className="mb-6">
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          name="name"
          className="p-2 text-sm rounded"
          placeholder="e.g. Lorem Ipsum"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        {nameError && (
          <span className="text-red text-xs italic">
            Required. Min 2 characters
          </span>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="email">Email Address:</label>
        <br />
        <input
          type="text"
          name="email"
          className="p-2 text-sm rounded"
          placeholder="e.g. loremipsum@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        {emailError && (
          <span className="text-red text-xs italic">
            Required. Should match Email format
          </span>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="phone">Phone Number:</label>
        <br />

        <input
          type="text"
          name="phone"
          className="p-2 text-sm rounded"
          placeholder="e.g. +1 234 567 890"
          value={phone}
          onChange={handleSpaces}
        />
        <br />
        {phoneError && (
          <span className="text-red text-xs italic">
            Required. Should include 8-15 digits
          </span>
        )}
      </div>
      <button
        className="bg-custom-blue hover:bg-hover-blue next py-2 px-6 rounded text-white text-[14px] flex justify-end mt-20"
        onClick={handleSubmitClick}
      >
        Create
      </button>
    </div>
  );
};

export default PersonalInfo;
