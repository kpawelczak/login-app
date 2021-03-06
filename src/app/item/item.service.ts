import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthenticationService } from '../login/authentication/authentication.service';
import { Item } from './item';


@Injectable({ providedIn: 'root' })
export class ItemService {

	private readonly url: string = '';

	private httpOptions;

	private isLogged: boolean = false;

	constructor(private http: HttpClient,
				private authenticationService: AuthenticationService) {

		this.authenticationService.isLoggedIn().subscribe(
			(logged) => {
				this.isLogged = logged;
				this.httpOptions = this.authenticationService.getHttpOptions();
			}
		);

	}

	getItems(): Observable<Array<Item>> {
		return this.http.get(this.url + '/api/v1/item', this.httpOptions)
				   .pipe(
					   map((dataItems: any) => {
						   return dataItems.map(
							   (item) => new Item(item.name, item.id)
						   );
					   })
				   );
	}

	addItem(item: string): Observable<any> {
		const postItem = JSON.stringify({ name: `${item}` });

		return this.http.post(this.url + '/api/v1/item', postItem, this.httpOptions);
	}

}
