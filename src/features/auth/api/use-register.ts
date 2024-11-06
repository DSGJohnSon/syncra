import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

type ResponseType = InferResponseType<
  (typeof client.api.auth.register)["$post"]
>;
type RequestType = InferRequestType<
  (typeof client.api.auth.register)["$post"]
>["json"];

export const useRegister = () => {
  const router = useRouter();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.auth.register["$post"]({ json });
      return await response.json();
    },
    onSuccess: () => {
      router.refresh();
      toast({
        title: "Register : Success",
        description: "Welcome onboard 🚀 !",
      });
    },
    onError: () => {
      toast({
        title: "Error: Something went wrong!",
        description: "We couldn't sign you up, please try again.",
        variant: "destructive",
      });
    },
  });

  return mutation;
};
