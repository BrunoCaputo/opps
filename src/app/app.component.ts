import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription, Observable, of } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';

import { AuthenticationService } from './core/authentication.service';

/**
 * Responsible for deciding to where the user will be routed.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private signInSubscription: Subscription;

  isLoading: Observable<Boolean>;

  /**
   * Default constructor.
   * @param auth - Instance of AuthenticationService.
   * @param database - Instance of AngularFirestore.
   * @param router - Router.
   */
  constructor(
    public auth: AuthenticationService,
    public database: AngularFirestore,
    public router: Router) {}

  ngOnInit() {
    this.isLoading = of(true);

    this.signInSubscription = this.auth.user.subscribe((user) => {
      if (user)
        this.router.navigate(['/home']);
      else
        this.router.navigate(['/sign-in']);

      this.isLoading = of(false);
    });
  }

  ngOnDestroy() {
    this.signInSubscription.unsubscribe();
  }
}
