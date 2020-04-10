import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'src/components/atoms/Button/index';
import 'src/components/atoms/Button/index.scss';

storiesOf('Button', module)
  .add('basic', () => (
    <Button>
      Simple Button
    </Button>
  )).add('primary', () => (
    <Button classNames="btn-primary">
      Primary Button
    </Button>
  )).add('outlined primary', () => (
    <Button classNames="btn-primary-outlined">
      Primary Outlined Button
    </Button>
  )).add('secondary', () => (
    <Button classNames="btn-secondary">
      Secondary Button
    </Button>
  )).add('outlined secondary', () => (
    <Button classNames="btn-secondary-outlined">
      Secondary Button
    </Button>
  )).add('rounded primary', () => (
    <Button classNames="btn-primary btn-rounded">
      Primary Rounded Button
    </Button>
  )).add('rounded secondary', () => (
    <Button classNames="btn-secondary btn-rounded">
      Secondary Rounded Button
    </Button>
  )).add('primary submit', () => (
    <Button classNames="btn-primary btn-rectangle">
      Primary Submit Button
    </Button>
  )).add('secondary submit', () => (
    <Button classNames="btn-secondary btn-rectangle">
      Primary Submit Button
    </Button>
  ));
