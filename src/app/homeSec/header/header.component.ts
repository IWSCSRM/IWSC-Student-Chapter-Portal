import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }  
  //Random data fillers-----
  about = `Inception Wave is an organisation that combines the entrepreneurial innovation driven mindset of an emerging and vibrant youth community with the colossal upsides and tremendous convenience that comes with effective connection and collaboration. Our vision is to effectively enhance professional culture by enabling our users to find the people and communities there personal and professional interests align with. This is envisioned as a process that will compartmentalize and segregate online spaces on our services via parameters such as geographical location, interests, experiences and potential prospects. The idea is to present and furnish a platform where it is the users who decide their preferences and are able to come across an extensive community of like-minded people that share common aspirations and a more-or less unified outlook. Being a student-led and student-run enterprise, the key feature here is flexibility, adaptability, and dynamic feedback response`
  studentChapterName = ["SRMIST Chennai", "VIT Vellore", "MIT Manglore", "IIT Madras"];
  studentChapterSince = ["April 2017", "May 2019", "June 2018", "September 2019"];
}
