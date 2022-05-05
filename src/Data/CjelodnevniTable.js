import React from 'react';
import "../styles.css";

const BasicTable = ({data}) => {
  return (
    <div className="overflow-x-scroll md:overflow-hidden">
        {data}
    </div>
  );
}

export default BasicTable;