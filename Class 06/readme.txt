get /authors - ги дава сите автори
get /posts - ги дава постови
get /posts/me - ги дава сите мои постови
get /posts/:handle (@bojans) - ги дава сите постови на одреден корисник (@bojans)

post /posts   - креира нов пост
put /posts/:id   - менува пост
delete /posts/:id  - бриши пост

post {
  _id: (...),
  author_id: (...) ,
  content: (...) ,
  published_on: (...) ,

}

author {
  _id: (...),
  handle: (...),
  full_name: (...),
}

