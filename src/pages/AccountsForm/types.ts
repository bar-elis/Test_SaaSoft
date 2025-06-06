export interface FormState {
  id: string;
  tags: {text: string}[];
  userName: string;
  password: string | null;
  typeRecord: string
}
