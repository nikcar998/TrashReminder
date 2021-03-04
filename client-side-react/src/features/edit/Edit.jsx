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
import { CreateForm } from "./CreateForm";
import { DeleteForm } from "./DeleteForm";

export const Edit = () => {
  const [createOrDelete, setCreateOrDelete] = useState(true);

  return (
    <Fragment>
      <Segment>
        <Header as="h3">Modifica i tuoi orari settimanali!</Header>
      </Segment>
      <Segment>
        <Form>
          <Form.Group inline>
            <label>Azione</label>
            <Form.Radio
              label="Crea"
              value="md"
              onChange={() => {
                setCreateOrDelete(true);
              }}
              checked={createOrDelete}
            />
            <Form.Radio
              label="Cancella"
              value="md"
              // checked={value === 'md'}
              onChange={() => {
                setCreateOrDelete(false);
              }}
              checked={!createOrDelete}
            />
          </Form.Group>
        </Form>
        {createOrDelete ? <CreateForm /> : <DeleteForm />}
      </Segment>
    </Fragment>
  );
};
