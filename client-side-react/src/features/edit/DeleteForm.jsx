import React, { Fragment, useEffect, useState } from "react";
import {
  Segment,
  Header,
  Dropdown,
  Button,
  Divider,
  List,
} from "semantic-ui-react";
import agent from "../../app/api/agent";
import { daysArray } from "../../app/common/daysArray";

//This form is shown if someone clicks on the "Cancella" option in the "Edit" component
export const DeleteForm = () => {
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
        (garbage) => garbage.giorno === currentDayGarbage
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
        options={daysArray}
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
                <List.List key={garbage.id}>
                  <List.Item>
                    {garbage.tipo}: dalle {garbage.ora_inizio} alle{" "}
                    {garbage.ora_fine}{" "}
                    <Button
                      icon="trash"
                      color="red"
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
