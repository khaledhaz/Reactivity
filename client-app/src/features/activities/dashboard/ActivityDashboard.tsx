import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Grid, List } from "semantic-ui-react";
import ActivityStore from "../../../app/stores/activityStore";

import ActivityList from "./ActivityList";

const ActivityDashboard: React.FC = () => {
  const activityStore = useContext(ActivityStore);

  return (
    <Grid>
      <Grid.Column width={10}>
        <List>
          {activityStore.activitiesByDate.map((activity) => (
            <ActivityList key={activity.id} activity={activity} />
          ))}
        </List>
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Activity Filters</h2>
      </Grid.Column>
    </Grid>
  );
};
export default observer(ActivityDashboard);
