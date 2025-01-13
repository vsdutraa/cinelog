// "use client";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// import AuthCard from "@/components/auth/card/auth-card";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { LoginInput, LoginSchema } from "@/lib/zod/auth-form";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { useFormStatus } from "react-dom";
// import { useState } from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";

// const LoginForm = () => {
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const form = useForm({
//     resolver: zodResolver(LoginSchema),
//     defaultValues: {
//       email: "",
//       username: "",
//       password: "",
//       confirmPassword: "",
//     },
//   });

//   const onSubmit = async (data: LoginInput) => {
//     setLoading(true);

//     const { email, password } = data;

//     try {
//       const res = await signIn("credentials", {
//         email,
//         password,
//         redirect: false,
//       });

//       if (!res?.ok) {
//         toast.error("Invalid credentials.");
//       } else {
//         toast.success("Login successful.");
//         router.push("/");
//       }
//     } catch (error) {
//       toast.error("An unexpected error occurred.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const { pending } = useFormStatus();

//   return (
//     <AuthCard
//       title="Login"
//       label="Login to your account"
//       backButtonHref="/register"
//       backButtonLabel="Don't have an account? Register here."
//     >
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//           <div className="space-y-4">
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       type="email"
//                       placeholder="your@email.com"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Password</FormLabel>
//                   <FormControl>
//                     <Input {...field} type="password" placeholder="******" />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <Button type="submit" className="w-full" disabled={pending}>
//             {loading ? "Loading..." : "Login"}
//           </Button>
//         </form>
//       </Form>
//     </AuthCard>
//   );
// };

// export default LoginForm;
