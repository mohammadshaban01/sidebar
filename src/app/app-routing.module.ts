import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionalInformationComponent } from './additional-information/additional-information.component';
import { AdditionalSecurityComponent } from './additional-security/additional-security.component';
import { ApplicationStatusComponent } from './application-status/application-status.component';
import { CashbackModeComponent } from './cashback-mode/cashback-mode.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LanguageComponent } from './language/language.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { LoginMobileComponent } from './login-mobile/login-mobile.component';
import { LoyaltyStatementsComponent } from './loyalty-statements/loyalty-statements.component';
import { MobileRechargeComponent } from './mobile-recharge/mobile-recharge.component';
import { ProfileAddressComponent } from './profile-address/profile-address.component';
import { RedemptionDetailsComponent } from './redemption-details/redemption-details.component';
import { RedemptionComponent } from './redemption/redemption.component';
import { RequestAmountComponent } from './request-amount/request-amount.component';
import { ResponsiveSidenavComponent } from './responsive-sidenav/responsive-sidenav.component';
import { SetupProfileComponent } from './setup-profile/setup-profile.component';
import { SuccessfulComponent } from './successful/successful.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { VerificationOtpComponent } from './verification-otp/verification-otp.component';
import { YourPasscodeComponent } from './your-passcode/your-passcode.component';

const routes: Routes = [

{
  path: '',
  redirectTo: 'language',
  pathMatch: 'full',
},
{
  path: 'language',
  component: LanguageComponent,
  
},
{
  path: 'login-mobile',
  component: LoginMobileComponent,
  
},
{
  path: 'terms-conditions',
  component: TermsConditionsComponent,
},
{
  path: 'verification-otp',
  component: VerificationOtpComponent,
},
{
  path: 'additional-security',
  component: AdditionalSecurityComponent,
},
{
  path: 'setup-profile',
  component: SetupProfileComponent,
},
{
  path: 'your-passcode',
  component: YourPasscodeComponent,
},
{
  path: 'successful',
  component: SuccessfulComponent,
},

{
  path: 'dashbord',
  component: ResponsiveSidenavComponent, 
  children: [
    {
      path: 'landing-page',
      component: LandingPageComponent,
    },
    {
      path: 'customer-profile',
      component: CustomerProfileComponent,
    },
    {
      path: 'profile-address',
      component: ProfileAddressComponent,
    },
    {
      path: 'additional-information',
      component: AdditionalInformationComponent,
    },
    {
      path: 'transaction-details',
      component: TransactionDetailsComponent,
    },
    {
      path: 'redemption-details',
      component: RedemptionDetailsComponent,
    },
    {
      path: 'loyalty-statements',
      component: LoyaltyStatementsComponent,
    },
    {
      path: 'request-amount',
      component: RequestAmountComponent,
    },
    {
      path: 'loan-application',
      component: LoanApplicationComponent,
    },
    {
      path: 'application-status',
      component: ApplicationStatusComponent,
    },
    {
      path: 'redemption',
      component: RedemptionComponent,
    },
    {
      path: 'cashback-mode',
      component: CashbackModeComponent,
    },
    {
      path: 'mobile-recharge',
      component: MobileRechargeComponent,
    },
    
  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
