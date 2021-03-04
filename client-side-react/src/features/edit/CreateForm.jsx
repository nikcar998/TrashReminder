import React, { Fragment, useState } from "react";
import {
  Form,
  Segment,
  Header,
  Input,
  Dropdown,
  Button,
  Divider,
} from "semantic-ui-react";
import { TextField } from "@material-ui/core";
import agent from "../../app/api/agent";
import { useHistory } from "react-router-dom";

export const CreateForm = () => {
  const history = useHistory();

  const options = [
    { key: "lunedì", text: "Lunedì", value: "lunedì" },
    { key: "martedì", text: "Martedì", value: "martedì" },
    { key: "mercoledì", text: "Mercoledì", value: "mercoledì" },
    { key: "giovedì", text: "Giovedì", value: "giovedì" },
    { key: "venerdì", text: "Venerdì", value: "venerdì" },
    { key: "sabato", text: "Sabato", value: "sabato" },
    { key: "domenica", text: "Domenica", value: "domenica" },
  ];

  const initialState = {
    tipo: "",
    ora_inizio: "00:00",
    ora_fine: "00:00",
    giorno: "lunedì",
  };

  const [garbageDay, setGarbageDay] = useState(initialState);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit() {
    agent.TrashPicking.create(garbageDay).then((resp) => {
      console.log(resp.Result);
      if (resp.Result == "Data has been saved") {
        history.push("/garbageDay");
      } else {
        setErrorMessage(
          "Ci sono stati degli errori durante la compilazione, controlli di aver selezionato e modificato ogni input e riprovi"
        );
        setError(true);
      }
    });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setGarbageDay({ ...garbageDay, [name]: value });
  }
  function handleDropdownChange(event, data) {
    setGarbageDay({ ...garbageDay, ["giorno"]: data.value });
  }

  return (
    <Fragment>
      <Divider />
      <Form onSubmit={handleSubmit}>
        <Dropdown
          name="giorno"
          button
          basic
          floating
          options={options}
          defaultValue="lunedì"
          style={{ marginBottom: "5px" }}
          onChange={handleDropdownChange}
        />
        <Form.Input
          name="tipo"
          inline
          label="Tipo:"
          placeholder="Organico"
          onChange={handleInputChange}
        />
        <TextField
          id="ora_inizio"
          label="Da"
          type="time"
          defaultValue="00:00"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          onChange={handleInputChange}
          name="ora_inizio"
        />
        <TextField
          id="ora_fine"
          label="A"
          type="time"
          defaultValue="00:00"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          onChange={handleInputChange}
          name="ora_fine"
        />
        <br />
        <br />

        <Button type="submit">Submit</Button>
      </Form>
      {error && (
        <Fragment>
          <Divider />
          <Segment>
            <p>{errorMessage}</p>
          </Segment>
        </Fragment>
      )}
    </Fragment>
  );
};
