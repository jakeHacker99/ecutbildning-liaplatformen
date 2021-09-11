import React, { useState } from "react";
import { rows, columns, Teknologier } from "../data/Data";
import "../App.css";



import { DataGrid } from "@material-ui/data-grid";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import { Button } from "@material-ui/core";
import { useSnackbar } from "notistack";

const Table = () => {


  const { enqueueSnackbar } = useSnackbar();
  const inputRef = React.useRef(null)

    const handleClickVariant = (variant: any) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('Copied to clipboard', { variant });
  };


  const [mail, setMail] = useState("");
  const [websiteLink, setWebsiteLink] = useState("Jakobs.se");

  return (
    <div
      style={{
        display: "block",
        height: 400,
        minWidth: "450px",
        width: "960px",
        marginLeft: "20%",
        marginRight: "50%",
        paddingTop: "100px",
      }}
    >
      <DataGrid
        columns={[
          { field: "Företag", width: 150 },
          { field: "Kontakt", width: 180 },
          { field: "Utbildningar", width: 320 },
          {
            field: "Hemsida",
            width: 320,
            renderCell: (cellValue) => {
              return (
                <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setWebsiteLink(cellValue.row.Hemsida);
                    window.navigator.clipboard.writeText(websiteLink);
                    // @ts-ignore
                    inputRef.current.click();
                  }}
                >


                  {cellValue.row.Hemsida}
                </Button>
                <a ref={inputRef} className="custom-link" onClick={handleClickVariant('info')}> </a>

                </>
              );
            },
          },
          {
            field: "favoriter",
            width: 140,
            renderCell: (cellValue) => {
              if (cellValue.row.favoriter) {
                return <StarBorderOutlinedIcon  >a</StarBorderOutlinedIcon>;
              } else {
                return <StarOutlinedIcon>b</StarOutlinedIcon>;
              }
            },
          },
        ]}
        rows={rows}
        pageSize={15}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default Table;
