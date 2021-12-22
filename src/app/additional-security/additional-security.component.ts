import { Component, OnInit } from '@angular/core';
import { NgxOtpInputConfig } from "ngx-otp-input";

@Component({
  selector: 'app-additional-security',
  templateUrl: './additional-security.component.html',
  styleUrls: ['./additional-security.component.scss']
})
export class AdditionalSecurityComponent implements OnInit {

  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 4,
    autofocus: true,
    classList: {
      inputBox: "my-super-box-class",
      input: "my-super-class",
      inputFilled: "my-super-filled-class",
      inputDisabled: "my-super-disable-class",
      inputSuccess: "my-super-success-class",
      inputError: "my-super-error-class"
    }
  };

  handeOtpChange(value: string[]): void {
    console.log(value);
  }

  handleFillEvent(value: string): void {
    console.log(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
