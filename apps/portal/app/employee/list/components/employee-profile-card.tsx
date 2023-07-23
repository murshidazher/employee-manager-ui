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
  const name = `${profile.first_name} ${profile.last_name}`;
  const genderLabel = genders.find((data) => data.value === profile.gender);

  return (
    <Card className={cn("grid gap-1", className)}>
      <div className="rounded-t-lg h-[240px] overflow-hidden">
        <Avatar
          className={cn(
            "h-auto w-auto rounded-none object-cover object-center transition-all hover:scale-105"
          )}
        >
          <AvatarImage src={profile.photo} alt={name} />
          <AvatarFallback>
            {getFirstTwoInitials(profile.first_name, profile.last_name)}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="font-semibold leading-none tracking-tight">
          {`${profile.first_name} ${profile.last_name}`}
        </div>
        <div className="text-sm text-muted-foreground">{profile.email}</div>
        <div className="text-sm text-muted-foreground">{profile.number}</div>
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
