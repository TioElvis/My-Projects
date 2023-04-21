export type TEventArticle = {
props: {
  id: string
  full_date: {
    date: number
    day: string
    month: string
  }
  creator: {
    name: string
    avatar: string    
  }
  tags: Array<string>
  title: string
  address: string
  description: string
}
}
