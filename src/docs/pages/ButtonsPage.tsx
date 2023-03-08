import { FC } from 'react';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';

import { Button, Spinner } from '../../lib';
import { CodeExample, DemoPage } from './DemoPage';

const ButtonsPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default button',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button color="blue">blue</Button>
          <Button color="gray">gray</Button>
          <Button color="gray200">lightGray</Button>
          <Button color="lightGreen">lightGreen</Button>
          <Button color="transparent">transparent</Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Button pills',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button pill>Default</Button>
          <Button color="blue" pill>
            Alternative
          </Button>
          <Button color="gray" pill>
            Dark
          </Button>
          <Button color="gray200" pill>
            Light
          </Button>
          <Button color="lightGreen" pill>
            Green
          </Button>
          <Button color="transparent" pill>
            Red
          </Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Button sizes',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Base</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra large</Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Buttons with icon',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Button>
            <HiShoppingCart className="mr-2 h-5 w-5" />
            Buy now
          </Button>
          <Button>
            Choose plan
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Icon buttons',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Button iconName="Filter" />
          <Button iconName="Filter" pill={true} />
          <Button iconName="Filter" ring={true} />
          <Button iconName="Filter" pill={true} ring={true} />
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Loader',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Button>
            <Spinner className="mr-3" size="sm" light />
            Loading ...
          </Button>
          <Button pill={true}>
            <Spinner className="mr-3" size="sm" light />
            Loading ...
          </Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Disabled',
      code: <Button disabled>Disabled button</Button>,
      codeClassName: 'dark:!bg-gray-900',
    },
  ];

  return <DemoPage examples={examples} />;
};

export default ButtonsPage;
