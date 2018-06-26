import React from 'react';
import Link from 'gatsby-link';
import moment from 'moment';
import './style.scss';

class PostTemplateDetails extends React.Component {
  render() {
    const { subtitle, author } = this.props.data.site.siteMetadata;
    const {
      frontmatter: { title },
      fields: { date },
      html
    } = this.props.data.markdownRemark;

    const homeBlock = (
      <div>
        <Link className="post-single__home-button" to="/">All Articles</Link>
      </div>
    );

    return (
      <div>
        {homeBlock}
        <div className="post-single">
          <div className="post-single__inner">
            <h1 className="post-single__title">{title}</h1>
            <div className="post-single__body" dangerouslySetInnerHTML={{ __html: html }} />
            <div className="post-single__date">
              <em>Published {moment(date, 'YYYY-MM-DD').format('D MMM YYYY')}</em>
            </div>
          </div>
          <div className="post-single__footer">
            <p className="post-single__footer-text">
              {subtitle}
              <a href={`https://twitter.com/${author.twitter}`} target="_blank" rel="noopener noreferrer">
                <br /> <strong>{author.name}</strong> on Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PostTemplateDetails;
