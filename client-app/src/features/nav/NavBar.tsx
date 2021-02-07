import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

interface IProps {
  openCreate: () => void;
}

export const NavBar: React.FC<IProps> = ({ openCreate }) => {
  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item header>
            <img
              src="/assets/logo.png"
              alt="logo"
              style={{ marginRight: "10px" }}
            />
            Reactivities
          </Menu.Item>

          <Menu.Item name="Activities" />
          <Menu.Item>
            <Button onClick={openCreate} positive content="Create Activity" />
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};
