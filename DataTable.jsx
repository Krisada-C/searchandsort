import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

const DataTable = ({ data , onDelete, onSearch}) => {
    const sRef = React.useRef() 
    const handleDelete = (index) => { 
    // console.log(`Delete`, index) 
    // data.splice(index,1) 
        onDelete(index)
    // console.table(data)
  } 

  const handleSearch = () => {
    const keyword = sRef.current.value
    onSearch(keyword)
  }
    return (
        <Container>
            <input type="text" placeholder="Search..." ref={sRef} />{' '} 
            <Button onClick={handleSearch}>Search</Button> 
            <Table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <i className='bi bi-trash3' onClick={() => handleDelete(index)}></i>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default DataTable;