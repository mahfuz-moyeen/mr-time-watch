import React from 'react';
import { Accordion, Table } from 'react-bootstrap';
import './Question.css'

const Question = () => {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How to React.js work ?</Accordion.Header>
                    <Accordion.Body>
                        React.JS is a JavaScript library for creating user interfaces that make it easy to create a single-page application. React.js work by using components, elements, props, hook, virtual DOM, rendering. Feedback elements that provide some response elements using JSX, javascript XML. JSX is converted to react.createElement function. A reaction element is a class or a function that makes an element tree. The feedback class creates a new example and is called the render method. Response creates a virtual DOM with a virtual DOM. If there is a change in the coding or React component, first create a Virtual DOM and then react with ReactDOM.recder () to update that specific section to Real DOM. So whenever an update to the UI is needed, just call the component that works for that particular update and it appears in the DOM.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Props VS State ?</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Props</th>
                                    <th>State</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Data is transmitted from one element to another</td>
                                    <td>Data is only passed between elements.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>cannot be modified</td>
                                    <td>can be modified</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Props are read-only.</td>
                                    <td>State is both read and write.</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>can be accessed by the child component.</td>
                                    <td>cannot be accessed by child components.</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Stateless component can have Props</td>
                                    <td>Stateless components cannot have State.</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How to useState() work ?</Accordion.Header>
                    <Accordion.Body>
                        The useState() is a React Hook that allows you to have state variables in functional components.
                        useState () gives 2 array elements in the output.One is an update function and the other is a variable. When
                        useState () is called as: const [cart, setCart] = useState (). Then useState () gives a function output setCart (). With this function, the value of cart variable can be updated. and we also set defualt value for useState() ;
                        for example: const [ cart, setCart] = useState(0);
                        here cart defualt value 0;  we set useSate(0) as defualt
                        now update setCart(2) then cart value is 2; here useState() react hook use its setCart function to update cart value . useState() always use to update variable by its defualt function
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Question;