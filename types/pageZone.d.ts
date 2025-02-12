interface PageZoneComponent {
  id: number
  __component: string
}

interface Kastenzeddel extends PageZoneComponent {
  Title: string
  Description: string
  StartDate: string
  EndDate: string
  Location: string
  StartTime: string
  EndTime: string
}
interface Section extends PageZoneComponent {
  Title: string
  Description: string
  Image: ImagesResponse
}

interface Document extends PageZoneComponent {
  Title: string
  files: FilesResponse
}

interface Group extends PageZoneComponent {
  Title: string
  members: UsersResponse
}

interface ImageZone extends PageZoneComponent {
  Title: string
  Description: string
  images: ImagesResponse
}

interface Testimonial extends PageZoneComponent {
  Title: string
  Subtitle: string
  Description: string
  testimonials: TestimonialResponse
}

interface IFrame extends PageZoneComponent {
  Title: string
  Description: string
  iFrame: string
  images: ImagesResponse
}

interface ContactZone extends PageZoneComponent {
  Title: string
  Description: string
}

interface StepZone extends PageZoneComponent {
  Title: string
  Description: string
  steps: Steps
}

interface SponsorZone extends PageZoneComponent {
  Title: string
  Description: string
  sponsors: SponsorResponse
}

interface BlogZone extends PageZoneComponent {
  Title: string
  Description: string
  posts: PostResponse
}

type PageZoneItem =
  | Kastenzeddel
  | Section
  | Document
  | Group
  | ImageZone
  | Testimonial
  | IFrame
  | StepZone
  | SponsorZone
  | BlogZone

type PageZone = PageZoneItem[]
