// models/Field.js
class Field {
  constructor(fieldId, fieldName, type, selectableValues = []) {
    this.fieldId = fieldId;
    this.fieldName = fieldName;
    this.type = type;
    this.selectableValues = selectableValues;
  }
}

export default Field;