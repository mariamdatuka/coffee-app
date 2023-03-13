export interface BtnProps{
  text:string,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface Options{
  questionId:number,
  selectedOption:string,
}