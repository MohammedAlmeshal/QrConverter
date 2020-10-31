import React, { Component } from "react";
import { Input, Button } from "antd";

import Qrcode from "./Qrcode";

export default class Converter extends Component {
  state = { link: "", value: "", showQR: false };

  render() {
    const onChange = (e) => {
      this.setState({ link: e.target.value });
    };

    const onSubmit = () => {
      this.setState({ value: this.state.link, showQR: true });
    };

    return (
      <div>
        <Input.Group>
          <Input
            placeholder="ضع الرابط هنا"
            allowClear
            size="large"
            onChange={onChange}
            style={{ maxWidth: "1000px" }}
          />{" "}
          <br />
          <Button
            style={{
              width: "60%",
              maxWidth: "500px",
              height: "40px",
              marginTop: "1rem",
            }}
            onClick={onSubmit}
            type="primary"
            disabled={this.state.link == "" ? true : false}
          >
            <span style={{ fontSize: "18px" }}> حوّل</span>
          </Button>
        </Input.Group>
        {this.state.showQR ? <Qrcode value={this.state.value}></Qrcode> : null}
      </div>
    );
  }
}
