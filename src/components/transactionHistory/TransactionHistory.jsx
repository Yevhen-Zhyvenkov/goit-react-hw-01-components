import style from './TransactionHistory.module.css'
import TransactionItem from 'components/transactionHistory/transactionItem/TransactionItem';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
    return (
<table className={style['transaction-history']}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

        
    <tbody>
        {items.map(item => (
            <TransactionItem key={item.id} {...item} />)
        )}
 </tbody>
</table> )
           
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,    
}

export default TransactionHistory;