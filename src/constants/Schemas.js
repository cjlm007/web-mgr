import {Schema, arrayOf} from 'normalizr'

const star = new Schema('stars', {
  idAttribute: star => star.uuid
})

export const starsArraySchema = arrayOf(star)
