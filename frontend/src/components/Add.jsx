import { Button, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = () => {
  const [a, seta] = useState("Welcome")
  const [sh, setsh] = useState(true)
  const [nsh, setnsh] = useState(false)

  const [detail, setdetail] = useState({
    Name: "",
    Age: "",
    Dept: "",
    Salary: ""
  })

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.state !== null) {
      setdetail({
        Name: location.state.v.Name,
        Age: location.state.v.Age,
        Dept: location.state.v.Dept,
        Salary: location.state.v.Salary,
        _id: location.state.v._id // capture id for update
      })
    }
  }, [])

  const handleinp = (e) => {
    setdetail({ ...detail, [e.target.name]: e.target.value })
  }

  const submitHandler = () => {
    if (detail._id) {
      axios.put(`http://localhost:3000/update/${detail._id}`, detail)
        .then((res) => {
          alert("Updated Successfully!")
          navigate("/view")
        })
        .catch((err) => console.log(err))
    } else {
      axios.post("http://localhost:3000/add", detail)
        .then((res) => {
          seta("Thank you!")
          setsh(false)
          setnsh(true)
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div>
      <br /><br /><br />
      <h1>{a}</h1>
      {sh && <TextField label="Name" name='Name' value={detail.Name} variant="outlined" onChange={handleinp} />}
      <br /><br />
      {sh && <TextField label="Age" name='Age' value={detail.Age} variant="outlined" onChange={handleinp} />}
      <br /><br />
      {sh && <TextField label="Department" name='Dept' value={detail.Dept} variant="outlined" onChange={handleinp} />}
      <br /><br />
      {sh && <TextField label="Salary" name='Salary' value={detail.Salary} variant="outlined" onChange={handleinp} />}
      <br /><br />
      {sh && <Button variant='contained' onClick={submitHandler}>{detail._id ? "Update" : "Submit"}</Button>}
      <br /><br />
      {nsh && <a href='./add'><b>Submit another response</b></a>}
    </div>
  )
}

export default Add
