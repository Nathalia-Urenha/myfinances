import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTale";
import { Container } from "./styles";

export function Dashboard(){
    return(
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    );
}