import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "firstName", label: "Date", minWidth: 100 },
  {
    id: "userName",
    label: "User",
    minWidth: 170,
    align: "right",
    //format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "tellus",
    label: "Reply",
    minWidth: 170,
    align: "right",
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "hearingdiary",
    label: "Delete",
    minWidth: 170,
    align: "right",
    //format: (value) => value.toFixed(2),
  },
];


//console.log(rows, "default data");
export default function MessageTable({ usersList, chatReply, getHearingAns }) {
  // const rows = usersList;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState(usersList);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "aliceblue",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {usersList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column, index) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={index} align={column.align}>
                          {column.id == "id" ? (
                            index + 1
                          ) : column.id == "tellus" ? (
                            <div
                              style={{ fontWeight: "500", cursor: "pointer" }}
                              onClick={() =>
                                chatReply(row.userName, row.userId)
                              }
                            >
                              Reply
                            </div>
                          ) : column.id == "hearingdiary" ? (
                            <div
                              style={{ fontWeight: "500", cursor: "pointer" }}
                              onClick={() =>
                                getHearingAns(row.userName, row.userId)
                              }
                            >
                              DELETE
                            </div>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={usersList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
