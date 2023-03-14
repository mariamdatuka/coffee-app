export interface BtnProps{
  text:string,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?:React.CSSProperties,
}

export interface Options{
  questionId:number,
  selectedOption:string,
}

export interface Option {
  name: string;
  descr: string;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}