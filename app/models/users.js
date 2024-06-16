/*
 * @Author: Wanko
 * @Date: 2024-04-05 16:46:35
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-15 15:15:39
 * @Description:
 */
const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema(
  {
    __v: { type: Number, select: false, default: false },
    name: { type: String, required: true },
    password: { type: String, required: true, select: false },
  },
  {
    timestamps: true
  }
)

module.exports = model('User', userSchema)
