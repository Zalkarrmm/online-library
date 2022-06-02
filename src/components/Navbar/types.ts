export namespace NavbarTypes {
  export interface Order {
    id: number
    title: string
    value: string
  }

  export interface Author {
    id: number | string
    author: string
  }
  export interface Category{
    id: number | string
    category: string
  }
}