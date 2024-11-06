import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

type ResponseType = InferResponseType<(typeof client.api.auth.login)["$post"]>;
type RequestType = InferRequestType<
  (typeof client.api.auth.login)["$post"]
>["json"];

export const useLogin = () => {

  const router = useRouter();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.auth.login["$post"]({ json });
      return await response.json();
    },
    onSuccess: () => {
      router.refresh();
      toast({
        title: "Login : Success",
        description: "Welcome back 🚀 !",
      })
    },
    onError: (error) => {
      console.log(error);
      toast({
        title: "Error: Something went wrong!",
        description: "We couldn't log you in, please try again.",
        variant: "destructive",
      });
    },
  });

  return mutation;
};
