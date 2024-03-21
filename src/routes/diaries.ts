import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

/**
 * GET route to retrieve all diary entries without sensitive information.
 * @route GET /api/diaries
 * @returns {Array} An array of diary entries without sensitive information.
 */
router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

/**
 * GET route to retrieve a diary entry by its ID.
 * @route GET /api/diaries/:id
 * @param {number} id - The ID of the diary entry to retrieve.
 * @returns {object} The diary entry with the specified ID.
 * @throws {HTTPError} 404 - If the diary entry with the specified ID is not found.
 */
router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)

  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

/**
 * POST route to add a new diary entry.
 * @route POST /api/diaries
 * @param {object} req.body - The request body containing the new diary entry.
 * @returns {object} The newly added diary entry.
 * @throws {HTTPError} 400 - If there is an error adding the diary entry.
 */
router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addedDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
