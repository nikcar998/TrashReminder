import React, { Fragment, useState } from 'react'
import { Form, Segment, Header, Input, Dropdown, Button, Divider } from 'semantic-ui-react'
export const Edit = () => {
    const [createOrDelete, setCreateOrDelete] = useState(true);

    const options = [
        { key: 'lunedì', text: 'Lunedì', value: 'lunedì' },
        { key: 'martedì', text: 'Martedì', value: 'martedì' },
        { key: 'mercoledì', text: 'Mercoledì', value: 'mercoledì' },
        { key: 'giovedì', text: 'Giovedì', value: 'giovedì' },
        { key: 'venerdì', text: 'Venerdì', value: 'venerdì' },
        { key: 'sabato', text: 'Sabato', value: 'sabato' },
        { key: 'domenica', text: 'Domenica', value: 'domenica' },
    ]



    return (
        <Fragment >
            <Segment>
                <Header as="h3">Modifica i tuoi orari settimanali!</Header>
            </Segment>
            <Segment>
                <Form>
                    <Form.Group inline>
                        <label>Azione</label>
                        <Form.Radio
                            label='Crea'
                            value='md'
                            onChange={() => { setCreateOrDelete(true) }}
                            checked={createOrDelete}
                        />
                        <Form.Radio
                            label='Cancella'
                            value='md'
                            // checked={value === 'md'}
                            onChange={() => { setCreateOrDelete(false) }}
                            checked={!createOrDelete}
                        />
                    </Form.Group>
                    <Form.Button>Submit</Form.Button>
                </Form>
                {createOrDelete &&
                    <Fragment>
                        <Divider />
                        <Form >
                            <Form.Input inline label='Tipo:' placeholder='Organico' />
                            <Form.Input inline label='Da:' placeholder='00:00' />
                            <Form.Input inline label='A:' placeholder='00:00' />
                            <Dropdown button basic floating options={options} defaultValue='lunedì' />
                            <br /><br />

                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Fragment>

                }
            </Segment>
        </Fragment>
    )
}
