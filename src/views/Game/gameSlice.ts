import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/store'
import { ApiResponse, GameStatus } from 'types/gameData'

export interface InitialState {
  currentLevel: number
  maxLevel: number
  rewards: number[]
  currentReward: number
  gameData: ApiResponse
  gameStatus: GameStatus
}

const initialState: InitialState = {
  currentLevel: 0,
  maxLevel: 0,
  rewards: [],
  currentReward: 0,
  gameData: [],
  gameStatus: 'starting',
}

export const gameSlice = createSlice({
  initialState,
  name: 'game',
  reducers: {
    setCurrentLevel: (state, action: PayloadAction<number>) => {
      state.currentLevel = action.payload
    },
    setMaxLevel: (state, action: PayloadAction<number>) => {
      state.maxLevel = action.payload
    },
    setNextLevel: (state) => {
      state.currentLevel += 1
    },
    setRewards: (state, action: PayloadAction<number[]>) => {
      state.rewards = action.payload
    },
    setGameData: (state, action: PayloadAction<ApiResponse>) => {
      state.gameData = action.payload
    },
    setGameStatus: (state, action: PayloadAction<GameStatus>) => {
      state.gameStatus = action.payload
    },
    setCurrentReward: (state) => {
      state.currentReward = state.rewards[state.currentLevel]
    },
    clearState: (state) => {
      state.currentLevel = 0
      state.rewards = []
      state.gameData = []
    },
    clearReward: (state) => {
      state.currentReward = 0
    }
  },
})

export const {
  setCurrentLevel,
  setMaxLevel,
  setNextLevel,
  setRewards,
  setGameData,
  setGameStatus,
  setCurrentReward,
  clearState,
  clearReward
} = gameSlice.actions

export const gameSelector = (state: RootState) => state.game

export default gameSlice.reducer
