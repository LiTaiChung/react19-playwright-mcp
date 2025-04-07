import { flexRender, Table as ReactTable } from '@tanstack/react-table';

import { cn } from '@/lib/utils';

export type TableProps<T> = {
  className?: string;
  table: ReactTable<T>;
};

const Table = <T,>({ className, table }: TableProps<T>) => {
  return (
    <div
      className={cn(
        'w-full overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md',
        className
      )}
    >
      <div className="max-h-96 overflow-y-auto">
        <table className="w-full text-left text-sm text-gray-700">
          <thead className="sticky top-0 bg-gray-100 text-xs uppercase text-gray-600">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className={cn(
                      'px-4 py-2 font-medium',
                      header.column.columnDef.meta?.align === 'right'
                        ? 'text-right'
                        : 'text-left'
                    )}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={cn(
                      'px-4 py-2',
                      cell.column.columnDef.meta?.align === 'right'
                        ? 'text-right'
                        : 'text-left'
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
