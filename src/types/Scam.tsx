export interface Scam {
  category: string;
  communicationType: string;
  content: string;
  email: string;
  phone: string;
  reportID: string;
  time: number; // Unix timestamp in seconds
  title: string;
}
