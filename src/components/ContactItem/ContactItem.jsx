import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" onClick={() => dispatch(removeContact({ id }))}>
        <RiDeleteBin6Line />
      </button>
    </li>
  );
};

export default ContactItem;
