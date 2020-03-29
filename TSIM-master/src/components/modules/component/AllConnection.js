import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";
import ConnectionRequest from "../component/ConnectionRequests";

export default class AllConnection extends Component {
  render() {
    return (
      <BottomSlideModal>
        <div
          style={{
            width: "30vw",
            height: "100%",
            background: "#fff",
            borderRadius: "7px"
          }}
        >
          <ConnectionRequest />
        </div>
      </BottomSlideModal>
    );
  }
}
