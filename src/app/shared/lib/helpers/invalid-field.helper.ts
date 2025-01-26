import { FormGroup } from "@angular/forms";

export function createInvalidFieldHelper(formGroup: FormGroup) {
    console.log(formGroup)
    return (fieldName: string): boolean => {
      const field = formGroup.get(fieldName);
      if (!field) {
        console.error(`Campo '${fieldName}' não encontrado no formulário.`);
        return false;
      }
      return field.invalid && (field.dirty || field.touched);
    };
  }