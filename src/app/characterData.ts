export class CharacterData{
  className : string = '';
  classColor: string = '';
  starNumber : number = 0;
  hp : number = 0;
  atk : number = 0;
  def : number = 0;
  crit : number = 0;
  skill1: string = '';
  skill2: string = '';
  lv: number = 0;
  constructor(className:string,classColor:string,starNumber:number,hp:number,atk:number,def:number,crit:number,skill1:string,skill2:string,lv:number){
    this.className = className;
    this.classColor = classColor;
    this.starNumber = starNumber;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.crit = crit;
    this.skill1 = skill1;
    this.skill2 = skill2;
    this.lv = lv;
  }
}
