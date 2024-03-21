/**
 * Enum representing different types of weather conditions.
 */
export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

/**
 * Enum representing different levels of visibility.
 */
export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}

/**
 * Interface representing a diary entry.
 */
export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

/**
 * Type representing a diary entry with sensitive information removed.
 */
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

/**
 * Type representing a new diary entry without an ID.
 */
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
