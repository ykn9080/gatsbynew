import { Tag } from "antd"
import React, { useState } from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"
import slugify from "slugify"
import { graphql, useStaticQuery } from "gatsby"
import "antd/dist/antd.css"

const TagWork = props => {
  console.log(props.tagtitle)
  const data = useStaticQuery(query)

  const works = data.allContentfulWork.nodes

  return (
    <div>
      <div>
        {works.map((tag, index) => {
          const slug = slugify(tag.title, { lower: true })

          return (
            <Link to={`/${slug}`} key={index}>
              <Tag color={tag.title === props.tagtitle ? "#108ee9" : "#87d068"}>
                {tag.title}
              </Tag>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
const query = graphql`
  {
    allContentfulWork {
      nodes {
        id
        description {
          description
        }
        tag
        title
        type
        path
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 400)
        }
        code {
          code
        }
      }
    }
  }
`
export default TagWork
