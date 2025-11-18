export interface Question {
  id: number;
  type: 'mcq' | 'text' | 'image' | 'audio';
  question: string;
  options?: string[]; // for mcq
  answer: string;     // correct answer (string)
  imageUrl?: string;  // optional
  audioUrl?: string;  // optional
  points?: number;    // points for correct (default 10)
  penalty?: number;   // negative for wrong (default -5)
}
