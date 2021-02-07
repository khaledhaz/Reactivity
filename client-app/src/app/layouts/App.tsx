import React, { useState, useEffect, Fragment } from "react";
import { Container } from "semantic-ui-react";
import "./index.css";
import axios from "axios";
import { IActivity } from "../models/activity";
import { NavBar } from "./../../features/nav/NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(
    null
  );
  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.filter((x) => x.id === id)[0]);
    setEditMode(false);
  };
  const [EditMode, setEditMode] = useState(false);
  const HandleEditMode = (x: boolean) => {
    setEditMode(x);
  };
  const HandleOpenCreate = () => {
    setSelectedActivity(null);
    setEditMode(true);
  };
  const HandleDeleteActivity = (id: string) => {
    setActivities([...activities.filter((a) => a.id !== id)]);
  };
  const handleCreateActivity = (activity: IActivity) => {
    setActivities([...activities, activity]);
    setSelectedActivity(activity);
    setEditMode(false);
  };
  const handleEditActivity = (activity: IActivity) => {
    setActivities([
      ...activities.filter((a) => a.id !== activity.id),
      activity,
    ]);
    setSelectedActivity(activity);
    setEditMode(false);
  };

  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        let activities = [];
        response.data.forEach((activity) => {
          activity.date = activity.date.split(".")[0];
          activities.push(activity);
        });
        setActivities(activities);
      });
  }, []);

  return (
    <Fragment>
      <NavBar openCreate={HandleOpenCreate} />
      <Container style={{ marginTop: "6em" }}>
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectActivity}
          selectedActivity={selectedActivity}
          EditMode={EditMode}
          setEditMode={HandleEditMode}
          createActivity={handleCreateActivity}
          editActivity={handleEditActivity}
          deleteActivity={HandleDeleteActivity}
        />
      </Container>
    </Fragment>
  );
};

export default App;
