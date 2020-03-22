interface MenuData {
  headerTitle: string;
  buttons?: ButtonData[];
  hasBackButton?: boolean;
}

interface ButtonData {
  name: string;
  link?: string;
  isButton?: boolean;
}
