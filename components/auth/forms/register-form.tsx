// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { toast } from "react-toastify";
// import { z } from "zod";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import AuthCard from "@/components/auth/card/auth-card";
// import { RegisterSchema, RegisterInput } from "@/lib/zod/auth-form";

// const RegisterForm = () => {
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const form = useForm<RegisterInput>({
//     resolver: zodResolver(RegisterSchema),
//     defaultValues: {
//       email: "",
//       username: "",
//       password: "",
//       confirmPassword: "",
//     },
//   });

//   const onSubmit = async (data: RegisterInput) => {
//     setLoading(true);

//     try {
//       const res = await fetch("/api/users", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       const { message } = await res.json();

//       if (!res.ok) {
//         toast.error(message);
//       } else {
//         toast.success(message);
//         form.reset();
//         router.push("/");
//       }
//     } catch (error) {
//       toast.error("An unexpected error occurred.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AuthCard
//       title="Register"
//       label="Create an account"
//       backButtonHref="/login"
//       backButtonLabel="Already have an account? Login here."
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
//               name="username"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Username</FormLabel>
//                   <FormControl>
//                     <Input {...field} placeholder="yourusername" />
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
//             <FormField
//               control={form.control}
//               name="confirmPassword"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Confirm Password</FormLabel>
//                   <FormControl>
//                     <Input {...field} type="password" placeholder="******" />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <Button type="submit" className="w-full" disabled={loading}>
//             {loading ? "Loading..." : "Register"}
//           </Button>
//         </form>
//       </Form>
//     </AuthCard>
//   );
// };

// export default RegisterForm;
