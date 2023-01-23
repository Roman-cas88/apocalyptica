import { Container, Table,  } from "react-bootstrap"

export const Description = ({ product }) => {

    const CheckDescription = () => {
        if (product.description) {
            return (
    
            product.description.map((des) => (
                <tr key={des.id}>
                    <th className="d-none d-md-table-cell">{des.key}</th>
                    <td className="d-none d-md-table-cell">{des.value}</td>
                    <td className="d-block d-md-none"><b>{des.key}:</b> <br/><i>{des.value}</i></td>
                </tr>
            ))
            )
    }}

return (
    <Container>
    <form>
        <fieldset>
            <legend>Description</legend>
            <div className='fw-bold mb-3'>
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
