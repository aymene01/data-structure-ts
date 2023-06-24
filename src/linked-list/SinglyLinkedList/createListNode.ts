import * as O from 'fp-ts/lib/Option'
import { ListNode } from './types'

export const createListNode = <T>(value: T): ListNode<T> => {
  return {
    value,
    next: O.none,
  }
}
