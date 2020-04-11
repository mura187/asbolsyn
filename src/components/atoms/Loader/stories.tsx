import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from 'src/components/atoms/Loader/index';

storiesOf('Loader', module)
  .add('basic', () => (
    <Loader />
  ));
