import React, { Fragment, useState } from "react";
import {
  Form,
  Segment,
  Header,
  Button,
} from "semantic-ui-react";
import { CreateForm } from "./CreateForm";
import { DeleteForm } from "./DeleteForm";
import {useHistory} from 'react-router-dom'


//this component will let the user choose to see the "CreateForm" component or the "DeleteForm" component
export const Edit = () => {
  const history = useHistory();

  const [createOrDelete, setCreateOrDelete] = useState(true);

  function backHome(){
    history.push('/');
  }

  return (
    <Fragment>
      <Segment>
      <Button icon="x" size="mini" floated='left' onClick={backHome}/>
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
