import PropTypes from 'prop-types';
import {
  Table,
  Thead,
  Row,
  TableData,
  TableHeader,
  TableBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <Thead>
        <Row>
          <TableHeader>TYPE</TableHeader>
          <TableHeader>AMOUNT</TableHeader>
          <TableHeader>CURRENCY</TableHeader>
        </Row>
      </Thead>

      <TableBody>
        {transactions.map(({ id, type, amount, currency }) => (
          <Row key={id}>
            <TableData type={type}>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </Row>
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
