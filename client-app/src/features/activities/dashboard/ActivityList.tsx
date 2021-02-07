import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { IActivity } from "./../../../app/models/activity";

interface IProps {
  activity: IActivity;
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}
export const ActivityList: React.FC<IProps> = ({
  activity,
  selectActivity,
  deleteActivity,
}) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        <Item>
          <Item.Content>
            <Item.Header as="a">{activity.title}</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <div>{activity.description}</div>
              <div>
                {activity.city}, {activity.venue}
              </div>
            </Item.Description>
            <Item.Extra>
              <Button
                floated="right"
                content="View"
                onClick={() => selectActivity(activity.id)}
                color="blue"
              />
              <Button
                floated="right"
                content="Delete"
                onClick={() => deleteActivity(activity.id)}
                color="red"
              />
              <Label basic content={activity.category} />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};
