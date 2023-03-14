export interface BtnProps{
  text:string,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style:React.CSSProperties,
}

export interface Options{
  questionId:number,
  selectedOption:string,
}