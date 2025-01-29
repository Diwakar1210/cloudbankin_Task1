// services/FormService.js
import Page from "../models/Page";

class FormService {
  constructor(data) {
    this.pages = data.map((page) => new Page(page.pageName, page.fields));
  }

  getPages() {
    return this.pages;
  }

  getFieldsByPage(pageName) {
    const page = this.pages.find((p) => p.pageName === pageName);
    return page ? page.fields : [];
  }
}

export default FormService;
