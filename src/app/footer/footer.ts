import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import {faGooglePlus, faSquareFacebook} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  imports: [FaIconComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
 faSquareFacebook = faSquareFacebook;
 faLinkedin=faLinkedin;
 faInstagram=faInstagram;
 faTwitter=faTwitter;
 faGooglePlus=faGooglePlus;
}
