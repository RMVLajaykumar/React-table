import React from 'react'
import axios from "axios";
import Table from "../sharedComponents/Table/Table";
import { useEffect } from 'react';
import { useState } from 'react';

const Transaction =  () => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [sortBy, setSortBy] = useState("id");
  const [direction, setDirection] = useState("asc");
  const handleSubmit = async () => {
    const response = await axios.get(`http://localhost:8082/api/auth/admin/transactions`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("auth")}` },
      params: {page:page,size:size,from:fromDate,to:toDate,sortBy:sortBy,direction:direction}
    });
    setData(response.data);
  };
  useEffect(()=>{
    handleSubmit();
  },[page,size,fromDate,toDate,sortBy,direction])
  return (
    <div>
      <Table data={data} setPage={setPage} setDirection={setDirection} setFromDate={setFromDate} setSize={setSize} setSortBy={setSortBy} setToDate={setToDate} />
    </div>
  );
};
 
export default  Transaction;