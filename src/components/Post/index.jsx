import React from 'react';
import Link from 'gatsby-link';
import moment from 'moment';
import './style.scss';

class Post extends React.Component {
  render() {
    const { title, description } = this.props.data.node.frontmatter;
    const { slug, date } = this.props.data.node.fields;

    return (
      <div className="post">
        <div className="post__meta">
          <time className="post__meta-time" dateTime={moment(date, 'YYYY-MM-DD').format('MMMM D, YYYY')}>
            {moment(date, 'YYYY-MM-DD').format('MMMM YYYY')}
          </time>
          <span className="post__meta-divider" />
        </div>
        <h2 className="post__title">
          <Link className="post__title-link" to={slug}>{title}</Link>
        </h2>
        <p className="post__description">{description}</p>
        <Link className="post__readmore" to={slug}>Read</Link>
      </div>
    );
  }
}

export default Post;
