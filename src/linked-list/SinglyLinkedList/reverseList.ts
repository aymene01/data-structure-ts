import { LinkedList, ListNode } from './types'

import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/function'

export const reverseList = <T>(list: LinkedList<T>): LinkedList<T> => {
  return {
    head: pipe(
      list.head,
      O.fold(
        () => O.none,
        node => {
          let prev: O.Option<ListNode<T>> = O.none
          let current: O.Option<ListNode<T>> = O.some(node) as O.Option<ListNode<T>>

          while (O.isSome(current)) {
            const next = current.value.next
            current.value.next = prev
            prev = current
            current = next
          }

          return prev
        },
      ),
    ),
  }
}
