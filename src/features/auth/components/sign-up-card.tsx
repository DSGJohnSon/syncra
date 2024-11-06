"use client";

import * as React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LuLoader } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useRegister } from "../api/use-register";

export function SignUpCard() {
  const { mutate, isPending } = useRegister();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    mutate(values);
  }

  return (
    <Card className="w-[400px] rounded-3xl p-8">
      <CardHeader className="flex flex-col items-center">
        <Image src={"/logo.svg"} alt="Logo Syncra SVG" width={50} height={50} />
        <CardTitle className="font-bold text-2xl">Register</CardTitle>
        <CardDescription>
          Create an account to start tracking your life.
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Enter your name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter email address"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              variant={"secondary"}
              disabled={isPending}
              className="w-full">
              {isPending ? (
                <>
                  <LuLoader className="mr-2 size-5 animate-spin" />
                  Please wait...
                </>
              ) : (
                "Sign-up"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <div className="flex items-center gap-2 w-full">
        <Separator className="w-full shrink" />
        <span className="shrink-0 text-sm text-muted-foreground">or</span>
        <Separator className="w-full shrink" />
      </div>
      <CardContent className="space-y-4">
        <Button variant={"outline"} disabled={isPending} className="w-full">
          {isPending ? (
            <>
              <LuLoader className="mr-2 size-5 animate-spin" />
              Please wait...
            </>
          ) : (
            <>
              <FaGithub className="mr-2 size-5" />
              Sign-up with Github
            </>
          )}
        </Button>
        <Button variant={"outline"} disabled={isPending} className="w-full">
          {isPending ? (
            <>
              <LuLoader className="mr-2 size-5 animate-spin" />
              Please wait...
            </>
          ) : (
            <>
              <FcGoogle className="mr-2 size-5" />
              Sign-up with Google
            </>
          )}
        </Button>
      </CardContent>
      <Separator />
      <CardFooter className="flex flex-col items-center gap-4">
        <div className="text-sm flex gap-2">
          Already have an account ?
          <Link
            href={"/login"}
            title="Create an account"
            className="text-orange-500 underline">
            Login
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Badge variant={"tertiary"}>v1.0.0</Badge>
          <span className="text-xs text-muted-foreground">
            Copyright © - Frédérick Florkowski
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
