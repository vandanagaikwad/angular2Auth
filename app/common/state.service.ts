import {Injectable} from '@angular/core';
import {HTTP_PROVIDERS, Http, Response, Headers, RequestOptions} from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Rx";

@Injectable()
export class StateService {
	constructor(private http:Http) { }

    endpoint_url:String = "http://localhost:3000/users/getUsers";

	private _message = 'Hello Message';

    getMessage(): string {
     return this._message;
    };

    setMessage(userData: object): Observable<Hero> {
	    console.log('-------- service -------------');
	    console.log(userData);
	    this._message = userData.usernm;

	    let headers = new Headers({ 'Content-Type': 'application/json' });
	    let options = new RequestOptions({ headers: headers });
	    let body = JSON.stringify(userData);
	    return this.http.put('http://192.168.21.17:3000/users/login', body, options).map((res: Response) => res.json())
      	.catch((this.handleError));
    };
}
