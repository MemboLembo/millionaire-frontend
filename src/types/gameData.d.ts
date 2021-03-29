export interface GameData {
  _id: string
  answers: Answers
  question: string
}

export type ApiResponse = GameData[]

export type GameStatus = 'starting' | 'playing' | 'retrying'
