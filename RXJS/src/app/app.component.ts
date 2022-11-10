import { Component, OnInit } from '@angular/core';
import { Observable, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
      <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <h2>Here are some links to help you start: </h2>
    <ul>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
      </li>
    </ul>
    
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'RXJS';

  /*minhaPromise(nome: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (nome == 'Eduardo') {
        setTimeout(() => {
          resolve('Seja bem vindo ' + nome)
        }, 5000);
      }
      else {
        reject('Ops! Você não é o Eduardo')
      }
    })
  }*/

  /*myObservable(name: string): Observable<string> {
    return new Observable(subscriber => {

      if (name == 'Eduardo') {
        subscriber.next('Hello ' + name)
        subscriber.next('Hello again ' + name)
        setTimeout(() => {
          subscriber.next('Delay hello  ' + name)
        }, 5000);
        subscriber.complete();
      } else {
        subscriber.error('Ops! Something went wrong')
      }

    })
  }*/

  userObservable(name: string, email: string): Observable<User> {
    return new Observable(subscriber => {

      if (name == 'Admin') {
        let user = new User(name, email);

        setTimeout(() => {
          subscriber.next(user)
        }, 1000);

        setTimeout(() => {
          subscriber.next(user)
        }, 2000);

        setTimeout(() => {
          subscriber.next(user)
        }, 3000);

        setTimeout(() => {
          subscriber.next(user)
        }, 4000);

        setTimeout(() => {
          subscriber.next(user)
        }, 5000);

        setTimeout(() => {
          subscriber.complete()
        }, 6000);
      } else {
        subscriber.error('Ops! Deu erro!')
      }

    })
  }

  ngOnInit(): void {

    /*this.minhaPromise('Euardo')
      .then(result => {
        console.log(result)
      })
      .catch(erro => console.log(erro))*/

    /*this.myObservable('')
      .subscribe(result => console.log(result),
        erro => console.log(erro),
        () => console.log('Fim'))*/

    const observer = {
      next: valor => this.write(valor),
      error: erro => console.log('Erro: ', erro),
      complete: () => console.log('END!')
    }

    const obs = this.userObservable('Admin', 'admin@hotmail.com')
    var subs = obs.subscribe(observer)

    setTimeout(() => {
      console.log('Is conection closed? ', subs.closed)
      subs.unsubscribe();
      console.log('Is conection closed? ', subs.closed)
    }, 3500);
  }

  write(texto: string) {
    console.log(texto)
  }


}

export default class User {
  constructor(private name: string, private email: string) { }
}
