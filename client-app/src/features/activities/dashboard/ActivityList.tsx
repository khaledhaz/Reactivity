import React from "react";

import { Button, Item, Label, Segment } from "semantic-ui-react";
import { IActivity } from "./../../../app/models/activity";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import ActivityStore from "../../../app/stores/activityStore";
import { Link } from "react-router-dom";

interface IProps {
  activity: IActivity;
}
const ActivityList: React.FC<IProps> = ({ activity }) => {
  const activityStore = useContext(ActivityStore);

  return (
    <Segment clearing>
      <Item.Group divided>
        <Item>
          <Item.Content>
            <Item.Header as="a">{activity.title}</Item.Header>
            <Item.Description>
              <div>{activity.date}</div>
            </Item.Description>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <div>{activity.description}</div>
              <div>
                {activity.city}, {activity.venue}
              </div>
            </Item.Description>
            <Item.Extra>
              <Button
                as={Link}
                to={`/activities/${activity.id}`}
                floated="right"
                content="View"
                color="blue"
              />
              <Button
                loading={
                  activityStore.target === activity.id &&
                  activityStore.submitting
                }
                name={activity.id}
                floated="right"
                content="Delete"
                onClick={(e) => activityStore.deleteActivity(e, activity.id)}
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
export default observer(ActivityList);
