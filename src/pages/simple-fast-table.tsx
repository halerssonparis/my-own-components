import { useState, useEffect } from "react";
import styles from "../styles/simple-fast-table.module.css";
import { v4 as uuid } from "uuid";

const state = [
  { id: 1, name: "Pedro - p1 - " },
  { id: 2, name: "Amanda - p1 - " },
  { id: 3, name: "John - p1 - " },
  { id: 4, name: "Zuan - p1 - " },
  { id: 5, name: "Tadaos - p1 - " },
  { id: 6, name: "Minerva - p1 - " },
  { id: 7, name: "Amabile - p1 - " },
  { id: 1, name: "Pedro - p1 - " },
  { id: 2, name: "Amanda - p1 - " },
  { id: 3, name: "John - p1 - " },
  { id: 4, name: "Zuan - p2 - " },
  { id: 5, name: "Tadaos - p2 - " },
  { id: 6, name: "Minerva - p2 - " },
  { id: 7, name: "Amabile - p2 - " },
  { id: 1, name: "Pedro - p2 - " },
  { id: 2, name: "Amanda - p2 - " },
  { id: 3, name: "John - p2 - " },
  { id: 4, name: "Zuan - p2 - " },
  { id: 5, name: "Tadaos - p2 - " },
  { id: 6, name: "Minerva - p2 - " },
  { id: 7, name: "Amabile - p3 - " },
  { id: 1, name: "Pedro - p3 - " },
  { id: 2, name: "Amanda - p3 - " },
  { id: 3, name: "John - p3 - " },
  { id: 4, name: "Zuan - p3 - " },
  { id: 5, name: "Tadaos - p3 - " },
  { id: 6, name: "Minerva - p3 - " },
  { id: 7, name: "Amabile - p3 - ", age: 11},
];

const Table = () => {
  const [data, setData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [orderFlow, setOrderFlow] = useState("asc");

  function fetchHeadLabels() {
    let max = {};

    for (const value of data) {
      if (Object.keys(value).length > Object.keys(max).length) {
        max = value;
      }
    }

    return max;
  }

  function getNextFlow() {
    if (orderFlow === "asc") {
      setOrderFlow("desc");
      return "desc";
    } else if (orderFlow === "desc") {
      setOrderData(structuredClone(data));
      setOrderFlow("reset");
      return "reset";
    } else if (orderFlow == "reset") {
      setOrderFlow("asc");
      return "asc";
    }
  }

  function orderBy(key) {
    const current = getNextFlow();

    if (current === "reset") return;

    setOrderData(
      orderFlow === "asc"
        ? orderData.sort((a, b) => (a[key] > b[key] ? 0 : -1))
        : orderData.sort((a, b) => (a[key] < b[key] ? 0 : -1))
    );
  }

  function getHead() {
    return Object.keys(fetchHeadLabels()).map((key) => (
      <th className={styles.th} key={uuid()} onClick={() => orderBy(key)}>
        {key.toUpperCase()}{" "}
      </th>
    ));
  }

  function getBody(page, offset) {
    return orderData.slice(page, (page + 1) * offset).map((value) => {
      return (
        <tr className={styles.tr} key={uuid()}>
          {Object.keys(value).map((valueKey) => (
            <td className={styles.td} key={uuid()}>
              {value[valueKey]}
            </td>
          ))}
        </tr>
      );
    });
  }

  useEffect(() => {
    setData(state);
    setOrderData(structuredClone(state));
  }, []);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>{getHead()}</thead>
        <tbody>{getBody(0, 10)}</tbody>
      </table>
    </div>
  );
};

export default Table;
