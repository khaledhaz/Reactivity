import React, { useContext } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { observer } from "mobx-react-lite";
import ActivityStore from "../../../app/stores/activityStore";
import { LoadingComponent } from "../../../app/layouts/LoadingComponent";

const ActivityDashboard: React.FC = () => {
  const activityStore = useContext(ActivityStore);

  if (activityStore.loadingInitial) {
    console.log("from dash   " + activityStore.loadingInitial);
    return <LoadingComponent content="Loading activities..." />;
  } else
    return (
      <Grid>
        <Grid.Column width={10}>
          <ActivityList />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Activity filters</h2>
        </Grid.Column>
      </Grid>
    );
};

export default observer(ActivityDashboard);
