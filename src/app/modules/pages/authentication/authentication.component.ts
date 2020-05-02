import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  menu: any = {
    main: [
      {
        title: 'Download',
        link: 'download'
      },
      {
        title: 'About Us',
        link: 'about-us'
      },
      {
        title: 'Contact Us',
        link: 'contact-us'
      }
    ],
    social: [
      {
        icon: faTwitter,
        alt: 'WebPaddle\'s twitter',
        link: 'twitter'
      },
      {
        icon: faFacebook,
        alt: 'WebPaddle\'s facebook',
        link: 'facebook'
      },
      {
        icon: faInstagram,
        alt: 'WebPaddle\'s instagram',
        link: 'instagram'
      }
    ],
    auth: [
      {
        class: 'login',
        title: 'Login',
        link: 'login'
      },
      {
        class: 'signup',
        title: 'Sign Up',
        link: 'register'
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
