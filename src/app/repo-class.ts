export class RepoClass {
  constructor(
    public name:string,
    public html_url:string,
    public description:string,
    public license:string,
    public language:string,
    public forks:number,
    public watchers:number
  ){}
}
