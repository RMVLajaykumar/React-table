import React from "react";
import "./Filter.css";

const Filter = (props) => {
  const options = props.dataList
    .filter(
      (key) =>
        key !== "senderAccount" &&
        key !== "receiverAccount" &&
        key !== "transactionType"
    )
    .map((key) => <option key={key}>{key}</option>);

  const search = () => {
    const fromValue = document.querySelector("input[name='from']").value;
    const toValue = document.querySelector("input[name='to']").value;
    const sortByValue = document.querySelector("select[name='sortBy']").value;
    const directionValue = document.querySelector("select[name='direction']").value;

    const setDirection = props.setDirection;
    if (directionValue !== "Direction") {
      setDirection(directionValue);
    }
    const setSortBy = props.setSortBy;
    if (sortByValue !== "Sort By") {
      setSortBy(sortByValue);
    }
    const setFromDate = props.setFromDate;
    setFromDate(fromValue);
    const setToDate = props.setToDate;
    setToDate(toValue);
  };

  const reset = () => {
    document.querySelector("input[name='from']").value = "";
    document.querySelector("input[name='to']").value = "";
    document.querySelector("select[name='sortBy']").value = "Sort By";
    document.querySelector("select[name='direction']").value = "Direction";
  };

  return (
    <div className="filter-container">
      <div className="input-container">
        <label>From Date:</label>
        <input type="date" name="from" />
      </div>
      <div className="input-container">
        <label>To Date:</label>
        <input type="date" name="to" />
      </div>
      <div className="input-container">
        <select name="sortBy">
          <option selected>Sort By</option>
          {options}
        </select>
      </div>
      <div className="input-container">
        <select name="direction">
          <option selected>Direction</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className="input-container">
        <button type="button" onClick={search}>
          Search
        </button>
      </div>
      <div className="input-container">
        <button type="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filter;
