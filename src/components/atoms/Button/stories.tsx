import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'src/components/atoms/Button/index';

storiesOf('Button', module)
  .add('basic', () => (
    <Button>
      Simple Button
    </Button>
  ));
