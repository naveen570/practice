import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const addFormSchema = z.object({
  text: z.string().min(1),
});
type AddForm = z.infer<typeof addFormSchema>;
export const AddForm = () => {
  const form = useForm<AddForm>({
    defaultValues: { text: "" },
    resolver: zodResolver(addFormSchema),
  });
  const onSubmit = (data: AddForm) => console.log(data);
  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <input
          type="text"
          {...form.register("text")}
          autoComplete="off"
        ></input>
        <span>{form.formState.errors.text?.message}</span>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
