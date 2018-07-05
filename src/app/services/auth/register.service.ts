import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { User } from '../../models/user';
import { Observable } from 'rxjs';

@Injectable()
export class RegisterService {


basic_url :String;

constructor(private http : Http) {
    this.basic_url = environment.API_URL;
 }
register(user:User){
  let targetUrl = this.basic_url + "/guest/register";
  console.log(targetUrl);
  let res=this.http.post(
      targetUrl,
      user,
  ).map(resp=>{if(resp.status===201){
      return true;
    }
    return false;
  }
  ).catch((e)=>{return Observable.of(false)});
  return res;
}
}