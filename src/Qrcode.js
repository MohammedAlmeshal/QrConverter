import React, { Component } from "react";
import QRCode from "qrcode.react";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

export default class Qrcode extends Component {
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
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <QRCode
          id="123456"
          size={300}
          style={{
            marginTop: "5rem",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
            borderRadius: "2px",
          }}
          value={this.props.value}
        />{" "}
        <Button
          onClick={onClick}
          style={{ width: "300px", marginTop: "0.5rem" }}
          type="primary"
          size="large"
        >
          تحميل <DownloadOutlined />
        </Button>
      </div>
    );
  }
}
