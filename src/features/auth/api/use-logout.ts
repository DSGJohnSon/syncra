import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

type ResponseType = InferResponseType<(typeof client.api.auth.logout)["$post"]>;

export const useLogout = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const response = await client.api.auth.logout["$post"]();
      return await response.json();
    },
    onSuccess: () => {
      router.refresh();
      toast({
        title: "Logout : Success",
        description: "See you soon 👋 !",
      });
      queryClient.invalidateQueries({ queryKey: ["current"] });
    },
    onError: () => {
      toast({
        title: "Error: Something went wrong!",
        description: "We couldn't log you out, please try again.",
        variant: "destructive",
      });
    },
  });

  return mutation;
};
