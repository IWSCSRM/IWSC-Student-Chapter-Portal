import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})

export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  grapDes:string = `Welcome to Grapido: A place where you are more than a user. Grapido is an organic ecosphere of boundless prospects: a platform that generates and amplifies your reach. Connect, collaborate, network and create! Grapido’s powerful algorithms serve to find you the best events and connections.`

  

}
