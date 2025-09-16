import { create } from "zustand";
import { type MarathonFormState } from "../libs/Store";
export const useMarathonFormStore = create<MarathonFormState>((set) => ({
  fname: "",
  lname: "",
  plan: "funrun",
  gender: "male",
  email: "",
  password: "",
  confirmPassword: "",
  haveCoupon: false,
  couponCode: "", 

  setFname: (fname) => set({ fname }),
  setLname: (lname) => set({ lname }),
  setPlan: (plan) => set({ plan }),
  setGender: (gender) => set({ gender }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
  discountCoupon: (coupon?: string): number => {
    const priceTable = {
      funrun: 500,
      mini: 800,
      half: 1200,
      full: 1500,
    } as const;

    const plan = useMarathonFormStore.getState().plan;
    let price = priceTable[plan];

    if (coupon === "CMU2025") price *= 0.7;

    return price;
  },
  reset: () =>
    set({
      fname: "",
      lname: "",
      plan: "funrun",
      gender: "male",
      email: "",
      password: "",
      confirmPassword: "",
      haveCoupon: false,
      couponCode: "",
    }),
}));