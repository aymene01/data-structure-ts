import { LinkedList, ListNode } from './types'
import { createListNode } from './createListNode'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/function'

export const addElementToList =
  <T>(...values: T[]) =>
  (list: LinkedList<T>): LinkedList<T> => {
    const newNodes = values.map(createListNode)

    if (
      O.fold(
        () => true,
        () => false,
      )(list.head)
    ) {
      return {
        head: O.some(newNodes[0]),
      }
    } else {
      const updateLastNode = (lastNode: ListNode<T>): LinkedList<T> => {
        lastNode.next = O.some(newNodes[0])
        return list
      }

      return pipe(
        list.head,
        O.fold(() => list, updateLastNode),
      )
    }
  }
