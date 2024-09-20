import { State } from "@/app/lib/actions";

export default function ErrorMessage({
  id,
  state,
}: {
  id: keyof NonNullable<State["errors"]>; // Ensures id is a key from a non-null errors object
  state: State;
}) {
  const errors = state.errors?.[id] as string[] | undefined;

  return (
    <div id={`${id}-error`} aria-atomic="true" aria-live="polite">
      {Array.isArray(errors) &&
        errors.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
    </div>
  );
}
