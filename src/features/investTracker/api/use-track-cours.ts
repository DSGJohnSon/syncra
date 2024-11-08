import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { client } from "@/lib/rpc";
import { toast } from "@/hooks/use-toast";

type ResponseType = InferResponseType<
  (typeof client.api.investTracker.trackCours)["$post"]
>;
type RequestType = InferRequestType<
  (typeof client.api.investTracker.trackCours)["$post"]
>["json"];

export const useTrakcCours = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.investTracker.trackCours["$post"]({
        json,
      });
      return await response.json();
    },
    onSuccess: (response) => {
      const { symbol, price } = response;
      //convert string price (exemple 321.15512185) to a real number (321.16)
      const convertedPrice = parseFloat(price).toFixed(2);
      toast({
        title: "Login : Success",
        description: `${symbol} real price : $${parseFloat(price).toFixed(2)}`,
      });
    },
    onError: (error) => {
      console.log(error);
      toast({
        title: "Error: Something went wrong!",
        description: `${error}`,
        variant: "destructive",
      });
    },
  });

  return mutation;
};
