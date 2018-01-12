import { Mongo } from 'meteor/mongo'

const OrigCollection = Mongo.Collection

Mongo.Collection = class Collection extends OrigCollection {
  constructor(name, ...args) {
    super(name, ...args)
    console.log(name)
  }
}
