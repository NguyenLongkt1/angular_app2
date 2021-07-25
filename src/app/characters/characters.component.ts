import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterServiceService } from '../character-service.service';
import { CharacterDetailComponent } from '../character-detail/character-detail.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters : any= [];
  constructor(private characterService:CharacterServiceService,
    private router:Router,
    ) { }


  ngOnInit(): void {
    this.characters = this.characterService.characters;
  }

  viewDetail(url:string){
    this.router.navigate(['/'+url]);
  }
}
