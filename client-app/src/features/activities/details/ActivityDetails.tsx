import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Card, Image } from "semantic-ui-react";

import ActivityStore from "../../../app/stores/activityStore";
interface IProps {}

const ActivityDetails: React.FC<IProps> = () => {
  const activityStore = useContext(ActivityStore);
  const { selectedActivity: activity } = activityStore;
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
            basic
            color="blue"
            onClick={() =>
              activityStore.openEditForm(activityStore.selectedActivity!.id)
            }
            content="Edit"
          />
          <Button
            basic
            color="grey"
            onClick={() => (activityStore.selectedActivity = undefined)}
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};
export default observer(ActivityDetails);
