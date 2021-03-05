import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { Button, Card, Image } from "semantic-ui-react";
import { LoadingComponent } from "../../../app/layouts/LoadingComponent";

import ActivityStore from "../../../app/stores/activityStore";
import { Link } from "react-router-dom";

interface DetailParams {
  id: string;
}
const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history,
}) => {
  const activityStore = useContext(ActivityStore);
  const { activity, loadActivity } = activityStore;
  useEffect(() => {
    activityStore.loadActivity(match.params.id);
  }, [activityStore, loadActivity, match.params.id]);
  if (activityStore.loadingInitial || !activityStore.activity)
    return <LoadingComponent content="Loading activities..." />;
  return (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${activity!.category}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{activity!.title}</Card.Header>
        <Card.Meta>{activity!.date}</Card.Meta>
        <Card.Description>{activity!.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            as={Link}
            to={`/manage/${activity?.id}`}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            basic
            color="grey"
            onClick={() => history.push("/activities")}
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};
export default observer(ActivityDetails);
