import React from "react";
import { SyntheticEvent } from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { IActivity } from "./../../../app/models/activity";

interface IProps {
  activity: IActivity;
  selectActivity: (id: string) => void;
  deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
  submitting: boolean;
  target: string;
}
export const ActivityList: React.FC<IProps> = ({
  activity,
  selectActivity,
  deleteActivity,
  submitting,
  target,
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
                loading={target === activity.id && submitting}
                name={activity.id}
                floated="right"
                content="Delete"
                onClick={(e) => deleteActivity(e, activity.id)}
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
