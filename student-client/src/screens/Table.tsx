import React from 'react'
import {rows, columns} from "../data/Data"
import { Teknologier } from '../data/Data2';

import {
    DataGrid
} from "@material-ui/data-grid";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';



const Table = () => {
   const handleClick = () => {
    
  }
  
    return (

    <div style={{display:"block", height: 400, minWidth: "450px", width:"960px", marginLeft:"20%", marginRight:"50%"  }}>



      <DataGrid
        columns={ [
          { field: "company",   width: 150 },
          { field: "email",    width: 180 },
          { field: "utbildningar",     width: 320 },
          { field: "hemsida",     width: 320, renderCell: (cellValue) =>       {
            return <a  href={cellValue.row.hemsida} target="_blank" rel="noreferrer"
            >{cellValue.row.hemsida}</a>
          }},
          {field: "favoriter", width:140, renderCell:(cellValue) => {

              if (cellValue.row.favoriter) {
                return <StarBorderOutlinedIcon  >a</StarBorderOutlinedIcon>;
              } else {
                return <StarOutlinedIcon>b</StarOutlinedIcon>;
              }
          }}

        ]}
        
        rows={rows}
        pageSize={15}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};


export default Table
