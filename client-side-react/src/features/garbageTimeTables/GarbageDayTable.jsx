import React, { Fragment, useEffect, useState } from "react";
import { Segment, Button, Header, List } from "semantic-ui-react";
import agent from "../../app/api/agent";
import { Link } from "react-router-dom";

//this component presents all the garbageDays created from the user
export const GarbageDayTable = () => {
  const [garbages, setGarbages] = useState([]);

  const weekDays = [
    "lunedì",
    "martedì",
    "mercoledì",
    "giovedì",
    "venerdì",
    "sabato",
    "domenica",
  ];

  function getGarbage() {
    agent.TrashPicking.list().then((resp) => {
      console.log(resp);
      setGarbages(resp);
    });
  }
  useEffect(() => {
    getGarbage();
  }, []);

  return (
    <Fragment>
      <Segment>
        <Header as="h2">Week</Header>
      </Segment>
      <Segment.Group style={{ overflow: "auto", maxHeight: 400 }}>
        <Segment>
          <List align="start" bulleted>
            {weekDays.map((day) => (
              <List.Item key={day}>
                <Header as="h4" style={{ textTransform: "capitalize" }}>
                  {day}:
                </Header>
                {garbages.map((garbage) => {
                  if (garbage.giorno === day) {
                    return (
                      <List.List key={garbage.id}>
                        <List.Item>
                          {garbage.tipo}: dalle {garbage.ora_inizio} alle{" "}
                          {garbage.ora_fine}{" "}
                        </List.Item>
                      </List.List>
                    );
                  }else{
                    return null;
                  }
                })}
              </List.Item>
            ))}
          </List>
          <Button as={Link} to="/edit" color="green">
            Edit
          </Button>
        </Segment>
      </Segment.Group>
    </Fragment>
  );
};
