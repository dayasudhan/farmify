import React, { useState ,useRef , useEffect } from 'react'
import axios from 'axios';
import { Segment, Input, Form, Button ,Checkbox,TextArea,Modal } from 'semantic-ui-react';

const SegmentExampleNestedSegments = () => {
  const [showModal, setShowModal] = useState(false);
  const [responseText, setResponseText] = useState('');
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    landMark:"",
    city:"",
    item_name:"",
    item_year:"",
    item_price:"",
    item_place:"",
    billingInstructions:""
  });

  const handleInputChange = (event) => {
    console.log("event",event.target)
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleRadioInputChange = (name,value) => {
    console.log("handleRadioInputChange",name,value)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    console.log("name",name)
    event.preventDefault()
    console.log("formData",formData)
    axios.post('/leads', formData)
    .then(response => {
      console.log("response1",response);
      console.log("response2",response?.data?.insertedId);
      setTimeout(() => {
        setResponseText(`Customer Inserted Successfully With Id : ${response?.data?.insertedId}`); // Set the response text to be shown in the modal
        setShowModal(true); // Show the modal
      }, 1000); // Delay of 1 second
    })
    .catch(error => {
      console.error("error",error);
    });
  }
  const closeModal = () => {
    setShowModal(false);
    location.reload();
  };
  return (
  <Segment.Group>
    <Segment.Group horizontal>
      <Segment>
      <Segment textAlign='center'> <h3>Item Details</h3></Segment>
        <p></p>{' '}
        <Form ref={formRef} onSubmit={handleSubmit}>
        <Form.Field>
        <label>Item Details</label>
        <Input name="name" 
          focus placeholder="Item Name..."
          value={formData.item_name} 
          onChange={handleInputChange} />
        </Form.Field>
        <p></p>
        <Form.Field>
          <Input name="Manufacturing Year"
           focus placeholder="Item Year"
           value={formData.item_year} 
           onChange={handleInputChange} />
        </Form.Field>
        <p></p>
        <Form.Field>
          <Input name="Price"
          focus placeholder="Item Rate/Price..." 
          value={formData.item_price} 
          onChange={handleInputChange}
          />
        </Form.Field>
        <p></p>
        <Form.Field>
          <Input name="Place"
          focus placeholder="Item Place..." 
          value={formData.item_place} 
          onChange={handleInputChange}
          />
          </Form.Field>
        <p></p>
        <Form.Field>
          <Input name="address"
          focus placeholder="Address..." 
          value={formData.address} 
          onChange={handleInputChange}
          />
        </Form.Field>
        <p></p>
        <Form.Field>
        <label>Seller Details</label>
        <Input name="name" 
          focus placeholder="Name..."
          value={formData.name} 
          onChange={handleInputChange} />
        </Form.Field>
        <p></p>
        <Form.Field>
          <Input name="phone"
           focus placeholder="Phone Number"
           value={formData.phone} 
           onChange={handleInputChange} />
        </Form.Field>
        <p></p>
        <Form.Field>
          <Input name="landMark"
          focus placeholder="Land Mark..." 
          value={formData.landMark} 
          onChange={handleInputChange}
          />
        </Form.Field>
        <p></p>
        <Form.Field>
          <Input name="city"
          focus placeholder="Village/City..." 
          value={formData.city} 
          onChange={handleInputChange}
          />
          </Form.Field>
        <p></p>
        <Form.Field>
          <Input name="address"
          focus placeholder="Address..." 
          value={formData.address} 
          onChange={handleInputChange}
          />
        </Form.Field>
        <p></p>
      
          
     
        <Form.Field>
          <label>Item Details</label>
          <TextArea name='billingInstructions'
          rows={2} 
          placeholder='Describe...' 
          value={formData.billingInstructions} 
          onChange={handleInputChange}/>
        </Form.Field>
        <div style={{ display: 'flex' }}>
        
          <Button primary style={{ marginLeft: 'auto' }}>
            Submit
          </Button>
       
        </div>
        </Form>
        <Modal open={showModal} onClose={closeModal}>
        <Modal.Header>Response</Modal.Header>
        <Modal.Content>
          <p>{responseText}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={closeModal}>Close</Button>
        </Modal.Actions>
      </Modal>
      </Segment>
    </Segment.Group>
  </Segment.Group>
)};

export default SegmentExampleNestedSegments;
