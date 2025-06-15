import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const View = () => {
  var [v, setv] = useState([])
  var nav = useNavigate();

  var upd=((v)=>{
    nav("/add",{state:{v}})
  })

  axios.get("http://localhost:3000/view")
    .then((res) => {
      setv(res.data)
    })
    .catch((err) => {
      console.log(err)
    })

  var del = (id) => {
    axios.delete(`http://localhost:3000/delete/${id}`)
  }

  return (
    <div>
      <br /><br /><br />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell >Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Salary</TableCell>
            </TableRow>
          </TableHead>
          {v.map((val,i) => {
            return (
              <TableBody key={i}>
                <TableRow>
                  <TableCell>{val.Name}</TableCell>
                  <TableCell>{val.Age}</TableCell>
                  <TableCell>{val.Dept}</TableCell>
                  <TableCell>{val.Salary}</TableCell>
                  <TableCell><Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => {
                    del(val._id)
                  }}>Delete</Button> <Button variant="outlined" startIcon={<EditIcon />} onClick={()=>upd(val)}>Update</Button></TableCell>

                </TableRow>
              </TableBody>
            )
          })}
        </Table>
      </TableContainer>
    </div>

  )
}

export default View