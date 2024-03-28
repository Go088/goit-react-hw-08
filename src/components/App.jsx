import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import { fetchContacts } from "../redux/contacts/contactsOps";
import { selectError, selectLoading } from "../redux/contacts/selectors";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));

export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={HomePage} />
          <Route path="/contacts" element={ContactsPage} />
          <Route path="/login" element={LoginPage} />
          <Route path="/register" element={RegisterPage} />
        </Routes>
      </Suspense>
      <ContactForm />
      <SearchBox />
      {loading && <b>Loading...</b>}
      {error && <b>Server Error</b>}
      <ContactList />
    </Layout>
  );
};
