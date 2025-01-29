import { useState } from "react";
import FormService from "../services/FormService";
import formData from "../data/formData.json"; // Import JSON Data

const useFormViewModel = () => {
  const [formService] = useState(new FormService(formData));
  const [currentPage, setCurrentPage] = useState(formService.getPages()[0].pageName);
  const [fields, setFields] = useState(formService.getFieldsByPage(currentPage));

  const changePage = (pageName) => {
    setCurrentPage(pageName);
    setFields(formService.getFieldsByPage(pageName));
  };

  return { currentPage, fields, changePage, pages: formService.getPages() };
};

export default useFormViewModel;