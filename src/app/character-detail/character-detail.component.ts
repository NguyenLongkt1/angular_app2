import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterServiceService } from '../character-service.service';
import { CharacterData } from '../characterData';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  characterId : number=0;
  characterList :any = [];
  cdata: any={};
  currentUrl : string = '';
  constructor(private characterService:CharacterServiceService,
    private router:Router
    ) { }

  getIdCharacter():number{
    this.currentUrl = this.router.url;
    this.characterId = Number(this.currentUrl.substr(this.currentUrl.lastIndexOf('%3D')+3));
    return this.characterId;
  }

  getCharById(id:number,listChar:any){
    listChar.forEach(function(element:any){
      if(element.id==id){
        return element;
      }
    });
  }

  ngOnInit(): void {
    this.characterList = this.characterService.characters;
    this.characterId=this.getIdCharacter();
    this.cdata = this.getCharById(this.characterId,this.characterList);
    console.log('char id: '+this.characterId)
    console.log(this.characterList)
    console.log('char detail: '+this.cdata)
    console.log('ngOnInit')
  }
  testData(){
    console.log('test function')
    console.log(this.cdata)
  }





}
