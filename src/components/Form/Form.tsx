import axios from "axios";
import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [agent, setAgent] = useState({});

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3001/agents", agent);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: any) =>
    setAgent((A) => ({ ...A, [e.target.name]: e.target.value }));

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>create a new agent</h2>
      <input
        type="text"
        minLength={3}
        placeholder="firstName"
        name="firstName"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        minLength={3}
        placeholder="lastName"
        name="lastName"
        onChange={handleChange}
        required
      />
      <input
        type="url"
        minLength={3}
        placeholder="photoUrl"
        name="photoUrl"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        minLength={3}
        placeholder="agentLicence"
        name="agentLicence"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        minLength={3}
        placeholder="address"
        name="address"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        minLength={3}
        placeholder="practiceAreas"
        name="practiceAreas"
        onChange={handleChange}
        required
      />
      <textarea
        name="aboutMe"
        minLength={30}
        cols={30}
        rows={10}
        onChange={handleChange}
        required
      ></textarea>
      <input type="submit" value="enviar" />
    </form>
  );
};

export default Form;
