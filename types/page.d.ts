declare interface Page {
  id: number
  attributes: {
    title: string
    description: string
    slug: string
    url: string
    pageZone: PageZone
    created_at: string
    updated_at: string
    published_at: string
  }
}

declare interface PageResponse {
  data: Page[]
}
