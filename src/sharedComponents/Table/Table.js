import React from "react";
import "./Table.css";
import Filter from "../Filter/Filter";
import Pagination from "../Pagination/Pagination";
import Dropdown from "../Pagination/DropDown";

const Table = (props) => {
  const { data, setPage, setDirection, setFromDate, setSize, setSortBy, setToDate } = props;

  const content = data.content;

  if (content && content.length > 0) {
    const tableHeaders = (
      <tr>
        {Object.keys(content[0]).map((key) => (
          <th key={key}>{key}</th>
        ))}
      </tr>
    );

    const optionsList = Object.keys(content[0]);

    const tableData = content.map((d) => (
      <tr key={d.id}>
        {Object.keys(d).map((k) => {
          if (k === "senderAccount" || k === "receiverAccount") {
            return <td key={k}>{d[k].accountNumber || "N/A"}</td>;
          } else {
            return <td key={k}>{d[k]}</td>;
          }
        })}
      </tr>
    ));

    return (
      <div className="block-container">
        <div className="transaction">
          <h2 >List Of Transactions</h2>
        </div>
        <div className="top">
          <Filter
            dataList={optionsList}
            setDirection={setDirection}
            setFromDate={setFromDate}
            setSize={setSize}
            setSortBy={setSortBy}
            setToDate={setToDate}
          />
        </div>
        <div className="bottom">
          <table className="table">
            <thead>{tableHeaders}</thead>
            <tbody>{tableData}</tbody>
          </table>
        </div>
        <div className="pagination-container">
          <Dropdown data={data} setSize={setSize} />
          <Pagination data={data} setPage={setPage} />
        </div>
      </div>
    );
  } else {
    return <p>No transactions found.</p>;
  }
};

export default Table;
