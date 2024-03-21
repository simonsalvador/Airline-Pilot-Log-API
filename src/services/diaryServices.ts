import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

// Load diary entries from JSON data
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

/**
 * Retrieves all diary entries.
 * @returns {DiaryEntry[]} An array containing all diary entries.
 */
export const getEntries = (): DiaryEntry[] => diaries

/**
 * Finds a diary entry by its ID and returns it without sensitive information.
 * @param {number} id - The ID of the diary entry to find.
 * @returns {NonSensitiveInfoDiaryEntry | undefined} The diary entry with the specified ID without sensitive information, or undefined if not found.
 */
export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

/**
 * Retrieves all diary entries without sensitive information.
 * @returns {NonSensitiveInfoDiaryEntry[]} An array containing all diary entries without sensitive information.
 */
export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

/**
 * Adds a new diary entry.
 * @param {NewDiaryEntry} newDiaryEntry - The new diary entry to add.
 * @returns {DiaryEntry} The newly added diary entry.
 */
export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  // Generate a unique ID for the new entry
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }

  // Add the new entry to the list of diary entries
  diaries.push(newDiary)

  return newDiary
}
