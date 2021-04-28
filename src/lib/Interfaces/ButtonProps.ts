interface ButtonStylesProps {
  container?: {};
  view?: {};
  text?: {};
}

export interface IButtonProps {
  title?: string;
  press: () => any;
  styles: ButtonStylesProps;
}
