import React, { Fragment, useEffect, useState } from "react";
import {
  Form,
  Segment,
  Header,
  Input,
  Dropdown,
  Button,
  Divider,
  List,
} from "semantic-ui-react";
import { TextField } from "@material-ui/core";
import agent from "../../app/api/agent";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const DeleteForm = () => {
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
  const [currentDayGarbage, setCurrentDayGarbage] = useState("lunedì");
  const [garbageDay, setGarbageDay] = useState([]);

  function deleteGarbageDay(id) {
    agent.TrashPicking.delete(id).then((resp) => {
      console.log(resp);
      if (currentDayGarbage !== "lunedì") {
        setCurrentDayGarbage("lunedì");
      } else {
        setCurrentDayGarbage("martedì");
      }
    });
  }

  function getCurrentDayGarbage() {
    agent.TrashPicking.list().then((resp) => {
      const garbageValuesOfTheDay = resp.filter(
        (garbage) => garbage.giorno == currentDayGarbage
      );
      setGarbageDay(garbageValuesOfTheDay);
      console.log(garbageDay);
    });
  }

  function handleDropdownChange(event, data) {
    setCurrentDayGarbage(data.value);
  }

  useEffect(() => {
    getCurrentDayGarbage();
  }, [currentDayGarbage]);

  return (
    <Fragment>
      <Divider />
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
      <Segment style={{ overflow: "auto", maxHeight: 200 }}>
        <List align="start" bulleted>
          <List.Item>
            <Header as="h4" style={{ textTransform: "capitalize" }}>
              {currentDayGarbage}:
            </Header>
            {garbageDay.map((garbage) => {
              return (
                <List.List>
                  <List.Item>
                    {garbage.tipo}: dalle {garbage.ora_inizio} alle{" "}
                    {garbage.ora_fine} {" "}
                    <Button
                      icon="trash"
                      color="red"
                      width="5"
                      size="mini"
                      onClick={() => deleteGarbageDay(garbage.id)}
                    />
                  </List.Item>
                </List.List>
              );
            })}
          </List.Item>
        </List>
      </Segment>
    </Fragment>
  );
};
