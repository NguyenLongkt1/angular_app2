import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = {fullname:'aka',username:'akagami no shanks',email:'akagami@vtc.vn',avatar:'https://i.pinimg.com/originals/8c/6e/57/8c6e574b7ff2eff33b6539fb5fba0b53.png'}
  constructor() { }

  ngOnInit(): void {
  }

}
