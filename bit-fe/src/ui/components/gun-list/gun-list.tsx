import React from "react";
import { Col, Container, Row } from "reactstrap";
import { GunCard } from "../../components/gun-card/gun-card";
import { Gun } from "../../../core/types/models";

interface GunListProps {
  guns: Gun[];
}
export class GunList extends React.Component<GunListProps> {
  constructor(props: GunListProps) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Row>
          {this.props.guns.length
            ? this.props.guns.map((gun: Gun) => (
                <Col xs="12" md="4" lg="3">
                  <GunCard name={gun.name} id={gun.id}></GunCard>
                </Col>
              ))
            : "no guns found"}
        </Row>
      </Container>
    );
  }
}
