import React from "react";
import { z } from "zod";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../Categories";

const schema = z.object({
  description: z
    .string()
    .min(3, "Description should be at least 3 character")
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(0.1)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface props {
  onSubmit: (data: ExpenseFormData) => void; // note line
}

const ExpenseForm = ({ onSubmit }: props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  //   const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amout" className="form-label">
          Amout
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amout"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="select" className="form-label">
          Category
        </label>
        <select {...register("category")} id="select" className="form-select">
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-danger">Submit</button>
    </form>
  );
};

export default ExpenseForm;

// lecture no 59 Building ExpenseFilter
// lecture no 60 integrating React Hook From and Zod
// lecture no 61 Adding an Expense
