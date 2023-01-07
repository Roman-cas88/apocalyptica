import { Container, Table,  } from "react-bootstrap"

export const Description = ({ product }) => {

    const CheckDescription = () => {
        if (product.description) {
            return (
    
            product.description.map((des) => (
                <tr key={des.id}>
                    <th>{des.key}</th>
                    <td>{des.value}</td>
                </tr>
            ))
            )
    }}

return (
    <Container>
    <form>
        <fieldset>
            <legend>Description</legend>
            <div style={{}} className='fw-bold mb-3'>
                    Product information "{product.title}"
                </div>
            <Table style={{maxWidth:'500px'}} striped bordered hover size='sm'>
                <tbody>
                    <CheckDescription />
                </tbody>
            </Table>
        </fieldset>
    </form>
    </Container>
)
}
