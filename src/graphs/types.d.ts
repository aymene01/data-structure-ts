import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray'

export type GraphNode<T> = {
  value: T
  neighbors: NonEmptyArray<GraphNode<T>>[]
}

export type Graph<T> = NonEmptyArray<GraphNode<T>>
