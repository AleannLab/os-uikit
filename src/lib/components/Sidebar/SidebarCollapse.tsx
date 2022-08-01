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
        'hover:border-r-primary-800 border-r-xs': !insideCollapse && !collapsed,
        'border-r-primary-800 border-r-xs': open && !insideCollapse && !collapsed,
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
          'text-primary-900 hover:text-primary-800 hover:bg-primary-425 pr-4.5 group flex w-full items-center py-4 pl-6 text-sm font-normal transition duration-75 hover:font-medium',
          {
            'bg-primary-425 !text-primary-800 !font-medium': open,
            'hover:!text-primary-800 text-xs !text-neutral-800 hover:!bg-white hover:font-medium':
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
            className={classNames('group-hover:stroke-primary-800 stroke-primary-900 h-5 w-5 transition duration-75', {
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
              <VscChevronUp className="w-4.3 h-5" />
            ) : (
              <VscChevronDown className="w-4.3 h-5" />
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
