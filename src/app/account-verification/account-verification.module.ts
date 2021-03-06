import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountVerificationPageRoutingModule } from './account-verification-routing.module';

import { AccountVerificationPage } from './account-verification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountVerificationPageRoutingModule
  ],
  declarations: [AccountVerificationPage]
})
export class AccountVerificationPageModule {}
