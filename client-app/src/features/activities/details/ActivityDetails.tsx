import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
interface IProps {
  selectedActivity: IActivity;
  setEditMode: (EditMode: boolean) => void;
  selectActivity: (id: string) => void;
}

export const ActivityDetails: React.FC<IProps> = ({
  selectedActivity,
  setEditMode,
  selectActivity,
}) => {
  return (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${selectedActivity.category}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{selectedActivity.title}</Card.Header>
        <Card.Meta>{selectedActivity.date}</Card.Meta>
        <Card.Description>{selectedActivity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            basic
            color="blue"
            onClick={() => setEditMode(true)}
            content="Edit"
          />
          <Button
            basic
            color="grey"
            onClick={() => selectActivity(null)}
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};
