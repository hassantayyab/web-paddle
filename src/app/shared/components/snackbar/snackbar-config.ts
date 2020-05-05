export class ToasterData {
  type: ToasterType;
  header?: string;
  message: string;
  showCloseIcon?: boolean;
}

export type ToasterType = 'warning' | 'info' | 'success';
