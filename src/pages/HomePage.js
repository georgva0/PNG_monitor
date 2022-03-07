import React from "react";
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";

const HomePage = () => {
  return (
    <Container className="content-container">
      <>
        <Row>
          <Col md="10">
            <h3 className="mt-5">
              BBC World Service articles with increased traffic{" "}
            </h3>
            <p className="mt-4">
              This application uses the{" "}
              <a
                href="https://docs.chartbeat.com/cbp/api/real-time-apis"
                className="text-decoration-none"
              >
                Chartbeat API
              </a>{" "}
              and{" "}
              <a
                href="https://translate.google.com/"
                className="text-decoration-none"
              >
                Google Translate
              </a>{" "}
              to identify articles accessed by an increasing number of visitors.
            </p>
            <p>
              Use the menu to view selections of articles popular in various{" "}
              <a
                href="https://www.bbc.co.uk/ws/languages"
                className="text-decoration-none"
              >
                BBC World Service
              </a>{" "}
              regions.
            </p>
          </Col>
        </Row>

        <Row md="4" sm="2" xs="1" className="mt-3">
          <Col>
            {" "}
            <Card className="border-0">
              <a href="#" className="stretched-link">
                <CardImg
                  alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  top
                  width="100%"
                />
              </a>

              <CardBody className="mx-0 px-0">
                <CardTitle tag="h5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Vivamus ac tristique dolor, at laoreet ante. Proin a risus at
                  risus accumsan condimentum.
                </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card className="border-0">
              <a href="#" className="stretched-link">
                <CardImg
                  alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  top
                  width="100%"
                />
              </a>
              <CardBody className="mx-0 px-0">
                <CardTitle tag="h5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Vivamus ac tristique dolor, at laoreet ante. Proin a risus at
                  risus accumsan condimentum. Aliquam id aliquam enim. Donec
                  laoreet dui fringilla.
                </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card className="border-0">
              <CardImg
                alt="Card image cap"
                src="https://picsum.photos/318/180"
                top
                width="100%"
              />
              <CardBody className="mx-0 px-0">
                <CardTitle tag="h5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Vivamus ac tristique dolor, at laoreet ante. Proin a risus at
                  risus accumsan condimentum. Aliquam id aliquam enim. Donec
                  laoreet dui fringilla.
                </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card className="border-0">
              <CardImg
                alt="Card image cap"
                src="https://picsum.photos/318/180"
                top
                width="100%"
              />
              <CardBody className="mx-0 px-0">
                <CardTitle tag="h5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Vivamus ac tristique dolor, at laoreet ante. Proin a risus at
                  risus accumsan condimentum. Aliquam id aliquam enim. Donec
                  laoreet dui fringilla.
                </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card className="border-0">
              <CardImg
                alt="Card image cap"
                src="https://picsum.photos/318/180"
                top
                width="100%"
              />
              <CardBody className="mx-0 px-0">
                <CardTitle tag="h5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Vivamus ac tristique dolor, at laoreet ante. Proin a risus at
                  risus accumsan condimentum. Aliquam id aliquam enim. Donec
                  laoreet dui fringilla.
                </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card className="border-0">
              <CardImg
                alt="Card image cap"
                src="https://picsum.photos/318/180"
                top
                width="100%"
              />
              <CardBody className="mx-0 px-0">
                <CardTitle tag="h5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Vivamus ac tristique dolor, at laoreet ante. Proin a risus at
                  risus accumsan condimentum. Aliquam id aliquam enim. Donec
                  laoreet dui fringilla.
                </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card className="border-0">
              <CardImg
                alt="Card image cap"
                src="https://picsum.photos/318/180"
                top
                width="100%"
              />
              <CardBody className="mx-0 px-0">
                <CardTitle tag="h5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Vivamus ac tristique dolor, at laoreet ante. Proin a risus at
                  risus accumsan condimentum. Aliquam id aliquam enim. Donec
                  laoreet dui fringilla.
                </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card className="border-0">
              <CardImg
                alt="Card image cap"
                src="https://picsum.photos/318/180"
                top
                width="100%"
              />
              <CardBody className="mx-0 px-0">
                <CardTitle tag="h5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Vivamus ac tristique dolor, at laoreet ante. Proin a risus at
                  risus accumsan condimentum. Aliquam id aliquam enim. Donec
                  laoreet dui fringilla.
                </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    </Container>
  );
};

export default HomePage;
