import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/animation';

 


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations:[slideInAnimation]
})
export class ContactComponent implements OnInit {
  public dateTime: Date | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
