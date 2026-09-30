import ReusableInput from './ReusableInput';

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li className="flex justify-between my-4">
          <button className="text-stone-700 hover:text-red-500">Cancel</button>
        </li>
        <li className="flex justify-between my-4">
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <ReusableInput text="TITLE" type="text" />
      <ReusableInput text="DESCRIPTION" type="text" />
      <ReusableInput text="DUE DATE" type="date" />
    </div>
  );

  /*So here I need to continue to finish the New project component and Reusable input component (check the final result from the video to follow)
  I'm missing the input tags and the p or h2 titles, so that's what I have to work in for tomorrow Wednesday
  */
}
