import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponsiveSidenavComponent } from './responsive-sidenav/responsive-sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material Components
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LanguageComponent } from './language/language.component';
import { LoginMobileComponent } from './login-mobile/login-mobile.component';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { VerificationOtpComponent } from './verification-otp/verification-otp.component';
import { AdditionalSecurityComponent } from './additional-security/additional-security.component';
import { SetupProfileComponent } from './setup-profile/setup-profile.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ProfileAddressComponent } from './profile-address/profile-address.component';
import { DesktopHaddingComponent } from './desktop-hadding/desktop-hadding.component';
import { AdditionalInformationComponent } from './additional-information/additional-information.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { RedemptionDetailsComponent } from './redemption-details/redemption-details.component';
import { LoyaltyStatementsComponent } from './loyalty-statements/loyalty-statements.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { YourPasscodeComponent } from './your-passcode/your-passcode.component';
import { RequestAmountComponent } from './request-amount/request-amount.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { SuccessfulComponent } from './successful/successful.component';
import { ApplicationStatusComponent } from './application-status/application-status.component';
import { RedemptionComponent } from './redemption/redemption.component';
import { CashbackModeComponent } from './cashback-mode/cashback-mode.component';
import { MobileRechargeComponent } from './mobile-recharge/mobile-recharge.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveSidenavComponent,
    LanguageComponent,
    LoginMobileComponent,
    TermsConditionsComponent,
    VerificationOtpComponent,
    AdditionalSecurityComponent,
    SetupProfileComponent,
    CustomerProfileComponent,
    ProfileAddressComponent,
    DesktopHaddingComponent,
    AdditionalInformationComponent,
    TransactionDetailsComponent,
    RedemptionDetailsComponent,
    LoyaltyStatementsComponent,
    LandingPageComponent,
    YourPasscodeComponent,
    RequestAmountComponent,
    LoanApplicationComponent,
    SuccessfulComponent,
    ApplicationStatusComponent,
    RedemptionComponent,
    CashbackModeComponent,
    MobileRechargeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    NgxOtpInputModule,
    NgxChartsModule,
    NgxEchartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
