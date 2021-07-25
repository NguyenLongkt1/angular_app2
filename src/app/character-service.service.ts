import { Injectable } from '@angular/core';
import { CharacterData } from './characterData';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  constructor() { }

  hancock = new CharacterData('Attacker','Blue',6,8685,2466,2161,11,'Perfume Femur','Love-Love Mellow',100);
  kata = new CharacterData('Defender','Green',6,8609,1892,2343,11,'Buzz Cut Mochi','Punch Mochi',100);
  bullet = new CharacterData('Attacker','Blue',6,8554,2286,2143,11,'Color of Arms Fist','I will crush you in a single blow!',100);
  shanks = new CharacterData('Attacker','Blue',6,9195,2437,2133,11,'I\'ve Come to Put a End to This War!!!','Griffon Slash',100);
  bigmom = new CharacterData('Runner','Blue',6,9740,1975,2069,11,'Give it to me!!!','Ikoku Sovereignty',100);
  sabo = new CharacterData('Attacker','Red',6,8857,2189,1984,11,'Sorry, Ace! I\'m gonna use your move...','Flame Dragon King',100);
  lulaw = new CharacterData('Attacker','Blue',6,9302,2337,2172,11,'Radio Knife','Chambres & Fire-First Pistol Red Hawk',100);
  wb = new CharacterData('Attacker','Green',6,9672,2268,2240,11,'Drop Your Valuables and Leave!!','Are You Trying to Steal My Family From Me?!!',100);
  characters = [
    {id:1,name:'Boa Hancock',thumbnail:'https://i.pinimg.com/originals/c7/21/7d/c7217d7a50e9d842520cb7cd12a8d42f.png',deltai: this.hancock},
    {id:2,name:'Katakuri',thumbnail:'https://opbr.info/wp-content/uploads/2020/08/EF3F7944-8176-41F0-A7DE-B50600F738B2.png',deltai: this.kata},
    {id:3,name:'Douglas Bullet',thumbnail:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ec609a-f5e5-4a17-8390-9f819fcd8e1b/ddfd5l2-ae0222ff-baf8-4c28-95ab-0ed1a81a9480.png/v1/fill/w_640,h_512,strp/douglas_bullet_by_kaizokujotei_ddfd5l2-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvZThlYzYwOWEtZjVlNS00YTE3LTgzOTAtOWY4MTlmY2Q4ZTFiXC9kZGZkNWwyLWFlMDIyMmZmLWJhZjgtNGMyOC05NWFiLTBlZDFhODFhOTQ4MC5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.BAvUPFmJVP-XcBIadTmoKoW-X57m5ypQi1kTDXdoYS4',deltai: this.bullet},
    {id:4,name:'Shanks',thumbnail:'https://opbr.info/wp-content/uploads/2020/08/img_chara_shanks_hand01_l.png',deltai: this.shanks},
    {id:5,name:'Charlotte LinLin',thumbnail:'https://opbr.info/wp-content/uploads/2020/08/img_chara_bigmom_slim01_l.png',deltai: this.bigmom},
    {id:6,name:'Sabo',thumbnail:'https://opbr.info/wp-content/uploads/2020/08/img_chara_sabo_mera01_l.png',deltai: this.sabo},
    {id:7,name:'Luffy-Law Alience',thumbnail:'https://static.zerochan.net/One.Piece%3A.Two.Years.Later.full.3148457.jpg',deltai: this.lulaw},
    {id:8,name:'WhiteBeard',thumbnail:'https://i.pinimg.com/originals/71/04/3a/71043a3a722a8339932693fdd72b213e.png',deltai: this.wb},
  ]
}
