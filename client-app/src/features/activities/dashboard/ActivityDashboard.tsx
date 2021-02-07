import React from "react";
import { Grid, List } from "semantic-ui-react";
import { ActivityDetails } from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import { IActivity } from "./../../../app/models/activity";
import { ActivityList } from "./ActivityList";

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  selectedActivity: IActivity | null;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
  EditMode: boolean;
  setEditMode: (EditMode: boolean) => void;
  deleteActivity: (id: string) => void;
}

const ActivityDashboard: React.FC<IProps> = ({
  activities,
  selectActivity,
  selectedActivity,
  setEditMode,
  EditMode,
  createActivity,
  editActivity,
  deleteActivity,
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <List>
          {activities.map((activity) => (
            <ActivityList
              key={activity.id}
              activity={activity}
              selectActivity={selectActivity}
              deleteActivity={deleteActivity}
            />
          ))}
        </List>
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedActivity && !EditMode && (
          <ActivityDetails
            setEditMode={setEditMode}
            selectedActivity={selectedActivity}
            selectActivity={selectActivity}
          />
        )}
        {EditMode && (
          <ActivityForm
            key={selectedActivity.id}
            setEditMode={setEditMode}
            activity={selectedActivity!}
            createActivity={createActivity}
            editActivity={editActivity}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};
export default ActivityDashboard;
