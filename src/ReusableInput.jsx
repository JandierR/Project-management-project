export default function ReusableInput({
  text,
  type,
  textarea,
  name,
  handleChange,
  value,
  ...props
}) {
  const classes =
    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';
  return (
    <div className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {text}
      </label>
      {textarea ? (
        <textarea
          onChange={handleChange}
          name={name}
          className={classes}
          value={value}
          {...props}
        />
      ) : (
        <input
          onChange={handleChange}
          name={name}
          type={type}
          className={classes}
          value={value}
          {...props}
        />
      )}
    </div>
  );
}
