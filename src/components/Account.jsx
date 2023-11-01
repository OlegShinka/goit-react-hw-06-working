import { useDispatch, useSelector } from 'react-redux';
import { deposite, withdraw } from 'redux/store';
export const Account = () => {
  const balance = useSelector(state => state.account.balance);

  const dispatch = useDispatch();

  return (
    <div>
      User account
      <p> {balance} $</p>
      <button
        onClick={() => {
          dispatch(deposite(20));
        }}
      >
        Deposite
      </button>
      <button
        onClick={() => {
          dispatch(withdraw(10));
        }}
      >
        Withdraw
      </button>
    </div>
  );
};
