import { Mongo } from 'meteor/mongo'
import '/imports/extendCollection'

const foo = new Mongo.Collection('foo')
const _id = foo.insert({ name: 'bar' })
foo.remove({ _id })
