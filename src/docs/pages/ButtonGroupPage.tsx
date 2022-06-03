import { FC } from 'react';
import { HiAdjustments, HiCloudDownload, HiUserCircle } from 'react-icons/hi';

import { CodeExample, DemoPage } from './DemoPage';
import { Button } from '../../lib';

const ButtonGroupPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default example',
      code: (
        <Button.Group>
          <Button color="alternative">Profile</Button>
          <Button color="alternative">Settings</Button>
          <Button color="alternative">Messages</Button>
        </Button.Group>
      ),
    },
    {
      title: 'Group buttons with icons',
      code: (
        <Button.Group>
          <Button color="alternative">
            <HiUserCircle className="mr-3 h-4 w-4" /> Profile
          </Button>
          <Button color="alternative">
            <HiAdjustments className="mr-3 h-4 w-4" /> Settings
          </Button>
          <Button color="alternative">
            <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
          </Button>
        </Button.Group>
      ),
    },
    {
      title: 'All colors',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button.Group>
            <Button color="blue">Profile</Button>
            <Button color="blue">Settings</Button>
            <Button color="blue">Messages</Button>
          </Button.Group>
          <Button.Group>
            <Button color="blue">Profile</Button>
            <Button color="blue">Settings</Button>
            <Button color="blue">Messages</Button>
          </Button.Group>
          <Button.Group>
            <Button color="lightGreen">Profile</Button>
            <Button color="lightGreen">Settings</Button>
            <Button color="lightGreen">Messages</Button>
          </Button.Group>
        </div>
      ),
    },
    {
      title: 'pill',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button.Group pill={true}>
            <Button color="alternative">Profile</Button>
            <Button color="alternative">Settings</Button>
            <Button color="alternative">Messages</Button>
          </Button.Group>
          <Button.Group pill={true}>
            <Button color="blue">Profile</Button>
            <Button color="blue">Settings</Button>
            <Button color="blue">Messages</Button>
          </Button.Group>
          <Button.Group pill={true}>
            <Button color="gray">Profile</Button>
            <Button color="gray">Settings</Button>
            <Button color="gray">Messages</Button>
          </Button.Group>
        </div>
      ),
    },
    {
      title: 'pill with icons',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button.Group pill={true}>
            <Button color="alternative">
              <HiUserCircle className="mr-3 h-4 w-4" /> Profile
            </Button>
            <Button color="alternative">
              <HiAdjustments className="mr-3 h-4 w-4" /> Settings
            </Button>
            <Button color="alternative">
              <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
            </Button>
          </Button.Group>
          <Button.Group pill={true}>
            <Button color="blue">
              <HiUserCircle className="mr-3 h-4 w-4" /> Profile
            </Button>
            <Button color="blue">
              <HiAdjustments className="mr-3 h-4 w-4" /> Settings
            </Button>
            <Button color="blue">
              <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
            </Button>
          </Button.Group>
          <Button.Group pill={true}>
            <Button color="gray">
              <HiUserCircle className="mr-3 h-4 w-4" /> Profile
            </Button>
            <Button color="gray">
              <HiAdjustments className="mr-3 h-4 w-4" /> Settings
            </Button>
            <Button color="gray">
              <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
            </Button>
          </Button.Group>
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default ButtonGroupPage;
