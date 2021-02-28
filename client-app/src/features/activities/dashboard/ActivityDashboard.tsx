import React, { SyntheticEvent } from "react";
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
  deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
  submitting: boolean;
  target: string;
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
  submitting,
  target,
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
              submitting={submitting}
              target={target}
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
            key={(selectedActivity && selectedActivity.id) || 0}
            setEditMode={setEditMode}
            activity={selectedActivity!}
            createActivity={createActivity}
            editActivity={editActivity}
            submitting={submitting}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};
export default ActivityDashboard;
