import Converter from "./Converter";
import { Row, Col } from "antd";
import { ConfigProvider } from "antd";
import "./App.less";

function App() {
  return (
    <div style={{ paddingTop: "5vmax" }} className="App">
      <ConfigProvider direction="rtl">
        <Row justify="center">
          <Col span={20}>
            <h1 style={{ color: "white", fontSize: "2.5rem" }}>
              <span style={{ fontSize: "2rem" }} role="img" aria-label="link">
                🔗 &nbsp;
              </span>
              حوّل اي رابط الى رمز QR !
            </h1>
            <Converter></Converter>
          </Col>
        </Row>
      </ConfigProvider>
    </div>
  );
}

export default App;
