import { FormGroup, FormControl, Validators } from '@angular/forms';

export class TeacherValidation {
    teacherValidation = new FormGroup({
        fullName: new FormControl('', [
            Validators.required
        ]),
    })

    get validations() {
        return this.teacherValidation.controls;
      }

      constructor(teacherValidation: FormGroup) {
          this.teacherValidation = teacherValidation
      }
    
}