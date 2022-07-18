import classNames from 'classnames';
import { ComponentProps, ElementType, FC, PropsWithChildren } from 'react';
import { Badge, BadgeColor } from '../Badge';
import { Tooltip } from '../Tooltip';
import { useSidebarContext } from './SidebarContext';
import { useSidebarItemContext } from './SidebarItemContext';

export interface SidebarItem {
  className?: string;
  icon?: FC<ComponentProps<'svg'>>;
  label?: string;
  labelColor?: BadgeColor;
}

export interface SidebarItemProps extends PropsWithChildren<SidebarItem & Record<string, unknown>> {
  as?: ElementType;
  active?: boolean;
}

const SidebarItem: FC<SidebarItemProps> = ({
  children,
  className,
  as: Component = 'a',
  active,
  icon: Icon,
  label,
  labelColor = 'blue',
  ...rest
}) => {
  const { collapsed } = useSidebarContext();
  const { insideCollapse } = useSidebarItemContext();

  const Wrapper = ({ children: wrapperChildren }: PropsWithChildren<Record<string, unknown>>) => (
    <li
      data-testid="sidebar-item"
      className={classNames('cursor-pointer border-r-transparent', {
        'border-r-[2px] hover:border-r-[#0577D0]': !insideCollapse && !collapsed,
        'border-r-[2px] border-r-[#0577D0]': active && !insideCollapse && !collapsed,
      })}
    >
      {collapsed ? (
        <Tooltip style={'light'} content={children} data-testid="sidebar-item-tooltip" placement="right">
          {wrapperChildren}
        </Tooltip>
      ) : (
        wrapperChildren
      )}
    </li>
  );

  return (
    <Wrapper>
      <Component
        className={classNames(
          'group flex w-full items-center py-4 pl-6 pr-[18px] text-sm font-normal text-[#34495E] transition duration-75 hover:bg-[#D8EDFD] hover:font-medium hover:text-[#0577D0]',
          {
            'bg-[#D8EDFD] !font-medium !text-[#0577D0]': active,
            'text-xs !text-[#6C859E] hover:!bg-white hover:font-medium hover:!text-[#0577D0]': insideCollapse,
          },
          className,
        )}
        {...rest}
      >
        {Icon && (
          <Icon
            className={classNames('h-5 w-5 stroke-[#34495E] transition duration-75 group-hover:stroke-[#0577D0]', {
              '!stroke-[#0577D0]': active,
            })}
          />
        )}
        {!collapsed && (
          <span className="ml-3 flex-1 whitespace-nowrap" data-testid="sidebar-item-content">
            {children}
          </span>
        )}
        {!collapsed && label && (
          <Badge color={labelColor} data-testid="sidebar-item-label">
            {label}
          </Badge>
        )}
      </Component>
    </Wrapper>
  );
};

SidebarItem.displayName = 'Sidebar.Item';
export default SidebarItem;
