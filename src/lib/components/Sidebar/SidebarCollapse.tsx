import classNames from 'classnames';
import { FC, PropsWithChildren, useState } from 'react';
import { VscChevronRight, VscChevronUp, VscChevronDown } from 'react-icons/vsc';
import { Tooltip } from '../Tooltip';
import { useSidebarContext } from './SidebarContext';
import { SidebarItem } from './SidebarItem';
import { SidebarItemContext } from './SidebarItemContext';
import { useSidebarItemContext } from './SidebarItemContext';

export type SidebarCollapseProps = PropsWithChildren<SidebarItem>;

const SidebarCollapse: FC<SidebarCollapseProps> = ({ children, icon: Icon, label, ...rest }) => {
  const { collapsed } = useSidebarContext();
  const [open, setOpen] = useState(false);
  const { insideCollapse } = useSidebarItemContext();

  const Wrapper = ({ children: wrapperChildren }: PropsWithChildren<Record<string, unknown>>) => (
    <li
      className={classNames('border-r-transparent', {
        'border-r-xs hover:border-r-primary-800': !insideCollapse && !collapsed,
        'border-r-xs border-r-primary-800': open && !insideCollapse && !collapsed,
      })}
    >
      {collapsed ? (
        <Tooltip style={'light'} content={label} placement="right">
          {wrapperChildren}
        </Tooltip>
      ) : (
        wrapperChildren
      )}
    </li>
  );

  return (
    <Wrapper>
      <button
        className={classNames(
          'group flex w-full items-center py-4 pr-4.5 pl-6 text-sm font-normal text-primary-900 transition duration-75 hover:bg-primary-425 hover:font-medium hover:text-primary-800',
          {
            'bg-primary-425 !font-medium !text-primary-800': open,
            'text-xs !text-neutral-800 hover:!bg-white hover:font-medium hover:!text-primary-800':
              !open && insideCollapse,
          },
        )}
        data-testid="sidebar-collapse-button"
        onClick={() => setOpen(!open)}
        type="button"
        {...rest}
      >
        {Icon && (
          <Icon
            className={classNames('h-5 w-5 stroke-primary-900 transition duration-75 group-hover:stroke-primary-800', {
              '!stroke-primary-800': open,
            })}
          />
        )}
        {collapsed ? (
          <span className="sr-only">{label}</span>
        ) : (
          <>
            <span className={classNames('ml-3 whitespace-nowrap text-left', { 'flex-1': !insideCollapse })}>
              {label}
            </span>
            {insideCollapse ? (
              open ? (
                <VscChevronDown className="mt-1 ml-2 h-4 w-4" />
              ) : (
                <VscChevronRight className="mt-1 ml-2 h-4 w-4" />
              )
            ) : open ? (
              <VscChevronUp className="h-5 w-4.5" />
            ) : (
              <VscChevronDown className="h-5 w-4.5" />
            )}
          </>
        )}
      </button>
      <ul
        className={classNames({
          hidden: !open,
        })}
        data-testid="sidebar-collapse"
      >
        <SidebarItemContext.Provider value={{ insideCollapse: true }}>{children}</SidebarItemContext.Provider>
      </ul>
    </Wrapper>
  );
};

SidebarCollapse.displayName = 'Sidebar.Collapse';
export default SidebarCollapse;
