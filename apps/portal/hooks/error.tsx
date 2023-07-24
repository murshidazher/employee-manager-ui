import { useToast } from "@murshidazher/employee-manager-ui";
import { useEffect } from "react";

const useError = (error?: string, loading?: boolean): void => {
  const { toast } = useToast();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    if (loading || !error) return;
    toast({
      title: "ERROR",
      description: error,
    });
  }, [error, loading]);
};

export default useError;
