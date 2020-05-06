export class ToasterData {
  type?: ToasterType;
  header?: string;
  message?: string;
  htmlMessage?: string;
  showCloseIcon?: boolean;
}

export type ToasterType = 'warning' | 'info' | 'success';
