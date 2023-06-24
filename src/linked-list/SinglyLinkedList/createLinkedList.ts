import * as O from 'fp-ts/lib/Option'
import { LinkedList } from './types'

export const createLinkedList = <T>(): LinkedList<T> => {
  return {
    head: O.none,
  }
}
