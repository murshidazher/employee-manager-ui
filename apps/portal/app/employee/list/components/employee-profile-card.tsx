import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Card,
} from "@murshidazher/employee-manager-ui";
import { cn } from "@murshidazher/employee-manager-ui-lib";
import * as React from "react";

import { genders } from "../../shared/data/data";
import { Employee } from "../../shared/data/schema";
import getFirstTwoInitials from "../helpers/get-first-two-initials";
import { DataTableRowActions } from "./data-table-row-actions";

interface EmployeeProfileCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  profile: Employee;
}

export const EmployeeProfileCard = ({
  profile,
  className,
  ...props
}: EmployeeProfileCardProps) => {
  const name = `${profile.firstName} ${profile.lastName}`;
  const genderLabel = genders.find((data) => data.value === profile.gender);

  return (
    <Card className={cn("grid gap-1", className)}>
      <div className="h-[240px] overflow-hidden rounded-t-lg">
        <Avatar
          className={cn(
            "h-auto w-auto rounded-none object-cover object-center transition-all hover:scale-105"
          )}
        >
          <AvatarImage src={profile.photo} alt={name} />
          <AvatarFallback>
            {getFirstTwoInitials(profile.firstName, profile.lastName)}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="font-semibold leading-none tracking-tight">
          {`${profile.firstName} ${profile.lastName}`}
        </div>
        <div className="text-muted-foreground text-sm">{profile.email}</div>
        <div className="text-muted-foreground text-sm">{profile.number}</div>
        <Badge variant="outline" className="w-fit">
          {genderLabel?.label}
        </Badge>
        <div className="flex flex-row justify-end">
          <DataTableRowActions id={profile.id} />
        </div>
      </div>
    </Card>
  );
};
