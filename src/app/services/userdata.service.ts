import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  userdata()

  {
    return [
      {
        name:"ankit",rollno:231,email:"sdgbcfhsdghgds"
      },
      {
        name:"kumal",rollno:2,email:"sdgbcfhsddsfgdgghgds"
      },
      {
        name:"hhdgf",rollno:2341,email:"sdgbcfhsdghgds"
      },
      {
        name:"harsh",rollno:23156,email:"sdgbcfvxcbvchsdghgds"
      },

    ]
  }
}
