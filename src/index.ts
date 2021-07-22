import _ from "lodash"


export function sum(ad1: number, ad2: number): number {
  return ad1 + ad2
}



export function avg(values: number[]): number {
  return _.reduce(values, (acc, curr) => sum(acc, curr), 0)/values.length
}