import { DoublyLinkedList } from './types'
import * as O from 'fp-ts/lib/Option'

export const createDoublyLinkedList = <T>(): DoublyLinkedList<T> => {
  return {
    head: O.none,
    tail: O.none,
  }
}
