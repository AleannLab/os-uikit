import classNames from 'classnames';
import { FC, PropsWithChildren, useState } from 'react';
import { HiChevronDown, HiChevronUp, HiChevronRight } from 'react-icons/hi';
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
        'border-r-[2px] hover:border-r-[#0577D0]': !insideCollapse,
        'border-r-[2px] border-r-[#0577D0]': open && !insideCollapse,
      })}
    >
      {collapsed ? (
        <Tooltip content={label} placement="right">
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
          'group flex w-full items-center py-4 pl-6 pr-5 text-sm font-normal text-[#34495E] transition duration-75 hover:bg-[#D8EDFD] hover:font-medium hover:text-[#0577D0]',
          {
            'bg-[#D8EDFD] !font-medium !text-[#0577D0]': open,
            'text-xs !text-[#6C859E] hover:!bg-white hover:font-medium hover:!text-[#0577D0]': !open && insideCollapse,
          },
        )}
        data-testid="sidebar-collapse-button"
        onClick={() => setOpen(!open)}
        type="button"
        {...rest}
      >
        {Icon && (
          <Icon
            className={classNames('h-5 w-5 text-[#34495E] transition duration-75 group-hover:text-[#0577D0]', {
              '!text-[#0577D0]': open,
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
                <HiChevronDown className="mt-[4px] ml-[7px] h-4 w-4" />
              ) : (
                <HiChevronRight className="mt-[4px] ml-[7px] h-4 w-4" />
              )
            ) : open ? (
              <HiChevronUp className="h-5 w-5" />
            ) : (
              <HiChevronDown className="h-5 w-5" />
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
