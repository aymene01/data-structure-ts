import { Graph, GraphNode } from './types'
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray'

export const createGraphNode = <T>(value: T, neighbors: GraphNode<T>[] = []): GraphNode<T> => {
  return {
    value,
    neighbors,
  }
}

export const createGraph = <T>(nodes: NonEmptyArray<GraphNode<T>>): Graph<T> => {
  return nodes
}
