import { LinkedList, ListNode } from './types'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/function'

export const printLinkedList = <T>(list: LinkedList<T>): void => {
  let current: O.Option<ListNode<T>> = list.head

  while (O.isSome(current)) {
    const value: T = pipe(
      current,
      O.map(node => node.value),
      O.getOrElse(() => {
        throw new Error('Invalid state: missing node value')
      }),
    )

    process.stdout.write(`${value} -> `)
    current = pipe(
      current,
      O.chain(node => node.next),
    )
  }
  process.stdout.write('null\n')
}
