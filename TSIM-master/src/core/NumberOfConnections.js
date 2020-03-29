import React, { Component } from "react";
import styles from "./NumberOfConnections.css";
class NumberOfConnections extends Component {
  state = {};
  render() {
    return (
      <div className={styles.base}>
        <div
          className={styles.firstConnection}
          style={{
            background: `${this.props.data && this.props.data[0].image}`
          }}
        >
          {this.props.firstConnection}
        </div>
        <div
          className={styles.secondConnection}
          style={{
            background: `${this.props.data && this.props.data[1].image}`
          }}
        >
          {this.props.secondConnection}
        </div>

        <div className={styles.numberOfConnections}>
          {this.props.numberOfConnections > 2 ? "+" : ""}
          {this.props.numberOfConnections} Mutual Connections
        </div>
      </div>
    );
  }
}

export default NumberOfConnections;
