import { createSelector } from "@reduxjs/toolkit";
import { selectContacts, selectNameFilter } from "../contacts/selectors";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return nameFilter === ""
      ? contacts
      : contacts.filter((contact) =>
          contact.name.toLowerCase().includes(nameFilter.filter.toLowerCase())
        );
  }
);
