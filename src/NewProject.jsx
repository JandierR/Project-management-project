import ReusableInput from './ReusableInput';

export default function NewProject({ onButtonClick }) {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li className="flex justify-between my-4">
          <button
            onClick={onButtonClick}
            className="text-stone-700 hover:text-red-500">
            Cancel
          </button>
        </li>
        <li className="flex justify-between my-4">
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <ReusableInput text="Title" type="text" />
        <ReusableInput textarea text="Description" type="text" />
        <ReusableInput text="Due date" type="date" />
      </div>
    </div>
  );
}
