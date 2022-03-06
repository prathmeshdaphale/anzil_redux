import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const AssnTable = () => {
    const state = useSelector(state => state?.NamelistReducer)
useEffect(()=>{

},[state?.list])
  return (
    <center>
         <div style={{marginLeft:'150px',marginRight:'150px'}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sr. NO.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {state?.list.map((item, index) => {
                        return (<tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.firstText}</td>
                            <td>{item.secondText}</td>
                        </tr>

                        )
                    })}

                </tbody>
            </Table>
            </div>
    </center>
  )
}

export default AssnTable