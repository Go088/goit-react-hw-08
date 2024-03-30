import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("The contact is removed!");
      })
      .catch(() => {
        toast.error("An error occurred");
      });
  };

  return (
    <div className={css.listItem}>
      <ul className={css.infoBlock}>
        <li className={css.wrap}>
          <FaUser />
          <p>{name}</p>
        </li>
        <li className={css.wrap}>
          <FaPhoneAlt />
          <p>{number}</p>
        </li>
      </ul>
      <button className={css.button} onClick={handleDelete} id={id}>
        Delete
      </button>
    </div>
  );
}
