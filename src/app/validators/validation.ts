import { FormGroup, FormControl, Validators } from '@angular/forms';

export class UserValidatos {
    
    // userValidator = new FormGroup({
    //     admin_user: new FormControl('', [
    //         Validators.required,
    //         Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
    // })

    emailValidation(email) {
        let re = new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i);
        return re.test(email);
    }
}