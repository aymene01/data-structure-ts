import * as O from 'fp-ts/lib/Option'
import { DoublyLinkedListNode } from './types'

export const createNode = <T>(value: T): DoublyLinkedListNode<T> => {
  return {
    value,
    prev: O.none,
    next: O.none,
  }
}
