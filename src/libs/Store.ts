//Store.ts
import { type MarathonForm } from "../zod/MarathonSchema";
interface MarathonFormState {
  fname: string;
  lname: string;
  plan: "funrun" | "mini" | "half" | "full";
  gender: "male" | "female";
  email: string;
  password: string;
  confirmPassword: string;
  haveCoupon: boolean;
  couponCode: string;
  // Setters
  setFname: (v: string) => void;
  setLname: (v: string) => void;
  setPlan: (v: MarathonForm["plan"]) => void;
  setGender: (v: MarathonForm["gender"]) => void;
  setEmail: (v: string) => void;
  setPassword: (v: string) => void;
  setConfirmPassword: (v: string) => void;
  
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
  discountCoupon: (coupon?: string) => number;
  reset: () => void;
}
export type { MarathonFormState }