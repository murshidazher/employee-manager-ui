"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
} from "@murshidazher/employee-manager-ui";
import { type ColumnDef } from "@tanstack/react-table";

import { genders } from "../../shared/data/data";
import { Employee } from "../../shared/data/schema";
import getFirstTwoInitials from "../helpers/get-first-two-initials";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: Array<ColumnDef<Employee>> = [
  {
    accessorKey: "photo",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="w-[60px] text-xs"
        column={column}
        title="Image"
      />
    ),
    cell: ({ row }) => (
      <div className="w-[60px]">
        <Avatar className="h-9 w-9 rounded-sm">
          <AvatarImage
            src={row.getValue("photo")}
            alt={row.getValue("firstName")}
          />
          <AvatarFallback>
            {getFirstTwoInitials(
              row.getValue("firstName"),
              row.getValue("lastName")
            )}
          </AvatarFallback>
        </Avatar>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="First name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("firstName")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("lastName")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("email")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("number")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "gender",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Gender" />
    ),
    cell: ({ row }) => {
      const label = genders.find((data) => data.value === row.original.gender);

      return (
        <div className="flex space-x-2">
          {label != null && <Badge variant="outline">{label.label}</Badge>}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-xs"
        column={column}
        title="Actions"
      />
    ),
    cell: ({ row }) => <DataTableRowActions id={row.original.id} />,
  },
];
