import React from "react";
import PageHeader from "../../layout/js/PageHeader";
import { Table } from "react-bootstrap";
import CSMainTbody from "./CSMainTbody";
import "../../constellation/scss/CSMain.scss";

const CSMain = () => {
  //행 개수 설정
  const rowCount = 24;

  //가상의 데이터 배열 생성
  const data = Array.from({ length: rowCount }, (_, index) => ({
    Title: index + 1,
    Date: `${index + 1}`,
  }));

  // //임시 데이터
  // const boardList = [
  //   {
  //     Title: "토성, 62개 위성 추가 발견을 통해 다시 '달의 왕' 등극",
  //     Date: "2023.05.15",
  //   },
  //   {
  //     Title: "태양계에서 달을 가장 많이 거느리고 있는 행성은?",
  //     Date: "2023.02.20",
  //   },
  //   {
  //     Title: "제임스 웹, 카멜레온 I 분자구름을 자세히 관측하다",
  //     Date: "2023.02.06",
  //   },
  //   {
  //     Title: "제임스 웹, NGC 346 산개성단을 자세히 관측하다",
  //     Date: "2023.02.01",
  //   },
  //   {
  //     Title: "망원경, 일상 속 '빛'으로 별을 본다",
  //     Date: "2023.01.12",
  //   },
  // ];

  return (
    <section className="News-board">
      <PageHeader />
      <Table board hover border={1} className="News-table" width="100%">
        <thead className="notic-news">
          <th>MainNews</th>
          <tr className="notic-table-body2">
            <td>임시데이터</td>
            <td>임시데이터</td>
          </tr>
        </thead>
      </Table>
      <Table board hover border={1} className="News-table" width="100%">
        <thead className="mini-table">
          <tr className="tbl">
            <th>Title</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((bo) => (
            <CSMainTbody board={bo} />
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default CSMain;
