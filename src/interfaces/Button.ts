export interface IButton {
  type?: 'button' | 'reset' | 'submit' | undefined;
  onClick?: () => void;
  text: string;
}