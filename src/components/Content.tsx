import React from 'react';

type Props = {
  content: string;
  className: string;
};

export const HTMLContent = ({ content, className }: Props) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content, className }: Props) => <div className={className}>{content}</div>;

export default Content;
