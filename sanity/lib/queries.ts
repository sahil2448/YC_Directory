import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(
    `*[_type=="startup" && defined(slug.current)  && !defined($search) || title match $search || author->name match $search || category match $search] | order(_createdAt desc){
  _id,
    _createdAt,
    _updatedAt,
    author -> {
      _id,name,image,bio
    }
    ,category
    ,description
    ,image
    ,slug
    ,title
    ,views
}`
)

export const STARTUP_BY_ID_QUERY = defineQuery(`*[_type == "startup" && _id == $id][0]{
  _id,
  _createdAt,
  slug,
  author->{
    _id,
    name,
    username,
    image,
    bio
  },
  category,
  description,
  image,
  pitch,
  title,
  views
}
`)