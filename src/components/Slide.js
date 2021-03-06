import React from "react";
import { Row, Col } from "reactstrap";

import Timer from "./Timer";
import Counter from "./Counter";
import BottomBar from "./BottomBar";

const Slide = ({
  titre,
  slug,
  description,
  image,
  url,
  kpis,
  html,
  timeout,
  buttonText,
  entries
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Row style={{ flex: "0 0 auto" }}>
        <Col sm={6}>
          <h1 className="display-4" style={{ lineHeight: 2 }}>
            {titre}
          </h1>
        </Col>
        <Col className="text-right" sm={6}>
          <Timer
            render={({ elapsed }) => (
              <Counter seconds={elapsed} timeout={timeout} />
            )}
          />
        </Col>
      </Row>
      <p
        style={{
          borderBottom: "1px solid #efefef",
          flex: "0 0 auto",
          marginBottom: 20,
          paddingBottom: 20
        }}
        className="h3"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      {(image || slug) && (
        <Row style={{ flex: "1 0 auto" }}>
          {image && (
            <Col sm={slug ? 6 : 12}
              className="image-appear"
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                display: "block"
              }}
            ></Col>
          )}
          {slug && (
            <Col sm={image ? 6 : 12} className="d-flex">
              <iframe
                id="carnets"
                className="flex-fill"
                title="Carnets de bord des produits"
                style={{ border: 0 }}
                src={`https://carnets.fabrique.social.gouv.fr/standup?team=${slug}`}
              ></iframe>
            </Col>
          )}
        </Row>
      )}
      {entries && (
        <ul className="h3" style={{ marginTop: 30, flex: "1 0 auto" }}>
          {entries.map(e => (
            <li
              key={e}
              style={{ margin: "30px 0" }}
              dangerouslySetInnerHTML={{ __html: e }}
            ></li>
          ))}
        </ul>
      )}
      {html && (
        <p
          className="h3"
          style={{ margin: "20px 0", flex: "1 0 auto" }}
          dangerouslySetInnerHTML={{ __html: html }}
        ></p>
      )}
      {!image && !html && !entries && (
        <div
          className="h1 text-center"
          style={{ flex: "1 0 auto", color: "#999", marginTop: 250 }}
        >
          En construction
        </div>
      )}
      {buttonText && (
        <BottomBar style={{ flex: "0 0 auto" }} buttonText={buttonText} />
      )}
    </div>
  );
};

export default Slide;
