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
        'border-r-xs hover:border-r-primary-800': !insideCollapse && !collapsed,
        'border-r-xs border-r-primary-800': active && !insideCollapse && !collapsed,
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
          'group flex w-full items-center py-4 pr-4.5 pl-6 text-sm font-normal transition duration-75 hover:bg-primary-425 hover:font-medium hover:!text-primary-800',
          {
            'bg-primary-425 !font-medium !text-primary-800': active,
            '!text-primary-900': !insideCollapse,
            'text-xs !text-neutral-800 hover:!bg-white hover:font-medium': insideCollapse,
          },
          className,
        )}
        {...rest}
      >
        {Icon && (
          <Icon
            className={classNames('h-5 w-5 stroke-primary-900 transition duration-75 group-hover:stroke-primary-800', {
              '!stroke-primary-800': active,
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
