import { NewDiaryEntry, Weather, Visibility } from './types'

/**
 * Parses the comment from the request.
 * @param commentFromRequest - The comment obtained from the request.
 * @returns The parsed comment.
 * @throws Error if the comment is missing or incorrect.
 */
const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }

  return commentFromRequest
}

/**
 * Parses the date from the request.
 * @param dateFromRequest - The date obtained from the request.
 * @returns The parsed date.
 * @throws Error if the date is missing or incorrect.
 */
const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }

  return dateFromRequest
}

/**
 * Parses the weather from the request.
 * @param weatherFromRequest - The weather obtained from the request.
 * @returns The parsed weather.
 * @throws Error if the weather is missing or incorrect.
 */
const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing Weather')
  }

  return weatherFromRequest
}

/**
 * Parses the visibility from the request.
 * @param visibilityFromRequest - The visibility obtained from the request.
 * @returns The parsed visibility.
 * @throws Error if the visibility is missing or incorrect.
 */
const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing Visibility')
  }

  return visibilityFromRequest
}

/**
 * Checks if the parameter is a valid weather value.
 * @param param - The value to check.
 * @returns true if the parameter is a valid weather value, otherwise false.
 */
const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

/**
 * Checks if the parameter is a string.
 * @param string - The value to check.
 * @returns true if the parameter is a string, otherwise false.
 */
const isString = (string: string): boolean => {
  return typeof string === 'string'
}

/**
 * Checks if the parameter is a valid date string.
 * @param date - The value to check.
 * @returns true if the parameter is a valid date string, otherwise false.
 */
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

/**
 * Checks if the parameter is a valid visibility value.
 * @param param - The value to check.
 * @returns true if the parameter is a valid visibility value, otherwise false.
 */
const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

/**
 * Converts an object to a new diary entry.
 * @param object - The object representing the new diary entry.
 * @returns The new diary entry.
 * @throws Error if any required field is missing or incorrect.
 */
const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry
}

export default toNewDiaryEntry
