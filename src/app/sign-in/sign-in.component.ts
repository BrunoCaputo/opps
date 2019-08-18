import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import { LicenseComponent } from '../license/license.component'

import { AuthenticationService } from '../core/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  googleIcon = faGoogle;

  constructor(public auth: AuthenticationService, public dialog: MatDialog) {}

  ngOnInit() {}

  openLicenseDialog() {
    this.dialog.open(LicenseComponent);
  }
}