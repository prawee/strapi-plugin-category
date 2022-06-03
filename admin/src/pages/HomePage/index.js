/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { Box } from '@strapi/design-system/Box';
import { BaseHeaderLayout } from '@strapi/design-system/Layout';

import pluginId from '../../pluginId';

const HomePage = () => {
  return (
    <Box background="neutral100">
      <BaseHeaderLayout
        title={pluginId.charAt(0).toUpperCase() + pluginId.slice(1)}
        subtitle="Management category"
        as="h2"
      />

      <Box padding={8}>
        <h1>{pluginId}&apos;s HomePage</h1>
        <p>Happy coding</p>
      </Box>
  
    </Box>
  );
};

export default memo(HomePage);
