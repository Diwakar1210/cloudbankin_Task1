// models/Page.js
import Field from "./Field";

class Page {
  constructor(pageName, fields = []) {
    this.pageName = pageName;
    this.fields = fields.map(
      (field) => new Field(field.fieldId, field.fieldName, field.type, field.selectableValues)
    );
  }
}

export default Page;
