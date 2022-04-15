import React from 'react';

const ExternalLink = ({ children, href }) => (
    <a href = {href} target = "_blank" rel="noopener norefferer">
        {children}
    </a>
);

export default ExternalLink;