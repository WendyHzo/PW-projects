import React from 'react'
import GridProduct from './GridProduct'
import { Row} from 'react-bootstrap';

const Productos=()=>{
    return(
        
        <h1>
        STORE
            <h4>
            this is the Store Page
            </h4> 
            <Row>
             <GridProduct/>
            </Row>
                
            
        </h1>      
    );
}

export default Productos