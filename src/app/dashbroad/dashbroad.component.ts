import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbroad',
  templateUrl: './dashbroad.component.html',
  styleUrls: ['./dashbroad.component.css']
})
export class DashbroadComponent implements OnInit {

  category=[
    {cid:1,name:'Thuyền chiến',thumbnail:'https://i.pinimg.com/originals/ef/aa/c5/efaac5ddee7f47e7e99bd0d2c53734dd.png',path:''},
    {cid:2,name:'Đồng đội',thumbnail:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/51158316-fd7e-48ca-b5fe-8542e9dfe357/dddqcs6-4f0aec21-4fb7-4e93-b4ed-9055a78f1cf9.png',path:'/character'},
    {cid:3,name:'Hoạt động',thumbnail:'https://i.pinimg.com/originals/56/08/e0/5608e039f6ff259a4934b821712fe9ed.png',path:''}
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  redirectToPage(cid:number){
    if(cid==1)
      this.router.navigate(['/']);
    else if(cid==2)
      this.router.navigate(['/character']);
    else if(cid==3)
      this.router.navigate(['/']);
  }

}
