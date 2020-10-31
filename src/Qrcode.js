import React, { Component } from "react";
import QRCode from "qrcode.react";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import FadeIn from "react-fade-in";

export default class Qrcode extends Component {
  constructor(props) {
    super(props);
    this.state = { showQR: this.props.showQR };
  }

  render() {
    const onClick = () => {
      const canvas = document.getElementById("123456");
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "QRcode.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();

    };

    const { showQR } = this.state;

    return (
      <FadeIn>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {showQR && (
            <QRCode
              id="123456"
              size={300}
              style={{
                marginTop: "3rem",
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
                borderRadius: "2px",
              }}
              value={this.props.value}
            />
          )}{" "}
          {showQR && (
            <Button
              onClick={onClick}
              style={{ width: "300px", marginTop: "0.5rem" }}
              type="primary"
              size="large"
            >
              تحميل <DownloadOutlined />
            </Button>
          )}
        </div>
      </FadeIn>
    );
  }
}
