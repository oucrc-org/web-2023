import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

export default function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={twMerge(
        'container mx-auto grow px-2 sm:px-4 md:px-10',
        className
      )}
    >
      {children}
    </div>
  );
}
