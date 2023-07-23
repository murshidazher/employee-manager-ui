"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@murshidazher/employee-manager-ui";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

interface DataTableRowActionsProps {
  id: string;
}

export function DataTableRowActions({ id }: DataTableRowActionsProps) {
  return (
    <div className="flex flex-row">
      <Link href={`/employee/edit/${id}`}>
        <Button variant={"outline"} size={"icon"} className="mr-2">
          <Pencil className="h-4 w-4" />
        </Button>
      </Link>

      <AlertDialog defaultOpen>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant={"destructive"} size={"icon"}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                employee.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </AlertDialog>
    </div>
  );
}
