import { IBaseAttributeProps, ICoverProps } from 'src/core/components/types';

export interface ITypographyProps extends IBaseAttributeProps<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement | HTMLElement
  >, ICoverProps {
  variant: string;
  element?: string;
  color?: string;
}
